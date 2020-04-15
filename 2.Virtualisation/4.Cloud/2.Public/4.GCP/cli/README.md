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


[activate-service-account](https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account)

```
PS > gcloud auth activate-service-account `
           --key-file=$env:USERPROFILE\.gcp\b300098957-a2662a9bd338.json `
           --project=b300098957
Activated service account credentials for: [53434267881522-compute@developer.gserviceaccount.com]
```

```
PS C:\Windows\system32> gcloud config list
[core]
account = 53434267881522-compute@developer.gserviceaccount.com
disable_usage_reporting = True
project = b300098957

Your active configuration is: [default]
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
