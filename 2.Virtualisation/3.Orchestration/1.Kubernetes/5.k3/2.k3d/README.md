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
