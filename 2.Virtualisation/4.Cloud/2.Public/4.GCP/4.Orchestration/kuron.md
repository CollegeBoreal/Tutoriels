# :six: Kuron (prononcer Couronne)

Ce laboratoire permettra de créer une grappe sur le cloud public [GCP]. 

## :o: Sur votre PC, créer votre répertoire de travail dans `git bash`

- [ ] Dans le répertoire  Créer un répertoire avec comme nom `k.kuron`

`$ mkdir k.kuron`

- [ ] Dans le répertoire `k.kuron` créer le fichier suivant sous format [here documents](https://tldp.org/LDP/abs/html/here-docs.html)

:computer: Sous PowerShell

```yaml
PS > @'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kuron-deployment
  labels:
    app: kuron
spec:
  replicas: 3
  selector:
    matchLabels:
      app: kuron
  template:
    metadata:
      labels:
        app: kuron
    spec:
      containers:
      - name: kuron
        image: collegeboreal/kuron:latest
        ports:
        - containerPort: 8080
'@ > kuron-deployment.yaml
```

:apple: Sous Bash

```yaml
$ cat << EOF > kuron-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kuron-deployment
  labels:
    app: kuron
spec:
  replicas: 3
  selector:
    matchLabels:
      app: kuron
  template:
    metadata:
      labels:
        app: kuron
    spec:
      containers:
      - name: kuron
        image: collegeboreal/kuron:latest
        ports:
        - containerPort: 8080
EOF
```

- [ ] ainsi que le fichier `service` suivant:

:computer: Sous PowerShell

```yaml
PS > @'
---
apiVersion: "v1"
kind: "Service"
metadata:
  name: "kuron-deployment-service"
  namespace: "default"
  labels:
    app: "kuron"
spec:
  ports:
  - protocol: "TCP"
    port: 8080
  selector:
    app: "kuron"
  type: "LoadBalancer"
  loadBalancerIP: ""
'@ > kuron-deployment-service.yaml
```

:apple: Sous Bash

```yaml
$ cat << EOF > kuron-deployment-service.yaml
---
apiVersion: "v1"
kind: "Service"
metadata:
  name: "kuron-deployment-service"
  namespace: "default"
  labels:
    app: "kuron"
spec:
  ports:
  - protocol: "TCP"
    port: 8080
  selector:
    app: "kuron"
  type: "LoadBalancer"
  loadBalancerIP: ""
EOF
```


- [ ] Soumets ton répertoire de travail vers github `(git add, commit, push)` 


## :star: Prérequis

- [ ] Compte GCP

Assures toi d'avoir ton compte sur [GCP](https://github.com/CollegeBoreal/Tutoriels/tree/master/2.Virtualisation/4.Cloud/2.Public/4.GCP)

- [ ] Identifiants GCP 

Assures toi d'avoir positionner tes [identifiants `google`](https://github.com/CollegeBoreal/Tutoriels/tree/master/2.Virtualisation/4.Cloud/2.Public/4.GCP#three-configuration-api-env)

* avec Powershell

```
PS > $env:GOOGLE_APPLICATION_CREDENTIALS="$env:USERPROFILE\.gcp\b300098957-a2662a9bd338.json"
```

avec gitbash

```
$ export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.gcp/b300098957-a2662a9bd338.json"
```

## :a: Créer sa grappe `kuron`

- [ ] Crée ta grappe `kuron` avec 3 VM (noeuds)

:bulb: Pour créer une grappe en mode `développemnt`

```
$ gcloud beta container clusters create "kuron" --release-channel "rapid"
```

au lieu de 

```
$ gcloud container clusters create "kuron"
```


:computer: Sous PowerShell

```
PS > gcloud container clusters create "kuron" `
                        --zone "us-central1-a" `
                        --num-nodes "3"  `
                        --machine-type "g1-small" --image-type "COS" `
                        --disk-type "pd-standard" --disk-size "30" `
                        --no-enable-stackdriver-kubernetes --no-enable-basic-auth `
                        --no-enable-master-authorized-networks `
                        --addons HorizontalPodAutoscaling,HttpLoadBalancing `
                        --enable-autoupgrade --enable-autorepair --enable-ip-alias                
```

:apple: Sous gitbash


```
$ gcloud container clusters create "kuron" \
                        --zone "us-central1-a" \
                        --num-nodes "3" --release-channel "rapid" \
                        --machine-type "g1-small" --image-type "COS" \
                        --disk-type "pd-standard" --disk-size "30" \
                        --no-enable-stackdriver-kubernetes --no-enable-basic-auth \
                        --no-enable-master-authorized-networks \
                        --addons HorizontalPodAutoscaling,HttpLoadBalancing \
                        --enable-autoupgrade --enable-autorepair --enable-ip-alias                
```

![image](images/Kuron-cluster.png)

:round_pushpin: Assures toi d'activer ton context avec `kubectl`, vérifie l'étoile

```
$ kubectl config get-contexts
CURRENT   NAME                          CLUSTER                       AUTHINFO                        NAMESPACE
*         gke_pid_us-central1-a_kuron   gke_pid_us-central1-a_kuron   gke_pid_us-central1-a_kuron   
```

* Changes de contexte si ce n'est pas le cas, exemple

```
$ kubectl config set-context gke_pid_us-central1-a_kuron
```

:round_pushpin: Visualise quelques informations sur ta grappe

```
$ kubectl cluster-info                 
```

- [ ] Vérifie que tes :three: `noeuds` (VMs) soient dans un état `Ready`

```
$ kubectl get nodes             
NAME                                   STATUS   ROLES    AGE   VERSION
gke-kuron-default-pool-68ead64d-dq2s   Ready    <none>   16m   v1.16.8-gke.9
gke-kuron-default-pool-68ead64d-g9cg   Ready    <none>   16m   v1.16.8-gke.9
gke-kuron-default-pool-68ead64d-wvhs   Ready    <none>   16m   v1.16.8-gke.9
```

## :b: Déploie ton application `kuron`

https://hub.docker.com/r/collegeboreal/kuron

Nous allons utiliser l'image `collegeboreal/kuron` pour créer notre application. Tu as un lien ci-dessus pour plus de détail pour construire l'image.

Les applications ou `pod` sont des conteneurs où tournent l'application, dans notre cas un serveur `node` nous donnant le nom du conteneur.

- [ ] Utilise le fichier `kuron-deployment.yaml` pour déployer tes `pods`

```
$ kubectl apply -f kuron-deployment.yaml 
```

- [ ] Vérifie que tes :three: `pods` soient dans un état de tourner `running`

```
$ kubectl get pods                                                              
NAME                               READY   STATUS    RESTARTS   AGE
kuron-deployment-8bf4f7f9f-5hm4n   1/1     Running   0          20m
kuron-deployment-8bf4f7f9f-d4d9l   1/1     Running   0          20m
kuron-deployment-8bf4f7f9f-xw4gz   1/1     Running   0          20m
```

- [ ] Vérifie sur quels noeuds `nodes` tes :three: `pods` tournent


```
$ kubectl get pods --output wide     
NAME                               READY   STATUS    RESTARTS   AGE     IP          NODE                                  ...
kuron-deployment-8bf4f7f9f-5ccjc   1/1     Running   0          8m56s   10.28.2.3   gke-kuron-default-pool-68ead64d-wvhs  ...
kuron-deployment-8bf4f7f9f-6nf9d   1/1     Running   0          8m56s   10.28.1.4   gke-kuron-default-pool-68ead64d-g9cg  ...
kuron-deployment-8bf4f7f9f-d6lz6   1/1     Running   0          8m56s   10.28.0.5   gke-kuron-default-pool-68ead64d-dq2s  ...
```

## :ab: Déploie le service `kuron-deployment-service`

Le service permet la publication des ports vers l'extérieur. Le port que nous allons utiliser et le port `8080`

- [ ] Utilise le fichier `kuron-deployment-service.yaml` pour ouvrir les `ports`

```
$ kubectl apply -f kuron-deployment-service.yaml 
```

:round_pushpin: Vérifie ton service et note l'adresse IP externe et le port d'accès

```
$ kubectl get services                                                          
NAME                       TYPE           CLUSTER-IP   EXTERNAL-IP    PORT(S)          AGE
kubernetes                 ClusterIP      10.32.0.1    <none>         443/TCP          25m
kuron-deployment-service   LoadBalancer   10.32.3.1    34.70.183.28   8080:30237/TCP   11m
```

* Note l'adresse IP locale de ton cluster, dans ce cas `10.32.3.1` 

- [ ] Publie ton site Internet avec les informations du service

http://34.70.183.28:8080/

## :o: Teste ton application en prouvant que tes `pods` tournent sur un service redondant

- [ ] Tapes les commandes ci-dessous en changeant le nom des pods et l'adresse IP locale.

Le programme javascript qui tourne dans les pods récupère le nom du conteneur dans ce cas le nom du pod.

:warning: Remarque le nom du pod retourné change et n'est pas forcément le nom du pod

:bangbang: Respecte le séparateur de commande `--` devant la commande `curl`, lance la commande plusieurs fois

```
$ kubectl exec kuron-deployment-8bf4f7f9f-5hm4n -- curl -s http://10.32.3.1:8080
Tu as touché kuron-deployment-8bf4f7f9f-d4d9l
```

- [ ] Finalement, entre dans un pod (conteneur) et donne la taille mémoire du pod avec la commande `top`

```
$ kubectl exec --stdin --tty  kuron-deployment-8bf4f7f9f-5hm4n -- /bin/bash
```

KiB Mem:   1732772


## :x: Après la fin du cours, supprime ta grappe (attendre la note finale)

1. soit par la console [`Google`](https://console.cloud.google.com/)

1. soit par la commande
```
$ gcloud container clusters delete kuron --zone "us-central1-a"
```

