# MiniKube

## :zero: Starting Minikube

```
$ minikube start 
```

<img src="images/minikube-start.png" width="2710" heigth="1462"></img>

:pushpin: Accessing minikube host with ssh key :key:

```
$ ssh -t -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip)
```

:pushpin: Accessing minikube host with ssh

```
$ minikube ssh
```

## :one: Kubernetes Commands

:pushpin: Get the cluster information


```
$ kubectl cluster-info
Kubernetes master is running at https://192.168.64.9:8443
KubeDNS is running at https://192.168.64.9:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

:pushpin: Get the node information

```
% kubectl get nodes   
NAME       STATUS   ROLES    AGE   VERSION
minikube   Ready    master   23m   v1.17.3
```


# References

https://itnext.io/run-kubernetes-on-your-machine-7ee463af21a2

### minikube-with-hyperkit

https://blog.arkey.fr/2018/06/18/minikube-with-hyperkit/

### kevin-smets/1_kubernetes_on_macOS.md (minikube)

https://gist.github.com/kevin-smets/b91a34cea662d0c523968472a81788f7

