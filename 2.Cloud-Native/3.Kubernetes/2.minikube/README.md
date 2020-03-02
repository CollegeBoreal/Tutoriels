# MiniKube

## :zero: Installing Minikube

:star: [=> Install using Package Manager](Install.md)

## :one: Starting Minikube

:star: [=> Starting ...](Start-mk.md)

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


```
% kubectl get pods
No resources found in default namespace.
```

```
% kubectl get pods --all-namespaces
NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE
kube-system   coredns-6955765f44-l5knr           1/1     Running   0          39m
kube-system   coredns-6955765f44-z5n7c           1/1     Running   0          39m
kube-system   etcd-minikube                      1/1     Running   0          39m
kube-system   kube-apiserver-minikube            1/1     Running   0          39m
kube-system   kube-controller-manager-minikube   1/1     Running   0          39m
kube-system   kube-proxy-qprtm                   1/1     Running   0          39m
kube-system   kube-scheduler-minikube            1/1     Running   0          39m
kube-system   storage-provisioner                1/1     Running   0          39m
```

# References

https://itnext.io/run-kubernetes-on-your-machine-7ee463af21a2

### minikube-with-hyperkit

https://blog.arkey.fr/2018/06/18/minikube-with-hyperkit/

### kevin-smets/1_kubernetes_on_macOS.md (minikube)

https://gist.github.com/kevin-smets/b91a34cea662d0c523968472a81788f7

