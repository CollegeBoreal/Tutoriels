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
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE   VERSION
k3d-k3s-default-server   Ready    master   27m   v1.17.2+k3s1
```
