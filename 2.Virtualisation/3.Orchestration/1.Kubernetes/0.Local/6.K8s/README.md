# K8s

## Install Kubernetes Cluster on Ubuntu 20.04


https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm/

| Server | Type	Server                        | Hostname	Specs |
|--------|------------------------------------|-----------------|
| Master | k8s-master01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker01.computingforgeeks.com | 4GB Ram, 2vcpus |
| Worker | k8s-worker02.computingforgeeks.com | 4GB Ram, 2vcpus |


## :zero: Prepare the Servers

Once the servers are ready, update, upgrade them.

:warning: The server will reboot

```
$ sudo apt update && sudo apt -y upgrade && sudo systemctl reboot
```

## :one: Install the download tools

:round_pushpin: Install `curl` and `apt-transport-https` used to download new packages

```
$ sudo apt update && sudo apt -y install curl apt-transport-https
```

## :two: Install kubelet, kubeadm and kubectl

:bulb: What :ice_cube: kube tools to Install? 

| Tool    | Usage                                                   |
|---------|---------------------------------------------------------|
| kubeadm | tool built to provide kubeadm `init` and kubeadm `join` |
| kubelet | responsible for maintaining a set of pods, which are composed of one or more containers, on a local system |
| kubectl | Kubernetes command-line tool |

:round_pushpin: Add the Google packages Signing Key :key: with the `apt-key` tool to the APT SSH Agent

```
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
```

:round_pushpin: Create the kubernetes debian repository file

```
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

:round_pushpin: Install the :ice_cube: `kube` tools

```
$ sudo apt update && sudo apt -y install kubeadm kubelet kubectl
```

:round_pushpin: Prevent the :ice_cube: `kube`  tools to be altered (optional)

```
$ sudo apt-mark hold kubeadm kubelet kubectl
```

:+1: Test that the :ice_cube: `kube` tools are installed

```
$ OUT="--output=json"; kubeadm version ${OUT} && kubectl version --client ${OUT}
```

## :three: Disabling the swap (otherwise Kubernetes won't work) 

$ sudo sed -ri '/\sswap\s/s/^#?/#/' /etc/fstab
