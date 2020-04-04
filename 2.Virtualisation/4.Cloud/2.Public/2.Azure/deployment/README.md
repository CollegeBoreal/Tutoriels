## Create virtual machine on Azure

:one: Récupérer le numero d'abonement

```
$ AZ_SUBSCRIPTION_ID=`az account get-access-token | jq .subscription | sed 's/"//g'`
```

:two: Récupérer le numero de groupe

```
$ AZ_GROUP_ID=`az group list | jq 'limit(1;.[] | .name )' | sed 's/"//g'`
```

:three: Les paramètres de la machine virtuelle peuvent également changer, l'endroit `AZ_LOCATION`, la taille de la VM `AZ_SIZE` et l'image désirée `AZ_IMAGE`

- [ ] Azure Location

```
AZ_LOCATION=eastus
```

- [ ] Azure Size

```
AZ_SIZE=Standard_B1s
```

https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-b-series-burstable


- [ ] Azure Image List

```
AZ_IMAGE=canonical:UbuntuServer:18.04-LTS:latest
```

(Non Official)

https://negatblog.blob.core.windows.net/lists/os_image_list


:four: Lancer la création de la machine virtuelle

https://docs.docker.com/machine/drivers/azure/#authentication

```
$ docker-machine create --driver azure \
   --azure-subscription-id $AZ_SUBSCRIPTION_ID \
   --azure-resource-group $AZ_GROUP_ID \
   --azure-location eastus \
   --azure-size Standard_B1s \
   --azure-image canonical:UbuntuServer:18.04-LTS:latest \
   az-cb-prod
Running pre-create checks...
(az-cb-prod) Microsoft Azure: To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code EDIEN4D2W to authenticate.
```

Enter the given code

Note: if timeout get in the way use: `$ docker-machine ssh  az-cb-prod`


## Azure Maven

https://mvnrepository.com/artifact/com.microsoft.azure/azure-storage/4.0.0



