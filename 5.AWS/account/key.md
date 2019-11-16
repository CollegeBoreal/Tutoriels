# Gestion des clés

# :one: Créer sa clé d'accès

:pushpin: Dans le menu de votre profil `AWS`, selectioner `Security Credentials` 

![image](images/menu.png)

:pushpin: Dans la fenetre des choix de securite ci-dessous, choisir `Security Credentials` 

![image](images/SecurityCredentials.png)

:pushpin: Dans la fenetre ci-dessous, choisir `clés d'accès`

![image](images/CleAccess.png)

:pushpin: Générer votre clé


![image](images/CreerCle.png)



# :two: Installation ses clés sur votre machine

```
$ mkdir -p ~/.aws
$ nano ~/.aws/credentials
```

#### appliquer vos identifiants

```
[default]
    aws_access_key_id = <me remplir>
    aws_secret_access_key = <me remplir>

```
