# AWS (Amazon Web Services)


## Ouvrir un compte personnel sur AWS 

Note: Si vous en avez deja un entrer dans votre compte.

https://aws.amazon.com/fr/console/

## Numéro de compte AWS

Récupérer votre numéro de compte AWS dans les paramètres de votre compte.

![alt tag](IDduCompte.png)


## Créer un compte AWS Educate

https://aws.amazon.com/fr/education/awseducate/

* Suivre les instructions de remplissage d'utilisateurs de type `Étudiants`  
* Remplir la forme ci-dessous selon le modèle

![alt tag](AWSEducateForm.png)

* Pour `étudiants`, créer le compte avec le courriel `@monboreal.ca`  
* Pour `professeurs`, créer le compte avec le courriel `@collegeboreal.ca`  

---

* Pour ID du compte:  Rechercher l'information dans votre compte `AWS Tableau de Bord` (voir ci dessus)

![alt tag](aws.PNG)

* Pour terminer l'application appuyer sur `Submit`

* Vous recevrez des courriels vous précisant que votre application a été approuvée

## Se connecter à AWS Educate

https://www.awseducate.com/SiteLogin


# AWS Deploiement

#### appliquer vos identifiants
~/.aws/credentials
```
[default]
    aws_access_key_id = <me remplir>
    aws_secret_access_key = <me remplir>

[mon-profil]
    aws_access_key_id = <me remplir>
    aws_secret_access_key = <me remplir>

```

#### Sous Docker, Lancer une nouvelle machine

par défaut (t2.micro)
```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        CB-DEV
```

Avec une instance plus large
```
$ docker-machine create --driver amazonec2  \ 
                        --amazonec2-instance-type t2.small \
                        --amazonec2-security-group default CB-DEV
```

Avec un sous-réseau
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-vpc-id vpc-yyyy \
                        --amazonec2-subnet-id subnet-yyyy \
                        --amazonec2-zone b \
                        CB-DEV
```

Avec un autre profil
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-security-group default \
                        --amazonec2-iam-instance-profile mon-profil \  
                        CB-DEV
```


## Installer sur Ubuntu xenial

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

# usermod -aG docker ubuntu

$ sudo service docker start

$ sudo service docker status

```



# AWS CLI

https://aws.amazon.com/fr/cli/


