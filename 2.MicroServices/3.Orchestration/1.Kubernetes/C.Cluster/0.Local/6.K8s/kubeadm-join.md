

```
$ kubeadm token list
```


```
$ kubeadm token create --print-join-command
W0304 19:51:22.390054 2541130 configset.go:202] WARNING: kubeadm cannot validate component configs for API groups [kubelet.config.k8s.io kubeproxy.config.k8s.io]

kubeadm join orion.boreal.codes:6443 --token zlt7nb.lpd06ao1kxf4uwgm     --discovery-token-ca-cert-hash sha256:3aa3fe1dd88a80e7ea9e76408dd166947a606b7bd0f1ad089454ccf9a80c2365 
```

```
$ kubeadm token list
TOKEN                     TTL         EXPIRES                USAGES                   DESCRIPTION    EXTRA GROUPS
zlt7nb.lpd06ao1kxf4uwgm   23h         2021-03-05T19:51:22Z   authentication,signing   <none>         system:bootstrappers:kubeadm:default-node-token
```

```
% kubectl get nodes
NAME    STATUS     ROLES    AGE     VERSION
canis   Ready      <none>   4d16h   v1.18.6
lepus   NotReady   <none>   28s     v1.20.4
orion   Ready      master   4d17h   v1.18.6
ursa    Ready      <none>   4d16h   v1.18.6
```

After a few minutes

```
% kubectl get nodes
NAME    STATUS   ROLES    AGE     VERSION
canis   Ready    <none>   4d16h   v1.18.6
lepus   Ready    <none>   58s     v1.20.4
orion   Ready    master   4d17h   v1.18.6
ursa    Ready    <none>   4d16h   v1.18.6
```
