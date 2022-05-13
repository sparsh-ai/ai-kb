# Docusaurus


## AWS Amplifiy for hosting

### CI/CD Cloudformation template

```yaml title="./docs/pipeline.yml"
AWSTemplateFormatVersion: 2010-09-09

Description: Stack for AWS Amplify App

Parameters:
  ProjectName:
    Type: String
    Default: <your project name>
  ENV:
    Type: String
    Default: <your environment>
  GithubBranch:
    Type: String
    Default: <your branch>
  GithubOAuthToken:
    Type: String
    Default: <your github personal access token>
    NoEcho: true
  Repository:
    Type: String
    Default: <your github repository>
    Description: Github Repository URL
  Domain:
    Type: String
    Default: <custom domain, e.g. amplify.recohut.com>
    Description: Custom Domain Name

Resources:

  S3Bucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      BucketName: !Join 
        - '-'
        - - !Ref ProjectName
          - !Ref ENV
      BucketEncryption:
        ServerSideEncryptionConfiguration:
          - ServerSideEncryptionByDefault:
              SSEAlgorithm: AES256
    UpdateReplacePolicy: Retain
    DeletionPolicy: Retain

  AmplifyRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          - Effect: Allow
            Principal:
              Service: amplify.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AdministratorAccess'

  AmplifyApp:
    Type: "AWS::Amplify::App"
    Properties:
      Name: !Join 
        - '-'
        - - !Ref ProjectName
          - !Ref ENV
      Repository: !Ref Repository
      Description: 
      OauthToken: !Ref GithubOAuthToken
      BuildSpec: |-
        version: 1
        backend:
          phases:
            build:
              commands:
                - amplifyPush --simple
        frontend:
          phases:
            preBuild:
              commands:
                - yarn install
            build:
              commands:
                - yarn run build
          artifacts:
            baseDirectory: build
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*
      # CustomRules:
      #   - Source: /dist/vue.min.js
      #     Target: /vue.min.js
      #     Status: '200'
      Tags:
        - Key: Name
          Value: Value
      IAMServiceRole: !GetAtt AmplifyRole.Arn

  AmplifyBranch:
    Type: AWS::Amplify::Branch
    Properties:
      BranchName: !Ref GithubBranch
      AppId: !GetAtt AmplifyApp.AppId
      Description: Docs
      EnableAutoBuild: true
      Tags:
        - Key: Name
          Value: jinniai-docs
        - Key: Branch
          Value: !Ref GithubBranch

  AmplifyDomain:
    Type: AWS::Amplify::Domain
    Properties:
      DomainName: !Ref Domain
      AppId: !GetAtt AmplifyApp.AppId
      SubDomainSettings:
        - Prefix: !Ref GithubBranch
          BranchName: !GetAtt AmplifyBranch.BranchName

Outputs:
  DefaultDomain:
    Value: !GetAtt AmplifyApp.DefaultDomain

  DocsBranchUrl:
    Value: !Join [ ".", [ !GetAtt AmplifyBranch.BranchName, !GetAtt AmplifyDomain.DomainName ]]
```