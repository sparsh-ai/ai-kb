# FastAPI Localhost

## Requirements

```text title="/requirements.txt"
fastapi>=0.73
uvicorn>=0.17.4
requests
python-multipart
python-jose
cryptography
passlib[bcrypt]
```

## App with API authentication

```py title="/app.py"
from typing import List
import os

from fastapi import Depends, FastAPI, HTTPException, status, Security, BackgroundTasks
from fastapi.security.api_key import APIKeyQuery, APIKeyHeader, APIKey
from passlib.context import CryptContext
from pydantic import BaseModel

from src.model import MyClassificationModel

import src.handle as handle


root_dir = '../../data/artifacts'


app = FastAPI(title="Classification API", 
              description="Classifies the text reviews", 
              version="1.0")


##########################################################################################
## AUTH CODE ##
##########################################################################################


API_KEY_HASH = "<api_key>"
API_KEY_NAME = "access_token"

api_key_query = APIKeyQuery(name=API_KEY_NAME, auto_error=False)
api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

async def get_api_key(
    api_key_query: str = Security(api_key_query),
    api_key_header: str = Security(api_key_header),
):
    print(api_key_query)
    print(api_key_header)
    
    if api_key_query is not None and verify_password(api_key_query, API_KEY_HASH):
        return api_key_query
    elif api_key_header is not None and verify_password(api_key_header, API_KEY_HASH):
        return api_key_header
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials"
        )


##########################################################################################
## APP CODE ##
##########################################################################################


class body_classify_text(BaseModel):
    user_id : str
    product_ids : List
    weights : dict = None
    return_df : bool = False

@app.get("/")
async def read_main(background_tasks: BackgroundTasks):
    return {"msg": "Text Classification API"}


@app.post('/classify_text')
async def classify_text(data: body_classify_text, api_key: APIKey = Depends(get_api_key)):
    predictions = handle.model_classify_text.predict(user_id = data.user_id, 
                                                            product_ids = data.product_ids)
    return {"predictions": predictions}


##########################################################################################
## HANDLER ##
##########################################################################################

if __name__ == '__main__':
    uvicorn.run(app)
```

## App with OAuth2 authentication

```py title="/app.py"
from typing import List, Optional
from datetime import datetime, timedelta
import os

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

from src.model import MyClassificationModel

import src.handle as handle


root_dir = '../../data/artifacts'


app = FastAPI(title="Classification API", 
              description="Classifies the text reviews", 
              version="1.0")


##########################################################################################
## AUTH CODE ##
##########################################################################################


# openssl rand -hex 32
# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "<randomhash>"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


users_db = {
    "user": {
        "username": "user",
        "full_name": "John Doe",
        "email": "jdoe@example.com",
        "hashed_password": "<hash>",
        "disabled": False,
    },
}


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None
    
    
class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None


class UserInDB(User):
    hashed_password: str
    
    
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


##########################################################################################
## APP CODE ##
##########################################################################################


class body_classify_text(BaseModel):
    user_id : str
    product_ids : List = None
    weights : dict = None


@app.on_event('startup')
async def load_model():
    handle.model_classify_text = MyClassificationModel(root_dir)


@app.get("/")
async def read_main(current_user: User = Depends(get_current_active_user)):
    return {"msg": "Text Classification API"}
    

@app.post('/classify_text')
async def classify_text(data: body_classify_text, current_user: User = Depends(get_current_active_user)):
    predictions = handle.model_classify_text.predict(user_id = data.user_id, 
                                                            product_ids = data.product_ids)
    return {"predictions": predictions}
```

## Test

```py title="/tests/test_api.py"
from fastapi.testclient import TestClient
from app import app
import json

client = TestClient(app)

def test_root():
    response_auth = client.get("/")
    assert response_auth.status_code == 200
    
def test_some_post():
    data = {"id": "2"}
    response_auth = client.post("/predict",
                           headers={"X-Token": "coneofsilence"},
                           json=data)
    assert response_auth.status_code == 200 
    assert response_auth.json()["predictions"] == "{'weighted_similarity': {1: 1.7320508075688767, 2: 0.7071067811865475}}"
```