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

:round_pushpin: Booting up the service

``` 
$ sudo systemctl enable kubelet && sudo systemctl start kubelet
```

:five: Docker :whale:

:round_pushpin: Adding the `Docker` package repository to the package manager registry  

- [ ] Add the Docker official `pgp` key :key: that will go to the `/etc/apt/trusted.gpg` binary file

* add the PGP key

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

* Verify that you now have the key with the fingerprint `9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88`, by searching for the last 8 characters of the fingerprint.

```
$ sudo apt-key fingerprint 0EBFCD88
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

- [ ] Create the docker debian repository file

```
$ sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release --codename --short) stable"
```

:round_pushpin: Install the :whale: `Docker` engine

```
$ sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

:round_pushpin: Check [Docker Networking](https://stackoverflow.com/a/60897412)

Docker uses `iptables` and a kernel module called `br_netfilter` to manage inter-container networking. When the Docker daemon starts, it creates a variety of IPTables rules it required to operate.

```
$ sudo lsmod | grep br_netfilter
```

:five: Start the ...


:round_pushpin: First download the images

```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```


## :x: Troubleshooting

- [ ] Docker is missing

```
$ sudo kubeadm init
W0217 18:10:40.216863 1082239 kubelet.go:200] cannot automatically set CgroupDriver when starting the Kubelet: cannot execute 'docker info -f {{.CgroupDriver}}': executable file not found in $PATH
[init] Using Kubernetes version: v1.20.2
[preflight] Running pre-flight checks
[preflight] WARNING: Couldn't create the interface used for talking to the container runtime: docker is required for container runtime: exec: "docker": executable file not found in $PATH
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist
	[ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```


# References


| Link | OS.      | CNI      | Working | 
|------|----------|----------|----------| 
| [setting-up-the-kubernetes-cluster-on-linux-via-kubeadm](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788837606/1/ch01lvl1sec15/setting-up-the-kubernetes-cluster-on-linux-via-kubeadm) | CentOS7 | [Calico](https://www.projectcalico.org) | :heavy_check_mark: Tested |


https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

https://computingforgeeks.com/deploy-kubernetes-cluster-on-ubuntu-with-kubeadm/ (Ubuntu focal, using Calico CNI)

https://linuxconfig.org/how-to-install-kubernetes-on-ubuntu-20-04-focal-fossa-linux (Ubuntu focal, using Flannel CNI)

https://info.rancher.com/kubernetes-networking-deep-dive (ebook)

https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/adding-windows-nodes/ (adding WindowsNodes)
