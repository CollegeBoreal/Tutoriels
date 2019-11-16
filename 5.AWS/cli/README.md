# AWS CLI

## :o: Installation

https://aws.amazon.com/fr/cli/

:m: Avec `package Managers`

:pushpin: [MacOS](https://formulae.brew.sh/formula/awscli)

```
$ brew install awscli
```

:pushpin: [Windows](https://chocolatey.org/packages/awscli)

```
$ choco install awscli
```

* Test de l'installation

```
$ aws --version
aws-cli/1.16.280 Python/3.7.5 Darwin/19.0.0 botocore/1.13.16
```

## :one: Configuration ~/.aws/config

* Afficher la liste des régions

```
$ aws ec2 describe-regions
```

* Configurer la  région par défault (dans notre example us-east-1)

```
$ aws configure
AWS Access Key ID [****************DN2Q]: 
AWS Secret Access Key [****************nl3Z]: 
Default region name []: us-east-1
Default output format [None]:
```

## :two: Utilisation

:pushpin: Groupe De

```
$ aws ec2 describe-security-groups --group-names default
```

