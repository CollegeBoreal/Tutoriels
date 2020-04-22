# :four: Orchestration

* Gérer son cluster avec `gcloud` CLI

```
PS > gcloud container clusters list
NAME   LOCATION       MASTER_VERSION  MASTER_IP      MACHINE_TYPE  NODE_VERSION  NUM_NODES  STATUS
kuron  us-central1-a  1.16.8-gke.8    104.197.255.8  g1-small      1.16.8-gke.8  3          RUNNING
```

* Générer une entrée dans `kubeconfig`

https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#generate_kubeconfig_entry

````
$ gcloud container clusters get-credentials [cluster-name]
```


