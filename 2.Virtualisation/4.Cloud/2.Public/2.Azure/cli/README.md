# Azure CLI

## :o: Installation

:pushpin: Windows

```
PS > choco install awscli
```


https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

:pushpin: MacOS

```
% brew install awscli
```

## :a: Configure

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

## :b: AZ Storage


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


