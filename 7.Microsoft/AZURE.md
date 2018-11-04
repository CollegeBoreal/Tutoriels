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



