# Data Loading

## Load text files into pandas dataframe

### Custom seperator

Let's assume we have a `.txt` file of emails. Each email is seperated by 50 `-` symbols (dashed line). So we can use the below code to load this kind of data into pandas dataframe.

```py
def load_data(file_path):
    my_file = open(file_path, 'r')
    data = my_file.read()
    data_into_list = data.split("-"*50)
    my_file.close()
    df = pd.DataFrame({'text': data_into_list}).replace('', np.nan).dropna()
    df.reset_index(drop=True, inplace=True)
    return df
```