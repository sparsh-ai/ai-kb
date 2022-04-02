# FastAPI AWS Lambda

## CI/CD Cloudformation template

```yaml title="pipeline.yml"
AWSTemplateFormatVersion: 2010-09-09
Description: The CloudFormation template for the CodePipeline.
Parameters:
  ProjectName:
    Type: String
    Default: model-api
  ENV:
    Type: String
    Default: dev
  GithubUserName:
    Type: String
    Default: <user name>
  GithubRepo:
    Type: String
    Default: <repo name>
    Type: String
    Default: <branch name>
  GithubOAuthToken:
    Type: String
    Default: ghp_** <github user access token>
Resources:
  S3Bucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      BucketName: !Join 
        - '-'
        - - !Ref ProjectName
          - !Ref ENV
  ECRRepository:
    Type: AWS::ECR::Repository
    Properties: 
      RepositoryName: !Join 
        - '-'
        - - !Ref ProjectName
          - !Ref ENV
  CodePipeLineExecutionRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          - Effect: Allow
            Principal:
              Service: codepipeline.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AdministratorAccess'
  CodeBuildExecutionRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          Effect: Allow
          Principal:
            Service: codebuild.amazonaws.com
          Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AdministratorAccess'
  CloudformationExecutionRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          - Effect: Allow
            Principal:
              Service: cloudformation.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AdministratorAccess'
  # CodeBuildDockerCacheRole:
  #   Type: 'AWS::IAM::Role'
  #   Properties:
  #     AssumeRolePolicyDocument:
  #       Statement:
  #         - Effect: Allow
  #           Principal:
  #             Service: ecr.amazonaws.com
  #           Action: 'sts:AssumeRole'
  #     ManagedPolicyArns:
  #       - 'arn:aws:iam::aws:policy/AdministratorAccess'
  BuildProject:
    Type: 'AWS::CodeBuild::Project'
    Properties:
      Artifacts:
        Type: CODEPIPELINE
      Environment:
        ComputeType: BUILD_GENERAL1_SMALL
        Image: 'aws/codebuild/standard:5.0'
        ImagePullCredentialsType: CODEBUILD
        PrivilegedMode: true
        Type: LINUX_CONTAINER
        EnvironmentVariables:
          - Name: ECR_REPOSITORY_URI
            Value: !Join [ ".", [ !Ref "AWS::AccountId", "dkr.ecr", !Ref "AWS::Region", !Join [ "/", [ "amazonaws.com", !Ref "ECRRepository" ] ] ] ]
      Name: !Join 
        - '-'
        - - !Ref ProjectName
          - BuildProject
          - !Ref ENV
      ServiceRole: !Ref CodeBuildExecutionRole
      Source:
        Type: CODEPIPELINE
        BuildSpec: buildspec.yml
      Cache:
        Type: LOCAL
        Modes:
          - LOCAL_CUSTOM_CACHE
          - LOCAL_DOCKER_LAYER_CACHE
          - LOCAL_SOURCE_CACHE
  CodePipeLine:
    Type: 'AWS::CodePipeline::Pipeline'
    DependsOn: S3Bucket
    Properties:
      ArtifactStore:
        Location: !Join 
          - '-'
          - - !Ref ProjectName
            - !Ref ENV
        Type: S3
      Name: !Join 
        - '-'
        - - !Ref ProjectName
          - CodePipeLine
          - !Ref ENV
      RestartExecutionOnUpdate: false
      RoleArn:
        'Fn::GetAtt':
          - CodePipeLineExecutionRole
          - Arn
      Stages:
        - Name: Source
          Actions:
            - Name: Source
              ActionTypeId:
                Category: Source
                Owner: ThirdParty
                Provider: GitHub
                Version: 1
              Configuration:
                Repo: !Ref GithubRepo
                Branch: !Ref GithubBranch
                Owner: !Ref GithubUserName
                OAuthToken: !Ref GithubOAuthToken
              RunOrder: 1
              OutputArtifacts:
                - Name: source-output-artifacts
        - Name: Build
          Actions:
            - Name: Build
              ActionTypeId:
                Category: Build
                Owner: AWS
                Version: 1
                Provider: CodeBuild
              OutputArtifacts:
                - Name: build-output-artifacts
              InputArtifacts:
                - Name: source-output-artifacts
              Configuration:
                ProjectName: !Ref BuildProject
              RunOrder: 1
```

## API Cloudformation template

