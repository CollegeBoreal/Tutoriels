# :control_knobs: Control Plane

## Install Kubernetes Cluster on Ubuntu 20.04


:star: Cluster Name: Orion

| Type Server   | Hostname                |  IP               | Specs                 |
|---------------|-------------------------|-------------------|-----------------------|
| control plane | betelgeuse.boreal.codes | `10.13.15.200/20` | 64GB Ram,      16cpus |
| data plane    | bellatrix.boreal.codes  | `10.13.15.201/20` | 64GB Ram,      16cpus |
| data plane    | rigel.boreal.codes      | `10.13.15.202/20` | 32GB Ram,      16cpus |
| data plane    | saiph.boreal.codes      | `10.13.15.203/20` | 64GB Ram,      16cpus |


## :gear: Kubernetes Version

- [ ] Make sure you have the right hostname (based on your cluster)

```
$ hostnamectl --static set-hostname betelgeuse
```

- [ ] Check all available Versions

```
$ curl -s https://packages.cloud.google.com/apt/dists/kubernetes-xenial/main/binary-amd64/Packages | grep Version
``` 

- [ ] Let's install a specific version

```
export KUBEVERSION=1.18.6
``` 


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
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

:round_pushpin: Install the :ice_cube: `kube` tools

```
$ sudo apt update && sudo apt install -y kubeadm=${KUBEVERSION}-00 kubelet=${KUBEVERSION}-00 kubectl=${KUBEVERSION}-00
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

## :four: [Letting iptables see bridged traffic](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#letting-iptables-see-bridged-traffic)

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

## :seven: Start the :control_knobs: control plane service

:round_pushpin: Pull the images (to accelerate the process)

```
$ sudo kubeadm config images pull
I0228 02:50:23.382028 3985225 version.go:252] remote version is much newer: v1.20.4; falling back to: stable-1.18
W0228 02:50:23.598562 3985225 configset.go:202] WARNING: kubeadm cannot validate component configs for API groups [kubelet.config.k8s.io kubeproxy.config.k8s.io]
[config/images] Pulled k8s.gcr.io/kube-apiserver:v1.18.16
[config/images] Pulled k8s.gcr.io/kube-controller-manager:v1.18.16
[config/images] Pulled k8s.gcr.io/kube-scheduler:v1.18.16
[config/images] Pulled k8s.gcr.io/kube-proxy:v1.18.16
[config/images] Pulled k8s.gcr.io/pause:3.2
[config/images] Pulled k8s.gcr.io/etcd:3.4.3-0
[config/images] Pulled k8s.gcr.io/coredns:1.6.7
```
* check if installed

```
$ sudo kubeadm config images list
[sudo] password for ubuntu: 
I0314 03:49:12.111805   33645 version.go:252] remote version is much newer: v1.20.4; falling back to: stable-1.18
W0314 03:49:12.338372   33645 configset.go:202] WARNING: kubeadm cannot validate component configs for API groups [kubelet.config.k8s.io kubeproxy.config.k8s.io]
k8s.gcr.io/kube-apiserver:v1.18.16
k8s.gcr.io/kube-controller-manager:v1.18.16
k8s.gcr.io/kube-scheduler:v1.18.16
k8s.gcr.io/kube-proxy:v1.18.16
k8s.gcr.io/pause:3.2
k8s.gcr.io/etcd:3.4.3-0
k8s.gcr.io/coredns:1.6.7
```
:round_pushpin: Initialize the cluster

```
$ ## sudo kubeadm init
$ sudo kubeadm init \
  --pod-network-cidr=172.16.0.0/16 \
  --control-plane-endpoint=betelgeuse.boreal.codes
  --cluster-name=orion
```

[see the generated log => ](kubeadm-init.md)


:tada: Your Kubernetes control-plane has initialized successfully!

:round_pushpin: To start using your cluster, you need to run the following as a regular user:

```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
$ export KUBECONFIG=$HOME/.kube/config
```

Alternatively, if you are the root user, you can run:

```
$ export KUBECONFIG=/etc/kubernetes/admin.conf
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
NAME         STATUS     ROLES    AGE     VERSION
betelgeuse   NotReady   master   4m23s   v1.18.6
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
Every 2.0s: kubectl get pods --all-namespaces                             betelgeuse: Sun Mar 14 04:04:34 2021

NAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE
kube-system   calico-kube-controllers-65d7476764-bwwrb   1/1     Running   0          2m19s
kube-system   calico-node-dr7x4                          1/1     Running   0          2m19s
kube-system   coredns-66bff467f8-6qhnw                   1/1     Running   0          13m
kube-system   coredns-66bff467f8-ldp4p                   1/1     Running   0          13m
kube-system   etcd-betelgeuse                            1/1     Running   0          13m
kube-system   kube-apiserver-betelgeuse                  1/1     Running   0          13m
kube-system   kube-controller-manager-betelgeuse         1/1     Running   0          13m
kube-system   kube-proxy-fj79t                           1/1     Running   0          13m
kube-system   kube-scheduler-betelgeuse                  1/1     Running   0          13m
```

or just `watching` the kube-system namespace

```
$ kubectl get pods --namespace kube-system --watch
NAME                                       READY   STATUS    RESTARTS   AGE
calico-kube-controllers-65d7476764-bwwrb   1/1     Running   0          3m8s
calico-node-dr7x4                          1/1     Running   0          3m8s
coredns-66bff467f8-6qhnw                   1/1     Running   0          13m
coredns-66bff467f8-ldp4p                   1/1     Running   0          13m
etcd-betelgeuse                            1/1     Running   0          14m
kube-apiserver-betelgeuse                  1/1     Running   0          14m
kube-controller-manager-betelgeuse         1/1     Running   0          14m
kube-proxy-fj79t                           1/1     Running   0          13m
kube-scheduler-betelgeuse                  1/1     Running   0          14m
```


- [ ] Confirm master node is ready:

:round_pushpin: Check the nodes once again

```
$ kubectl get nodes --output=wide
NAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
betelgeuse   Ready    master   15m   v1.18.6   10.13.15.200   <none>        Ubuntu 20.04.2 LTS   5.4.0-66-generic   docker://20.10.3
```

:tada: Ready

## :o: Controlling the cluster from Client Computer

- [ ] Copy the :ice_cube: `kube` config file to your PC

```
$ mkdir -p $HOME/.kube/config
$ scp -i ~/.ssh/myprivate-key.pk ubuntu@betelgeuse.boreal.codes:.kube/config/orion ~/.kube/config/orion
$ export KUBECONFIG=$HOME/.kube/config/orion
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

https://blog.alexellis.io/kubernetes-in-10-minutes/

https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/adding-windows-nodes/ (adding WindowsNodes)

https://info.rancher.com/kubernetes-networking-deep-dive (ebook)

https://thenewstack.io/the-smallest-kubernetes-cluster-scaling-down-to-the-edge/
     
