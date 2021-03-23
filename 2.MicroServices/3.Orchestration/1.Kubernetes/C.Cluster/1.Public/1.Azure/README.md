# Azure AKS (Azure Kubernetes Services)

:o: Prérequis

* Assurez vous que vous avez votre compte initialisé auprès de [Azure](https://github.com/CollegeBoreal/Tutoriels/tree/main/2.MicroServices/4.Cloud/2.Public/2.Azure)

* Assurez vous d'avoir installé [Azure CLI](https://github.com/CollegeBoreal/Tutoriels/tree/main/2.MicroServices/4.Cloud/2.Public/2.Azure/cli)

:a: Créer sa première grappe (cluster)

* Mettre son groupe dans une variable d'environnement

```
$ AZ_GROUP_ID=`az group list | jq 'limit(1;.[] | .name )' | sed 's/"//g'`
```

Vérifier que le groupe existe

```
$ echo $AZ_GROUP_ID
```
si vide sélectionner dans la liste

```
$ az group list | jq '.[] | .name '  
"DefaultResourceGroup-EUS"
"college-boreal"
"NetworkWatcherRG"
```

* Mettre le nombre de noeuds dans une variable d'environnement

:warning: Malheureusement Azure Education ne nous permet que deux VMs par cluster

```
$ AZ_NODE_COUNT=2 
```

* Créer sa grappe

```
$ AZ_CLUSTER_NAME="le_nom_de_ma_grappe_est_sympa" 
```


```
$ az aks create --resource-group $AZ_GROUP_ID \
                --name $AZ_CLUSTER_NAME \
              --node-count $AZ_NODE_COUNT \
              --generate-ssh-keys \
              --enable-addons monitoring 
```

* Liste les grappes actives

```
% az aks list
```


:b: Ajouter votre grappe `kubia` à votre [contexte Kubernetes](https://github.com/CollegeBoreal/Tutoriels/tree/master/2.Virtualisation/3.Orchestration/1.Kubernetes)

```
% az aks get-credentials --resource-group $AZ_GROUP_ID --name $AZ_CLUSTER_NAME       
```
Réponse du AZ CLI
`Merged "kubia" as current context in /Users/b000000000/.kube/config`




#### :x: Known Issues

* La création de la grappe force la génération de clé SSH, faites attention à vos clés qu'elles ne soient pas écrasées par la génération

```
SSH key files '/Users/b300098957/.ssh/id_rsa' and '/Users/b300098957/.ssh/id_rsa.pub' have been generated under ~/.ssh to allow SSH access to the VM. If using machines without permanent storage like Azure Cloud Shell without an attached file share, back up your keys to a safe location
Finished service principal creation[##################################]  100.0000%
```

* Alerte signalant que le quota de plus de 3 est interdit pour un contrat étudiant

`
Operation failed with status: 'Bad Request'. Details: Provisioning of resource(s) for container service kubia in resource group college-boreal failed. Message: Operation could not be completed as it results in exceeding approved standardDSv2Family Cores quota. Additional details - Deployment Model: Resource Manager, Location: eastus, Current Limit: 4, Current Usage: 0, Additional Required: 6, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/?#create/Microsoft.Support/Parameters/%7B%22subId%22:%220b183315-3bca-4529-ace9-fa37a381dcb5%22,%22pesId%22:%2206bfd9d3-516b-d5c6-5802-169c800dec89%22,%22supportTopicId%22:%22e12e3d1d-7fa0-af33-c6d0-3c50df9658a3%22%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests.. Details:
`