```yaml title="template.yml"
AWSTemplateFormatVersion: '2010-09-09'
Transform: 'AWS::Serverless-2016-10-31'
Description: An AWS Serverless Specification template for text classification model.

Globals:
  Function:
    Timeout: 30
    MemorySize: 10000
    Environment:
      Variables:
        MODEL_DIR: /mnt/ml/models/
        NETWORK_DIR: /mnt/ml/network/ 

Parameters:
  SrcBucket:
    Type: String
    Description: Name of S3 bucket which will have the new ML models 
    Default: text-classifier-api-dev-models

Resources:

  MyS3Bucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      BucketName: !Ref SrcBucket
      
  EfsLambdaVpc:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: "10.0.0.0/16"

  InternetGateway:
    Type: 'AWS::EC2::InternetGateway'
    Properties:
      Tags:
      - Key: Name
        Value: !Sub '10.0.0.0/16'

  VPCGatewayAttachment:
    Type: 'AWS::EC2::VPCGatewayAttachment'
    Properties:
      VpcId: !Ref EfsLambdaVpc
      InternetGatewayId: !Ref InternetGateway
      
  SubnetAPublic:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref EfsLambdaVpc
      AvailabilityZone: !Select [ 0, !GetAZs '' ]
      MapPublicIpOnLaunch: true
      CidrBlock: "10.0.0.0/24"
      
  SubnetAPrivate:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref EfsLambdaVpc
      AvailabilityZone: !Select [ 1, !GetAZs '' ]
      CidrBlock: "10.0.1.0/24"

  RouteTableAPublic:
    Type: 'AWS::EC2::RouteTable'
    Properties:
      VpcId: !Ref EfsLambdaVpc

  RouteTableAPrivate:
    Type: 'AWS::EC2::RouteTable'
    Properties:
      VpcId: !Ref EfsLambdaVpc

  RouteTableAssociationAPublic:
    Type: 'AWS::EC2::SubnetRouteTableAssociation'
    Properties:
      SubnetId: !Ref SubnetAPublic
      RouteTableId: !Ref RouteTableAPublic
      
  RouteTableAssociationAPrivate:
    Type: 'AWS::EC2::SubnetRouteTableAssociation'
    Properties:
      SubnetId: !Ref SubnetAPrivate
      RouteTableId: !Ref RouteTableAPrivate
      
  RouteTablePublicAInternetRoute:
    Type: 'AWS::EC2::Route'
    DependsOn: VPCGatewayAttachment
    Properties:
      RouteTableId: !Ref RouteTableAPublic
      DestinationCidrBlock: '0.0.0.0/0'
      GatewayId: !Ref InternetGateway

  EIPA:
    Type: 'AWS::EC2::EIP'
    Properties:
      Domain: vpc
      
  NatGatewayA:
    Type: 'AWS::EC2::NatGateway'
    Properties:
      AllocationId: !GetAtt 'EIPA.AllocationId'
      SubnetId: !Ref SubnetAPublic

  RouteA:
    Type: 'AWS::EC2::Route'
    Properties:
      RouteTableId: !Ref RouteTableAPrivate
      DestinationCidrBlock: '0.0.0.0/0'
      NatGatewayId: !Ref NatGatewayA
        
  EfsLambdaSecurityGroup:
    Type: 'AWS::EC2::SecurityGroup'
    Properties:
      GroupDescription: 'Security group for NAT Gateway Lambda'
      VpcId: !Ref EfsLambdaVpc
      SecurityGroupEgress:
        - CidrIp: "0.0.0.0/0"
          # FromPort: 0
          # ToPort: 65535
          IpProtocol: -1
      SecurityGroupIngress:
        - CidrIp: "0.0.0.0/0"
          # FromPort: 0
          # ToPort: 65535
          IpProtocol: -1     
  
  EfsFileSystem:
    Type: AWS::EFS::FileSystem
    
  MountTargetA:
    Type: AWS::EFS::MountTarget
    Properties:
      FileSystemId: !Ref EfsFileSystem
      SubnetId: !Ref SubnetAPrivate
      SecurityGroups:
        - !Ref EfsLambdaSecurityGroup

  AccessPoint:
    Type: AWS::EFS::AccessPoint
    Properties:
      FileSystemId: !Ref EfsFileSystem
      PosixUser:
        Gid: "1000"
        Uid: "1000"
      RootDirectory:
        Path: "/ml"
        CreationInfo:
          OwnerGid: "1000"
          OwnerUid: "1000"
          Permissions: "755"
          
  MLModelUploadFunction:
    Type: AWS::Serverless::Function
    DependsOn:
      - MountTargetA
    Properties:
      CodeUri: s3-efs/
      Handler: app.lambda_handler
      Runtime: python3.7  
      FunctionName: lambda-model-s3-efs
      VpcConfig:
        SecurityGroupIds:
          - !Ref EfsLambdaSecurityGroup
        SubnetIds:
          - !Ref SubnetAPrivate
      FileSystemConfigs:
        - Arn: !GetAtt AccessPoint.Arn
          LocalMountPath: /mnt/ml
      Policies:
        - S3CrudPolicy: 
            BucketName: !Ref SrcBucket
        - EFSWriteAccessPolicy:
            FileSystem: !Ref EfsFileSystem
            AccessPoint: !Ref AccessPoint
      Events:
        UploadMLModelEvent:
          Type: S3
          Properties:
            Bucket: !Ref MyS3Bucket
            Events: s3:ObjectCreated:*

  TextClassifierAPIFunction:
    Type: 'AWS::Serverless::Function'
    DependsOn: 
      - MountTargetA
    Properties:
      PackageType: Image
      Description: ''
      FunctionName: lambda-model-api
      VpcConfig:
        SecurityGroupIds:
          - !Ref EfsLambdaSecurityGroup
        SubnetIds:
          - !Ref SubnetAPrivate
      FileSystemConfigs:
        - Arn: !GetAtt AccessPoint.Arn
          LocalMountPath: /mnt/ml
      Policies:
        - S3CrudPolicy: 
            BucketName: !Ref SrcBucket
        - EFSWriteAccessPolicy:
            FileSystem: !Ref EfsFileSystem
            AccessPoint: !Ref AccessPoint 
      Events:
        Api1:
          Type: Api
          Properties:
            Path: '/{proxy+}'
            Method: ANY
            RestApiId:
              Ref: FastapiGateway
        Api2:
          Type: Api
          Properties:
            Path: /
            Method: ANY
            RestApiId:
              Ref: FastapiGateway
      Environment:
        Variables:
          STAGE: dev

    Metadata:
      Dockerfile: Dockerfile
      DockerContext: ./app
      DockerTag: latest
          
  FastapiGateway:
      Type: AWS::Serverless::Api
      Properties:
          StageName: dev
          OpenApiVersion: '3.0.0'
```

