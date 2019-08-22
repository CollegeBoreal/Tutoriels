# Azure

## Azure Portal

https://portal.azure.com/


## search for your subscription ID

https://blogs.msdn.microsoft.com/mschray/2016/03/18/getting-your-azure-subscription-guid-new-portal/

1. Navigate to http://portal.azure.com

2. Navigate to Browse

3. In the search box being to type subscription

4. Select Subscription from the search results (see below)

Note: Subscription ID is not the same as Directory ID


## Create virtual machine on Azure

https://docs.docker.com/machine/drivers/azure/#authentication

```
$ docker-machine create --driver azure \
   --azure-resource-group college-boreal \
   --azure-location eastus \
   --azure-size Standard_B1s \
   --azure-subscription-id <subscription ID> \
   az-cb-prod
   
Running pre-create checks...
(az-cb-prod) Completed machine pre-create checks.
Creating machine...
(az-cb-prod) Querying existing resource group.  name="college-boreal"
(az-cb-prod) Resource group "college-boreal" already exists.
(az-cb-prod) Configuring availability set.  name="docker-machine"
(az-cb-prod) Configuring network security group.  name="az-cb-prod-firewall" location="eastus"
(az-cb-prod) Querying if virtual network already exists.  name="docker-machine-vnet" rg="college-boreal" location="eastus"
(az-cb-prod) Creating virtual network.  name="docker-machine-vnet" rg="college-boreal" location="eastus"
(az-cb-prod) Configuring subnet.  name="docker-machine" vnet="docker-machine-vnet" cidr="192.168.0.0/16"
(az-cb-prod) Creating public IP address.  name="az-cb-prod-ip" static=false
(az-cb-prod) Creating network interface.  name="az-cb-prod-nic"
(az-cb-prod) Creating storage account.  location="eastus" sku=Standard_LRS name="vhdstsxp67kdadysma7hvbot"
(az-cb-prod) Creating virtual machine.  name="az-cb-prod" location="eastus" size="Standard_B1s" username="docker-user" osImage="canonical:UbuntuServer:16.04.0-LTS:latest"
```

Enter the given code

```
Running pre-create checks...
(az-cb-prod) Microsoft Azure: To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code EDIEN4D2W to authenticate.
```

Note: if timeout get in the way use: `$ docker-machine ssh  az-cb-prod`


## Azure CLI

https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

```
$ az login
```
          Note, we have launched a browser for you to login. For old experience with device code, use "az login --use-device-code"
          You have logged in. Now let us find all the subscriptions to which you have access...
          [
            {
              "cloudName": "AzureCloud",
              "id": "bdb45149-xxx6-4e2e-ax41-ea80x269833d",
              "isDefault": true,
              "name": "GDOX-Pay-As-You-Go",
              "state": "Enabled",
              "tenantId": "xxx0x6x6-xx1x-462c-b141-d05a8c36xxx5",
              "user": {
                "name": "me@bmycompany.com",
                "type": "user"
              }
            }
          ]

### AZ Config

![alt tag](./AccessKeys.png)

~/.azure/config

```
[storage]
account = myBlob
key = sdsdsdrsdsdsd/s=DFFF-+da7h2xlQCjS9Z3TxmI8FyMBlYjXI5nqNXOnoM783zeHpA==

```

https://docs.microsoft.com/en-us/cli/azure/azure-cli-configuration

### AZ Storage


```
$ az storage account keys list -g MyResourceGroup -n MyStorageAccount
```

* Listing a blob in a directory (i.e. Bucket)

```
$ az storage blob list --container-name myContainer --output table
```

* Uploading a folder

```
$  az storage blob upload-batch --destination myContainer --source myLocalFolder
```

* Uploading a file

```
$ az storage blob upload --container-name myContainer --name myfile.docx -f ~/myfile.docx
```

* Deleting a file

```
$ az storage blob delete --container-name myContainer --name myfile.docx
```

https://docs.microsoft.com/en-us/cli/azure/storage/blob


## Azure Maven

https://mvnrepository.com/artifact/com.microsoft.azure/azure-storage/4.0.0


## Azure Image List (Non Official)

https://negatblog.blob.core.windows.net/lists/os_image_list

### CLI Options for AZURE_IMAGE example
```
--azure-image canonical:UbuntuServer:16.04.0-LTS:latest
```
