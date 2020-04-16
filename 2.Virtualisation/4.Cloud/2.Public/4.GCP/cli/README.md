# GCP CLI

## :o: Installation

:pushpin: Windows

```
PS > choco install gcloudsdk --ignore-checksums
```

:pushpin: MacOS

```
% brew cask install google-cloud-sdk
```


## :o: gcloud configuration

```
$ gcloud info
```


[Where-does-gcloud-store-its-defaults](https://stackoverflow.com/questions/49212350/where-does-gcloud-store-its-defaults)

```
PS C:\Windows\system32> gcloud config list
[core]
account = 399999999@collegeboreal.ca
account = 53434267881522-compute@developer.gserviceaccount.com
disable_usage_reporting = True
project = b99999999

Your active configuration is: [default]
```



## :a: gcloud [Auth](https://cloud.google.com/sdk/gcloud/reference/auth)entication

Pour authentifier son ordinateur, il y a plusieurs façons

:round_pushpin: Machine cliente `AVEC` navigateur web

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

:round_pushpin: Machine client `SANS` navigateur web i.e. machine de production

* Activate [Service Account](https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account) 

```
PS > gcloud auth activate-service-account --key-file=$env:USERPROFILE\.gcp\b300098957-a2662a9bd338.json
```

PS  > gcloud config set project b300098957 # PROJECT_ID

```
$ gcloud auth activate-service-account --key-file=${HOME}/.gcp/b300098957-a2662a9bd338.json
```


```
$ gcloud auth list
                  Credentialed Accounts
ACTIVE  ACCOUNT
        300098957@collegeboreal.ca
*       534284581522-compute@developer.gserviceaccount.com

To set the active account, run:
    $ gcloud config set account `ACCOUNT`
```

```
PS > gcloud container clusters list
NAME   LOCATION       MASTER_VERSION  MASTER_IP      MACHINE_TYPE  NODE_VERSION  NUM_NODES  STATUS
kuron  us-central1-a  1.16.8-gke.8    104.197.255.8  g1-small      1.16.8-gke.8  3          RUNNING
```

## :a: Configure

### :pushpin: Service Account Credentials


* Créer un fichier `JSON` comportant les identifiants (credentials)

* Suivre la documentation

https://cloud.google.com/docs/authentication/production#providing_service_account_credentials

* Le fichier téléchargé sera sauvegarder dans le répertoire `~/.gcp` Créer le répertoire au préalable.

Example: ajuster avec le nom de fichier `identifiants`

```
~/.gcp/b300098957-a2662a9bd338.json
```

* Ajouter la variable d'identifiants à son` Environement`

https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable

Example: ajuster avec le nom de fichier `identifiants`

```
% export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.gcp/b300098957-a2662a9bd338.json"
```
