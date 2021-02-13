# K8s

## Install Kubernetes Cluster on Ubuntu 20.04


https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm/

| Server | Type	Server                        | Hostname	Specs |
|--------|------------------------------------|-----------------|
| Master | k8s-master01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker02.computingforgeeks.com | 4GB Ram, 2vcpus |


## :one: Install Kubernetes Servers

Once the servers are ready, update, upgrade them.

:warning: The server will reboot

```
$ sudo apt update && sudo apt -y upgrade && sudo systemctl reboot
```

## :two: Install kubelet, kubeadm and kubectl

- [ ] Install `curl` and `apt-transport-https` used to download new packages

```
$ sudo apt update && sudo apt -y install curl apt-transport-https
```

- [ ] Install Google packages Signing Key with `apt-key` tool

```
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
```

- [ ] Create the kubernetes debian repository file

```
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

- [ ] Install kube tools 

| Tool    | Usage                                                   |
|---------|---------------------------------------------------------|
| kubeadm | tool built to provide kubeadm `init` and kubeadm `join` |
| kubelet | responsible for maintaining a set of pods, which are composed of one or more containers, on a local system |
| kubectl |       |

```
$ sudo apt update && sudo apt -y install kubeadm kubelet kubectl
```
