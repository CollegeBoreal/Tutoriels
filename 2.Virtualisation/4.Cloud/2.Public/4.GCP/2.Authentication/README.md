# :two: gcloud [Auth](https://cloud.google.com/sdk/gcloud/reference/auth)entication

Pour authentifier son ordinateur, il y a plusieurs façons: 

* avec son compte courriel utilisé pour s'enregistré à la console `Google`

* avec un compte de service permettant de se connecter aux `API` de google et utilise les outils de nuage comme `docker` et `kubernetes

## :a: Machine cliente `AVEC` navigateur web

* Activate [Login Account](https://cloud.google.com/sdk/gcloud/reference/auth/login) 

Donnes ton nom de compte que tu utilises pour accéder à ton compte google. Par exemple ton email `39999999@collegeboreal.ca`

```
PS > gcloud auth login 399999999@collegeboreal.ca
```
Reponse: Google te fournira un lien `http` que tu colleras dans ton navigateur pour etre authentifié
```
Your browser has been opened to visit:

    https://accounts.google.com/o/oauth2/authcode_challenge=bt3MZaa.....pzJPPs&prompyunt&......com%2Fauth%2Faccounts.reauth

You are now logged in as [399999999@collegeboreal.ca].
Your current project is [None].  You can change this setting by running:
PS  > gcloud config set project PROJECT_ID
```

## :b: Machine client `SANS` navigateur web i.e. machine de production

### :star: [Créer un Compte de Service](https://cloud.google.com/docs/authentication/production#creating_a_service_account)


1. Dans La [`Console Google Cloud`](https://console.cloud.google.com), aller à la page `Create service account key` en cliquant le lien ci-dessous:
    
    [**Go to the Create Service Account Key page**](https://console.cloud.google.com/apis/credentials/serviceaccountkey)
    
1. Dans la liste `Service account`, selectionne `New service account`.

1. Dans le champ `Service account name`, entre un nom.

1. Dans la liste `Role`, selectionne `Project > Owner`.

1. Clique sur le bouton [`Create`](). 

    * Le fichier JSON qui contient ta clé sera téléchargé et doit être sauvegardé dans le répertoire `~/.gcp` 
    
    * Crée le répertoire `~.gcp` au préalable.

    Exemple de nom de fichier, ajuste ton nom de fichier `identifiants`

    ```
    ~/.gcp/b300098957-a2662a9bd338.json
    ```
    

### :star: Activer le [Compte de service](https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account) 

Avec le fichier `identifiants` en place, éxécute les commande suivantes 

:computer: Sous PowerShell 

```
PS > gcloud auth activate-service-account --key-file=$env:USERPROFILE\.gcp\b300098957-a2662a9bd338.json
```

:apple: Sous bash

```
$ gcloud auth activate-service-account --key-file=${HOME}/.gcp/b300098957-a2662a9bd338.json
```

### Visualise la liste des comptes identifiants

```
$ gcloud auth list
                  Credentialed Accounts
ACTIVE  ACCOUNT
        300098957@collegeboreal.ca
*       534284581522-compute@developer.gserviceaccount.com

To set the active account, run:
    $ gcloud config set account `ACCOUNT`
```