## Buildspec

```yaml title="buildspec.yml"
version: 0.2
env:
    variables:
      CONTAINER_REPO_URL: <account-id>.dkr.ecr.<region>.amazonaws.com
      CONTAINER_REPO_NAME: <reco-name>
      REGION: <region>
      TAG_NAME: latest
phases:
  install:
    commands:
      - nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://127.0.0.1:2375 --storage-driver=overlay2 &
      - timeout 15 sh -c "until docker info; do echo .; sleep 1; done"
  pre_build:
    commands:
      - aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $CONTAINER_REPO_URL
  build:
    commands:
      - sam build --use-container
      - sam deploy --no-confirm-changeset --no-fail-on-empty-changeset --stack-name sam-$CONTAINER_REPO_NAME --s3-bucket $CONTAINER_REPO_NAME --image-repository $CONTAINER_REPO_URL/$CONTAINER_REPO_NAME --capabilities CAPABILITY_IAM --region $REGION
```

## S3-EFS Lambda

```py title="/s3-efs/app.py"
import boto3
import os

model_dir = os.getenv('MODEL_DIR', '/mnt/ml/models/')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    
    raw_dir = os.path.join(model_dir, 'raw')
    processed_dir = os.path.join(model_dir, 'processed')
    
    os.makedirs(raw_dir, exist_ok=True)
    os.makedirs(processed_dir, exist_ok=True)

    bucket_name = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']
    
    save_path = os.path.join(model_dir, key)
    
    print(save_path)
    
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    
    s3.download_file(bucket_name, key, save_path)
    
    print("ML Model file downloaded!")
```

## Dockerfile

```text title="/app/Dockerfile"
FROM public.ecr.aws/lambda/python:3.8
RUN yum install -y openblas-serial\
gmp gmp-devel
COPY requirements.txt ./
RUN python3.8 -m pip install -r requirements.txt 
RUN mkdir -p /mnt/ml
RUN mkdir -p ./app
COPY app.py ./app/
COPY src/ ./app/src/
COPY __init__.py ./app/
CMD ["app.app.handler"]
```