## Create virtual machine on Azure

:one: Donner le numero d'abonement

```
$ SUBSCRIPTION_ID=`az account get-access-token | jq .subscription | sed 's/"//g'`
```

:two: Lancer la machine

https://docs.docker.com/machine/drivers/azure/#authentication

```
$ docker-machine create --driver azure \
   --azure-resource-group college-boreal \
   --azure-location eastus \
   --azure-size Standard_B1s \
   --azure-image canonical:UbuntuServer:18.04-LTS:latest \
   --azure-subscription-id $SUBSCRIPTION_ID \
   az-cb-prod
Running pre-create checks...
(az-cb-prod) Microsoft Azure: To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code EDIEN4D2W to authenticate.
```

Enter the given code

Note: if timeout get in the way use: `$ docker-machine ssh  az-cb-prod`


## Azure Maven

https://mvnrepository.com/artifact/com.microsoft.azure/azure-storage/4.0.0


## Azure Image List (Non Official)

https://negatblog.blob.core.windows.net/lists/os_image_list

### CLI Options for AZURE_IMAGE example
```
--azure-image canonical:UbuntuServer:16.04.0-LTS:latest
--azure-image canonical:UbuntuServer:18.04-LTS:latest
```

