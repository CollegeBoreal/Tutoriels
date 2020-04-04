## Create virtual machine on Azure


:o: Prérequis


:pushpin: ce tutoriel utilise l'utilitaire [JQ](https://github.com/CollegeBoreal/Tutoriels/tree/master/T.Texte/J.JSON). Si non présent l'installer

:pushpin: tester la connection avec Azure

```
$ az account get-access-token

  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1N...",
  "expiresOn": "2020-04-04 16:51:23.499032",
  "subscription": "0bxx315-xxx-4529-azz9-faxxxxfffffb5",
  "tenant": "53bdddd-31dd-4dddb-ssfb-8accvvvddd33",
  "tokenType": "Bearer"
}
```


:one: Récupérer le numero d'abonement

```
$ AZ_SUBSCRIPTION_ID=`az account get-access-token | jq .subscription | sed 's/"//g'`
```

:two: Récupérer le numero de groupe

```
$ AZ_GROUP_ID=`az group list | jq 'limit(1;.[] | .name )' | sed 's/"//g'`
```

:three: Les paramètres de la machine virtuelle peuvent également être changé, l'endroit `AZ_LOCATION`, la taille de la VM `AZ_SIZE` et l'image désirée `AZ_IMAGE`

- [ ] Azure Location

```
$ AZ_LOCATION=canadacentral
```
https://azure.microsoft.com/en-us/global-infrastructure/locations/
https://azure.microsoft.com/en-us/global-infrastructure/regions/

- [ ] Azure Size (`Standard_B1s`: 1vCPU, 1GiB Mem,  `Standard_B2s`: 2vCPU, 4GiB Mem )

```
$ AZ_SIZE=Standard_B1s
```

https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-b-series-burstable


- [ ] Azure Image List

```
$ AZ_IMAGE=canonical:UbuntuServer:18.04-LTS:latest
```

(Non Official)

https://negatblog.blob.core.windows.net/lists/os_image_list


:four: Lancer la création de la machine virtuelle

https://docs.docker.com/machine/drivers/azure/#authentication

```
$ docker-machine create --driver azure \
   --azure-subscription-id $AZ_SUBSCRIPTION_ID \
   --azure-resource-group $AZ_GROUP_ID \
   --azure-location $AZ_LOCATION \
   --azure-size $AZ_SIZE \
   --azure-image $AZ_IMAGE \
   cb-az-dev
```

* Demande d'authentification de la machine en ligne, entrer le code donné

```
Running pre-create checks...
(cb-az-dev) Microsoft Azure: To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code EDIEN4D2W to authenticate.
```

Note: if timeout gets in the way use: `$ docker-machine ssh  cb-az-dev`

:six: Activer la VM azure

* Inactive au commande `Docker`

```
$ docker-machine ls
NAME          ACTIVE   DRIVER    STATE     URL                        SWARM   DOCKER     ERRORS
cb-az-dev     -        azure     Running   tcp://40.99.223.154:2376           v19.03.8   
```

* Activer au commande `Docker`

:computer: Sous Powershell

```
PS > docker-machine env cb-az-dev | Invoke-Expression
```

:apple: Sous `bash` ou `zsh`


```
$ eval $(docker-machine env cb-az-dev)
```


* Verification :star: 

```
$ docker-machine ls
NAME          ACTIVE   DRIVER    STATE     URL                        SWARM   DOCKER     ERRORS
cb-az-dev     *        azure     Running   tcp://40.99.223.154:2376           v19.03.8   
```

```
$ docker-machine active
cb-az-dev
```

## Ouverture des ports - firewall

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nsg-quickstart-portal


## Azure Maven

https://mvnrepository.com/artifact/com.microsoft.azure/azure-storage/4.0.0



