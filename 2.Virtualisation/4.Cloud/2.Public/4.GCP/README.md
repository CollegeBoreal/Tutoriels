# GCP - Google Cloud Platform

## :one: GCP Console

https://console.cloud.google.com

## :two: Configuration 

### :pushpin: [Créer un Compte de Service](https://cloud.google.com/docs/authentication/production#creating_a_service_account)


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

1. Ajouter la variable d'identifiants à son` Environement`

https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable

Example: ajuster avec le nom de fichier `identifiants`

```
% export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.gcp/b300098957-a2662a9bd338.json"
```

## :three: Créer sa machine virtuelle VM

:pushpin: [deployment](deployment)

## :four: Gérer son environnement avec AWS CLI

:bulb: [gloud CLI](cli)



