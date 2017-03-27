# AWS (Amazon Web Services)

## Créer un compte AWS

https://aws.amazon.com/fr/education/awseducate/

* Pour étudiants, créer le compte avec @monboreal.ca

## Se connecter à AWS Educate

https://www.awseducate.com/SiteLogin


# AWS Deploiement

### Docker Machine AWS

#### Installer Docker-Machine 
https://docs.docker.com/machine/install-machine/

#### appliquer vos identifiants
~/.aws/credentials
```
[default]
    aws_access_key_id = <me remplir>
    aws_secret_access_key = <me remplir>
```

#### Lancer une nouvelle machine

par défaut (t2.micro)
```
$ docker-machine create --driver amazonec2  --amazonec2-security-group monGroupe maVM
```

Avec une instance plus large
```
$ docker-machine create --driver amazonec2  --amazonec2-instance-type t2.small --amazonec2-security-group monGroupe maVM
```

Avec un sous-réseau
```
$ docker-machine create --driver amazonec2 --amazonec2-vpc-id vpc-xxxx --amazonec2-subnet-id subnet-xxxx --amazonec2-zone b maVM



