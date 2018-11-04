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
$ docker-machine create --driver azure  \
          --azure-subscription-id <subscription ID> \
          ms-30000000-dev
```



Enter the given code

```
Running pre-create checks...
(MSDEV) Microsoft Azure: To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code EDIEN4D2W to authenticate.
```

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
$ az storage blob list --container-name myContainer
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
