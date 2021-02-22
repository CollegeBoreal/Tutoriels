# K8s :wheel_of_dharma: (Control Plane)

## Install Kubernetes Cluster on Ubuntu 20.04

| Type Server   | Hostname                           | Specs                 |
|---------------|------------------------------------|-----------------------|
| control plane | orion `10.13.15.200/20`            | 64GB Ram,      16cpus |
| data plane    | canis `10.13.15.201/20`            | 64GB Ram,      16cpus |
| data plane    | ursa  `10.13.15.202/20`            | 32GB Ram,      16cpus |


## :zero: Prepare the Servers

Once the servers are ready, update, upgrade them.

:warning: The server will reboot

```
$ sudo apt update && sudo apt -y upgrade && sudo systemctl reboot
```

## :one: Install using the [repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

:round_pushpin: Install `curl` and `apt-transport-https` and others used to download new packages

:bulb: Some repositories are URL with HTTPS. The `apt-transport-https` package must be installed to access the HTTPS endpoint:

```
$ sudo apt update && sudo apt -y install curl apt-transport-https ca-certificates gnupg-agent software-properties-common
```

## :two: Install kubelet, kubeadm and kubectl

:bulb: What :ice_cube: kube tools to Install? 

| Tool    | Usage                                                   |
|---------|---------------------------------------------------------|
| kubeadm | tool built to provide kubeadm `init` and kubeadm `join` |
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
$ sudo apt update && sudo apt -y install kubeadm kubectl
```

:round_pushpin: Prevent the :ice_cube: `kube`  tools from being altered (optional)

```
$ sudo apt-mark hold kubeadm kubectl
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

## :four: kernel runtime parameters

