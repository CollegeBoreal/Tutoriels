# K8s

## Install Kubernetes Cluster on Ubuntu 20.04


https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm/

| Server | Type	Server                        | Hostname	Specs |
|--------|------------------------------------|-----------------|
| Master | k8s-master01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker02.computingforgeeks.com | 4GB Ram, 2vcpus |


## :one: Install Kubernetes Servers

Once the servers are ready, update them.

```
$ sudo apt update && sudo apt -y upgrade && sudo systemctl reboot
```
