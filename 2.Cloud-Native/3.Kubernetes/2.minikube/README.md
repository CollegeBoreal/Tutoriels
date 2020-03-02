# MiniKube

## :zero: Installing Minikube

[Install](Install.md)

## :one: Starting Minikube

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
                         _             _            
            _         _ ( )           ( )           
  ___ ___  (_)  ___  (_)| |/')  _   _ | |_      __  
/' _ ` _ `\| |/' _ `\| || , <  ( ) ( )| '_`\  /'__`\
| ( ) ( ) || || ( ) || || |\`\ | (_) || |_) )(  ___/
(_) (_) (_)(_)(_) (_)(_)(_) (_)`\___/'(_,__/'`\____)

$ 
```

:pushpin: While accessing minikube via ssh, get docker's version

```
$ docker version
Client: Docker Engine - Community
 Version:           19.03.6
 API version:       1.40
 Go version:        go1.12.16
 Git commit:        369ce74a3c
 Built:             Thu Feb 13 01:24:49 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.6
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.16
  Git commit:       369ce74a3c
  Built:            Thu Feb 13 01:32:22 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.12
  GitCommit:        35bd7a5f69c13e1563af8a93431411cd9ecf5021
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
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