[sysctl](https://wiki.archlinux.org/index.php/sysctl) is a tool for examining and changing kernel parameters at runtime . sysctl is implemented in `procfs`, the virtual process file system at `/proc/`.

for more details, see [sysctl-cluster](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster) in Kubernetes

:round_pushpin: Enable the usage of iptables. To prevent some routing errors happening, add runtime parameters:

- [ ] Enable the parameters by setting them to 1 for both IPv6 and IPv4

##### :gear: k8s.conf [drop-in file](https://stackoverflow.com/questions/59842743/what-is-a-drop-in-file-what-is-a-drop-in-directory-how-to-edit-systemd-service) (i.e. sysctl .conf file)

```
$ sudo bash -c 'echo "net.bridge.bridge-nf-call-ip6tables = 1" > /etc/sysctl.d/k8s.conf' && \
  sudo bash -c 'echo "net.bridge.bridge-nf-call-iptables = 1" >> /etc/sysctl.d/k8s.conf'
```

- [ ] reload the configuration

```
$ sudo sysctl --system
```


## :five: Install the :whale: `Docker` Service

[:whale: Docker](docker.md)

## :six: Install the :droplet: `Kubelet` Service

[:droplet: Kubelet](kubelet.md)

## :seven: Start the control plane service

:round_pushpin: Pull the images (to accelerate the process)

```
$ sudo kubeadm config images pull
[config/images] Pulled k8s.gcr.io/kube-apiserver:v1.20.4
[config/images] Pulled k8s.gcr.io/kube-controller-manager:v1.20.4
[config/images] Pulled k8s.gcr.io/kube-scheduler:v1.20.4
[config/images] Pulled k8s.gcr.io/kube-proxy:v1.20.4
[config/images] Pulled k8s.gcr.io/pause:3.2
[config/images] Pulled k8s.gcr.io/etcd:3.4.13-0
[config/images] Pulled k8s.gcr.io/coredns:1.7.0
```

:round_pushpin: Initialize the cluster

```
$ ## sudo kubeadm init
$ sudo kubeadm init \
  --pod-network-cidr=172.16.0.0/16 \
  --control-plane-endpoint=orion
```

[see the generated log => ](kubeadm-init.md)


:tada: Your Kubernetes control-plane has initialized successfully!

:round_pushpin: To start using your cluster, you need to run the following as a regular user:

```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

Alternatively, if you are the root user, you can run:

```
  export KUBECONFIG=/etc/kubernetes/admin.conf
```

:round_pushpin: Check the current context (when being on the control plane node)

```
$ kubectl config get-contexts
CURRENT   NAME                          CLUSTER      AUTHINFO           NAMESPACE
*         kubernetes-admin@kubernetes   kubernetes   kubernetes-admin   
```

:round_pushpin: Check the current nodes (with `kubectl`)

```
$ kubectl get nodes
NAME    STATUS     ROLES                  AGE    VERSION
orion   NotReady   control-plane,master   3h9m   v1.20.2
```

:warning: Not yet ready 

## :eight: You should now deploy a pod network to the cluster.

[Install Pod Network](kubelet.md#five-install-the-cni-plugin)

## :nine: Confirm that all of the pods are running

```
$ watch kubectl get pods --all-namespaces
```

CTRL+C to exit

```
Every 2.0s: kubectl get pods --all-namespaces                orion: Thu Feb 18 02:55:26 2021

NAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE
kube-system   calico-kube-controllers-86bddfcff-fk2dr   1/1     Running   0          19m
kube-system   calico-node-8pzzz                         1/1     Running   0          19m
kube-system   coredns-74ff55c5b-56k4w                   1/1     Running   0          4h3m
kube-system   coredns-74ff55c5b-lwbh6                   1/1     Running   0          4h3m
kube-system   etcd-orion                                1/1     Running   0          4h3m
kube-system   kube-apiserver-orion                      1/1     Running   0          4h3m
kube-system   kube-controller-manager-orion             1/1     Running   0          4h3m
kube-system   kube-proxy-7cfq9                          1/1     Running   0          4h3m
kube-system   kube-scheduler-orion                      1/1     Running   0          4h3m
```

or just `watching` the kube-system namespace

```
$ kubectl get pods --namespace kube-system --watch
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-86bddfcff-fk2dr   1/1     Running   0          8h
calico-node-8pzzz                         1/1     Running   0          8h
calico-node-pfgbw                         1/1     Running   0          7h41m
coredns-74ff55c5b-56k4w                   1/1     Running   0          12h
coredns-74ff55c5b-lwbh6                   1/1     Running   0          12h
etcd-orion                                1/1     Running   0          12h
kube-apiserver-orion                      1/1     Running   0          12h
kube-controller-manager-orion             1/1     Running   0          12h
kube-proxy-7cfq9                          1/1     Running   0          12h
kube-proxy-hqwr2                          1/1     Running   0          7h41m
kube-scheduler-orion                      1/1     Running   0          12h
```


- [ ] Confirm master node is ready:

:round_pushpin: Check the nodes once again

```
$ kubectl get nodes --output=wide
NAME    STATUS   ROLES                  AGE    VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
orion   Ready    control-plane,master   4h5m   v1.20.2   10.13.15.200   <none>        Ubuntu 20.04.2 LTS   5.4.0-65-generic   docker://20.10.3
```

:tada: Ready

## :o: Controlling the cluster from Client Computer

- [ ] Copy the :ice_cude: `kube` config file to your PC

```
$ scp -i ~/.ssh/myprivate-key.pk ubuntu@10.13.15.200:.kube/config ~/.kube/config
```

- [ ] Get the context

```
% kubectl config get-contexts                                                      
CURRENT   NAME                          CLUSTER      AUTHINFO           NAMESPACE
*         kubernetes-admin@kubernetes   kubernetes   kubernetes-admin   
```


# References


| Link | OS.      | CNI      | Working | 
|------|----------|----------|----------| 
| [setting-up-the-kubernetes-cluster-on-linux-via-kubeadm](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788837606/1/ch01lvl1sec15/setting-up-the-kubernetes-cluster-on-linux-via-kubeadm) | CentOS7 | [Calico](https://www.projectcalico.org) | :heavy_check_mark: Tested |
| [kubernetes.io install-kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm) | | 
| [deploy-kubernetes-cluster-on-ubuntu-with-kubeadm](https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm) | Ubuntu focal | Calico | | 
| [how-to-install-kubernetes-on-ubuntu-20-04-focal-fossa-linux](https://linuxconfig.org/how-to-install-kubernetes-on-ubuntu-20-04-focal-fossa-linux) | Ubuntu focal | Flannel  | |

https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/adding-windows-nodes/ (adding WindowsNodes)

https://info.rancher.com/kubernetes-networking-deep-dive (ebook)
     
