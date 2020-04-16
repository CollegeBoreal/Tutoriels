# GCP - Google Cloud Platform

## :zero: GCP Console

https://console.cloud.google.com


## :one: [`gcloud`](https://cloud.google.com/sdk/gcloud) CLI

Pour installer le CLI [`gcloud`](https://cloud.google.com/sdk/gcloud), suivre [1.CLI](1.CLI)

## :two: Authentification

Pour s'authentifier au nuage google, suivre cette documentation [2.Authentication](2.Authentication)


## :three: Configuration API ENV

Pour pouvoir utiliser les CLI comme `docker` ou `kubernetes`, il faut ajouter la variable d'identifiants à son` Environement`

https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable

Exemple: ajuster avec le nom de fichier `identifiants`

:computer: Sous [Windows](https://cloud.google.com/docs/authentication/production#windows) PowerShell 

```
PS > $env:GOOGLE_APPLICATION_CREDENTIALS="$env:USERPROFILE\.gpc\b300098957-a2662a9bd338.json"
```

:apple: Sous [Bash](https://cloud.google.com/docs/authentication/production#linux-or-macos)

```
$ export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.gcp/b300098957-a2662a9bd338.json"
```

## :three: Créer sa machine virtuelle VM

:pushpin: [deployment](deployment)




