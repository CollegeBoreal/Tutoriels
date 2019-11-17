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

* [Configurer](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) la  région par défault (dans notre example us-east-1)

```
$ aws configure
AWS Access Key ID [****************DN2Q]: 
AWS Secret Access Key [****************nl3Z]: 
Default region name []: us-east-1
Default output format [None]:
```

* avec un profil

```
$ aws configure --profile mon-profil
AWS Access Key ID [****************DN2Q]: 
AWS Secret Access Key [****************nl3Z]: 
Default region name []: us-east-1
Default output format [None]:
```

## :two: Utilisation

:bulb: `[ --profile <profile-name> ]` est a rajouter si les profils sont geres

:pushpin:  Groupes de Sécurité

* Liste les groupes de sécurités  

```
$ aws ec2 describe-security-groups | grep GroupName  [ --profile <profile-name> ]
```

* Décrit le groupe de sécurité `default`

```
$ aws ec2 describe-security-groups --group-names default  [ --profile <profile-name> ]
```

:pushpin:  Instances

```
$ aws ec2 describe-instances --output table  [ --profile <profile-name> ]
```

:pushpin:  [Authoriser](https://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html) un port en entree

```
$ aws ec2 authorize-security-group-ingress --group-name <group-name> \
                                           --protocol tcp --port 9021 \
                                           --cidr 0.0.0.0/0 [ --profile <profile-name> ]
```

:pushpin:  [Revoquer](https://docs.aws.amazon.com/cli/latest/reference/ec2/revoke-security-group-ingress.html) un port en entree

```
$ aws ec2 revoke-security-group-ingress --group-name <group-name> \
                                        --protocol tcp --port 9021 \
                                        --cidr 0.0.0.0/0  [ --profile <profile-name> ]
```
