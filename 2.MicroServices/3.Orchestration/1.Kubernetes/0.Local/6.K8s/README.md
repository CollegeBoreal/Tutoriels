# K8s

## Install Kubernetes Cluster on Ubuntu 20.04

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

## :one: Install using the [repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

:round_pushpin: Install `curl` and `apt-transport-https` and others used to download new packages

```
$ sudo apt update && sudo apt -y install curl apt-transport-https ca-certificates gnupg-agent software-properties-common
```

## :two: Install kubelet, kubeadm and kubectl

:bulb: What :ice_cube: kube tools to Install? 

| Tool    | Usage                                                   |
|---------|---------------------------------------------------------|
| kubeadm | tool built to provide kubeadm `init` and kubeadm `join` |
| kubelet | responsible for maintaining a set of pods, which are composed of one or more containers, on a local system |
| kubectl | Kubernetes command-line tool |

:round_pushpin: Adding the `kubernetes` package repository to the package manager registry  

- [ ] Add the Google official `pgp` key :key: that will go to the `/etc/apt/trusted.gpg` binary file

* add the PGP key

```
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
```

* Verify that you now have the key with the fingerprint `54A6 47F9 048D 5688 D7DA  2ABE 6A03 0B21 BA07 F4FB`, by searching for the last 8 characters of the fingerprint.

```
$ sudo apt-key fingerprint BA07F4FB
pub   rsa2048 2018-04-01 [SCE] [expires: 2021-03-31]
      54A6 47F9 048D 5688 D7DA  2ABE 6A03 0B21 BA07 F4FB
uid           [ unknown] Google Cloud Packages Automatic Signing Key <gc-team@google.com>
```

- [ ] Create the kubernetes debian repository file

:warning: as of 2021 `xenial` (a.k.a yakkety) is still the latest version check `https://packages.cloud.google.com/apt/dists` 

```
$ echo "deb https://apt.kubernetes.io/ kubernetes-yakkety main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

:round_pushpin: Install the :ice_cube: `kube` tools

```
$ sudo apt update && sudo apt -y install kubeadm kubelet kubectl
```

:round_pushpin: Prevent the :ice_cube: `kube`  tools from being altered (optional)

```
$ sudo apt-mark hold kubeadm kubelet kubectl
```

:+1: Test that the :ice_cube: `kube` tools are installed

```
$ OUT="--output=json"; kubeadm version ${OUT} && kubectl version --client ${OUT}
```

## :three: Disabling the swap (otherwise Kubernetes won't work) 

[how-do-i-disable-swap?](https://askubuntu.com/questions/214805/how-do-i-disable-swap)

- [ ] Before

```
$ free --human
              total        used        free      shared  buff/cache   available
Mem:           62Gi       440Mi        61Gi       1.0Mi       1.4Gi        61Gi
Swap:           8Gi           0         8Gi
```

- [ ] swap off and disabled at boot in `/etc/fstab` file

```
$ sudo swapoff --all && sudo sed --regexp-extended --in-place '/\sswap\s/s/^#?/#/' /etc/fstab
```

- [ ] After

```
$ free --human
              total        used        free      shared  buff/cache   available
Mem:           62Gi       440Mi        61Gi       1.0Mi       1.4Gi        61Gi
Swap:            0B          0B          0B
```

- [ ] Check `swap` in `/etc/fstab` is commented

```
$ cat /etc/fstab 
# /etc/fstab: static file system information.
...
#/swap.img	none	swap	sw	0	0
```

## :four: kernel parameters

[sysctl](https://wiki.archlinux.org/index.php/sysctl) is a tool for examining and changing kernel parameters at runtime . sysctl is implemented in `procfs`, the virtual process file system at `/proc/`.

for more details, see [sysctl-cluster](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster) in Kubernetes


# References

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm/ (Ubuntu focal, using Calico CNI)

https://linuxconfig.org/how-to-install-kubernetes-on-ubuntu-20-04-focal-fossa-linux (Ubuntu focal, using Flannel CNI)

https://info.rancher.com/kubernetes-networking-deep-dive (ebook)

https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/adding-windows-nodes/ (adding WindowsNodes)
