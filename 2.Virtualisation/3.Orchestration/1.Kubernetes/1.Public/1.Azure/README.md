

=`az group list | jq 'limit(1;.[] | .name )' | sed 's/"//g'`
```
$ az aks create --resource-group $AZ_GROUP_ID --name kubia \
              --node-count 3 
              --enable-addons monitoring --generate-ssh-keys
```
