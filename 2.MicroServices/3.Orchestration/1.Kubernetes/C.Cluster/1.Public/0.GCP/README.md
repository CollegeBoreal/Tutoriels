# Kubernetes Cluster dans GCP


:a: Créer sa première grappe (cluster)


```
% gcloud container clusters create kubia --num-nodes 3 --machine-type f1-micro --zone "us-central1-a"
```

:bulb: Initialisation du `Kubernetes Engine API`

si le service `Kubernetes Engine API` n'est pas activé dans la console, il faut l'activer en cliquant sur le lien donné par l'erreur

Exemple:

```
ERROR: (gcloud.container.clusters.create) ResponseError: code=403, message=Kubernetes Engine API is not enabled for this project. 
Please ensure it is enabled in Google Cloud Console and try again: 
visit https://console.cloud.google.com/apis/api/container.googleapis.com/overview?project=b300098957 to do so.
```

```
% gcloud projects list
PROJECT_ID  NAME        PROJECT_NUMBER
b300098957  b300098957  534284581522
```

https://cloud.google.com/endpoints/docs/openapi/enable-api



<img src="images/GCP-Compute-Engine-DB.png" width="782" height="179" ></img>


:b: Administrer la grappe (cluster)

Utiliser l'utilitaire standardisé `kubectl` - `Kubernetes Control`

:round_pushpin: Vérifier que l'on a 3 noeuds (nodes) - un noeud est égale une machine virtuelle (VM)

```
% kubectl get nodes
NAME                                   STATUS     ROLES    AGE   VERSION
gke-kubia-default-pool-d41cef64-8pm5   NotReady   <none>   11m   v1.14.10-gke.27
gke-kubia-default-pool-d41cef64-bzc9   Ready      <none>   11m   v1.14.10-gke.27
gke-kubia-default-pool-d41cef64-hrv2   NotReady   <none>   11m   v1.14.10-gke.27
```

:round_pushpin: Décrire un des noeuds avec la commande `describe` 

```
% kubectl describe node gke-kubia-default-pool-d41cef64-bzc9
```

:ab: Delete a cluster

```
% gcloud container clusters delete kubia --zone "us-central1-a"
```


# References 

https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair
