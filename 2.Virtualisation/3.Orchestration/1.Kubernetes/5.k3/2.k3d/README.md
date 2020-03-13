# k3d - k3s in Docker

https://github.com/rancher/k3d

In a docker-machine

Install k3d

```
$ curl -s https://raw.githubusercontent.com/rancher/k3d/master/install.sh | bash
Preparing to install k3d into /usr/local/bin
k3d installed into /usr/local/bin/k3d
Run 'k3d --help' to see what you can do with it.
```


```
$ k3d
NAME:
   k3d - Run k3s in Docker!

USAGE:
   k3d [global options] command [command options] [arguments...]

VERSION:
   v1.6.0
...
```


```
$ k3d c
INFO[0000] Created cluster network with ID 8bea8113b2358737171eb9ee14ca19e51d56ef185c7424cd6dd4b1db565234e2
INFO[0000] Created docker volume  k3d-k3s-default-images
INFO[0000] Creating cluster [k3s-default]
INFO[0000] Creating server using docker.io/rancher/k3s:v1.17.2-k3s1...
INFO[0000] Pulling image docker.io/rancher/k3s:v1.17.2-k3s1...
INFO[0011] SUCCESS: created cluster [k3s-default]
INFO[0011] You can now use the cluster with:

export KUBECONFIG="$(k3d get-kubeconfig --name='k3s-default')"
kubectl cluster-info
```


```
$ k3d l
+-------------+------------------------------------+---------+---------+
|    NAME     |               IMAGE                | STATUS  | WORKERS |
+-------------+------------------------------------+---------+---------+
| k3s-default | docker.io/rancher/k3s:v1.17.2-k3s1 | running |   0/0   |
+-------------+------------------------------------+---------+---------+
```

https://kubernetes.io/docs/tasks/tools/install-kubectl/

```
$ curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.17.0/bin/linux/amd64/kubectl
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 41.4M  100 41.4M    0     0   9.9M      0  0:00:04  0:00:04 --:--:--  9.9M
```

```
$ chmod +x ./kubectl
```

```
$ sudo mv ./kubectl /usr/local/bin/kubectl
```

```
$ kubectl version --client
Client Version: version.Info{Major:"1", Minor:"17", GitVersion:"v1.17.0", GitCommit:"70132b0f130acc0bed193d9ba59dd186f0e634cf", GitTreeState:"clean", BuildDate:"2019-12-07T21:20:10Z", GoVersion:"go1.13.4", Compiler:"gc", Platform:"linux/amd64"}
```

```
$ export KUBECONFIG="$(k3d get-kubeconfig --name='k3s-default')"
```

```
$ kubectl cluster-info
Kubernetes master is running at https://localhost:6443
CoreDNS is running at https://localhost:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://localhost:6443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```


```
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE   VERSION
k3d-k3s-default-server   Ready    master   27m   v1.17.2+k3s1
```

```
$ kubectl describe node k3d-k3s-default-server
Name:               k3d-k3s-default-server
Roles:              master
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/instance-type=k3s
                    beta.kubernetes.io/os=linux
                    k3s.io/hostname=k3d-k3s-default-server
                    k3s.io/internal-ip=172.18.0.2
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=k3d-k3s-default-server
                    kubernetes.io/os=linux
                    node-role.kubernetes.io/master=true
                    node.kubernetes.io/instance-type=k3s
Annotations:        flannel.alpha.coreos.com/backend-data: {"VtepMAC":"a6:0b:eb:fb:4b:05"}
                    flannel.alpha.coreos.com/backend-type: vxlan
                    flannel.alpha.coreos.com/kube-subnet-manager: true
                    flannel.alpha.coreos.com/public-ip: 172.18.0.2
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Fri, 13 Mar 2020 11:00:17 +0000
Taints:             <none>
Unschedulable:      false
Lease:
  HolderIdentity:  k3d-k3s-default-server
  AcquireTime:     <unset>
  RenewTime:       Fri, 13 Mar 2020 11:53:40 +0000
Conditions:
  Type                 Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----                 ------  -----------------                 ------------------                ------                       -------
  NetworkUnavailable   False   Fri, 13 Mar 2020 11:00:30 +0000   Fri, 13 Mar 2020 11:00:30 +0000   FlannelIsUp                  Flannel is running on this node
  MemoryPressure       False   Fri, 13 Mar 2020 11:51:20 +0000   Fri, 13 Mar 2020 11:00:17 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure         False   Fri, 13 Mar 2020 11:51:20 +0000   Fri, 13 Mar 2020 11:00:17 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure          False   Fri, 13 Mar 2020 11:51:20 +0000   Fri, 13 Mar 2020 11:00:17 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready                True    Fri, 13 Mar 2020 11:51:20 +0000   Fri, 13 Mar 2020 11:00:28 +0000   KubeletReady                 kubelet is posting ready status
Addresses:
  InternalIP:  172.18.0.2
  Hostname:    k3d-k3s-default-server
Capacity:
  cpu:                1
  ephemeral-storage:  18714000Ki
  hugepages-2Mi:      0
  memory:             935624Ki
  pods:               110
Allocatable:
  cpu:                1
  ephemeral-storage:  18204979186
  hugepages-2Mi:      0
  memory:             935624Ki
  pods:               110
System Info:
  Machine ID:
  System UUID:                55D6DE56-18C0-9E4F-BDE9-EFA42DDF4F22
  Boot ID:                    3c68b503-70b3-49a1-ba6d-7ece81d4b44e
  Kernel Version:             4.14.154-boot2docker
  OS Image:                   Unknown
  Operating System:           linux
  Architecture:               amd64
  Container Runtime Version:  containerd://1.3.3-k3s1
  Kubelet Version:            v1.17.2+k3s1
  Kube-Proxy Version:         v1.17.2+k3s1
PodCIDR:                      10.42.0.0/24
PodCIDRs:                     10.42.0.0/24
ProviderID:                   k3s://k3d-k3s-default-server
Non-terminated Pods:          (5 in total)
  Namespace                   Name                                       CPU Requests  CPU Limits  Memory Requests  Memory Limits  AGE
  ---------                   ----                                       ------------  ----------  ---------------  -------------  ---
  kube-system                 metrics-server-6d684c7b5-4xnq8             0 (0%)        0 (0%)      0 (0%)           0 (0%)         53m
  kube-system                 local-path-provisioner-58fb86bdfd-5f67n    0 (0%)        0 (0%)      0 (0%)           0 (0%)         53m
  kube-system                 coredns-d798c9dd-t5rhp                     100m (10%)    0 (0%)      70Mi (7%)        170Mi (18%)    53m
  kube-system                 svclb-traefik-29zj2                        0 (0%)        0 (0%)      0 (0%)           0 (0%)         52m
  kube-system                 traefik-6787cddb4b-67vt2                   0 (0%)        0 (0%)      0 (0%)           0 (0%)         52m
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                100m (10%)  0 (0%)
  memory             70Mi (7%)   170Mi (18%)
  ephemeral-storage  0 (0%)      0 (0%)
Events:
  Type     Reason                   Age                From                                Message
  ----     ------                   ----               ----                                -------
  Normal   Starting                 53m                kubelet, k3d-k3s-default-server     Starting kubelet.
  Warning  InvalidDiskCapacity      53m                kubelet, k3d-k3s-default-server     invalid capacity 0 on image filesystem
  Normal   NodeHasSufficientMemory  53m (x2 over 53m)  kubelet, k3d-k3s-default-server     Node k3d-k3s-default-server status is now: NodeHasSufficientMemory
  Normal   NodeHasNoDiskPressure    53m (x2 over 53m)  kubelet, k3d-k3s-default-server     Node k3d-k3s-default-server status is now: NodeHasNoDiskPressure
  Normal   NodeHasSufficientPID     53m (x2 over 53m)  kubelet, k3d-k3s-default-server     Node k3d-k3s-default-server status is now: NodeHasSufficientPID
  Normal   NodeAllocatableEnforced  53m                kubelet, k3d-k3s-default-server     Updated Node Allocatable limit across pods
  Normal   Starting                 53m                kube-proxy, k3d-k3s-default-server  Starting kube-proxy.
  Normal   NodeReady                53m                kubelet, k3d-k3s-default-server     Node k3d-k3s-default-server status is now: NodeReady
```
