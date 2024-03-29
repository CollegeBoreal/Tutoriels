# :wheel_of_dharma: k8s :abacus: Data Plane

## Install Kubernetes Cluster on Ubuntu 20.04

:star: Cluster Name: Orion

| Type Server   | Hostname                |  IP               | Specs                 |
|---------------|-------------------------|-------------------|-----------------------|
| control plane | betelgeuse.boreal.codes | `10.13.15.200/20` | 64GB Ram,      16cpus |
| data plane    | bellatrix.boreal.codes  | `10.13.15.201/20` | 64GB Ram,      16cpus |
| data plane    | rigel.boreal.codes      | `10.13.15.202/20` | 32GB Ram,      16cpus |
| data plane    | saiph.boreal.codes      | `10.13.15.203/20` | 64GB Ram,      16cpus |
 
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
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

:round_pushpin: Let's install a specific version

```
$ export KUBEVERSION=1.18.6
```

:round_pushpin: Install the :ice_cube: `kube` tools

```
$ sudo apt update && sudo apt -y install kubeadm=${KUBEVERSION}-00 kubectl=${KUBEVERSION}-00
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

## :seven: Start the :abacus: `data plane` node

:round_pushpin: Join a node 

```
$ $ sudo kubeadm join betelgeuse.boreal.codes:6443 --token 2pje0m.xl8voke0wisjymvp     --discovery-token-ca-cert-hash sha256:27c4b80df3d468bfe13517750a265bb3a3c560871e1bf177cafb323070b7b4a6
[sudo] password for ubuntu: 
W0314 04:13:11.417716   34743 join.go:346] [preflight] WARNING: JoinControlPane.controlPlane settings will be ignored when control-plane flag is not set.
[preflight] Running pre-flight checks
	[WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
	[WARNING SystemVerification]: this Docker version is not on the list of validated versions: 20.10.4. Latest validated version: 19.03
[preflight] Reading configuration from the cluster...
[preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[kubelet-start] Downloading configuration for the kubelet from the "kubelet-config-1.18" ConfigMap in the kube-system namespace
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Starting the kubelet
[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...

This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
```

:o: Back to the :control_knobs: `control plane`

:round_pushpin: Check the current nodes (with `kubectl`)

```
$ kubectl get nodes
NAME         STATUS   ROLES    AGE     VERSION
bellatrix    Ready    <none>   3m15s   v1.18.6
betelgeuse   Ready    master   25m     v1.18.6
rigel        Ready    <none>   68s     v1.18.6
saiph        Ready    <none>   22s     v1.18.6
```

:tada: Ready

