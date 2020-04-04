

```
AZ_GROUP_ID=`az group list | jq 'limit(1;.[] | .name )' | sed 's/"//g'`
```

```
$ az aks create --resource-group $AZ_GROUP_ID \
                --name kubia \
              --node-count 3 \
              --generate-ssh-keys \
              --enable-addons monitoring 
SSH key files '/Users/b300098957/.ssh/id_rsa' and '/Users/b300098957/.ssh/id_rsa.pub' have been generated under ~/.ssh to allow SSH access to the VM. If using machines without permanent storage like Azure Cloud Shell without an attached file share, back up your keys to a safe location
Finished service principal creation[##################################]  100.0000%
```

```
Operation failed with status: 'Bad Request'. Details: Provisioning of resource(s) for container service kubia in resource group college-boreal failed. Message: Operation could not be completed as it results in exceeding approved standardDSv2Family Cores quota. Additional details - Deployment Model: Resource Manager, Location: eastus, Current Limit: 4, Current Usage: 0, Additional Required: 6, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/?#create/Microsoft.Support/Parameters/%7B%22subId%22:%220b183315-3bca-4529-ace9-fa37a381dcb5%22,%22pesId%22:%2206bfd9d3-516b-d5c6-5802-169c800dec89%22,%22supportTopicId%22:%22e12e3d1d-7fa0-af33-c6d0-3c50df9658a3%22%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests.. Details:
```
