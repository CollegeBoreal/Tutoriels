# MiniKube

## :zero: Starting Minikube

```
$ minikube start 
```

<img src="images/minikube-start.png" width="2710" heigth="1462"></img>

:pushpin: Accessing minikube host with ssh key :key:

```
$ ssh -t -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip)
```

:pushpin: Accessing minikube host with ssh

```
$ minikube ssh
```


# References

https://itnext.io/run-kubernetes-on-your-machine-7ee463af21a2

### minikube-with-hyperkit

https://blog.arkey.fr/2018/06/18/minikube-with-hyperkit/

### kevin-smets/1_kubernetes_on_macOS.md (minikube)

https://gist.github.com/kevin-smets/b91a34cea662d0c523968472a81788f7

