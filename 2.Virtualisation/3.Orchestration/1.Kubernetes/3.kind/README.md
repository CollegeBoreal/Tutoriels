# kind - Kubernetes In Docker


## :o: Install

:star: Windows

```
$ choco install kind
```

:star: MacOS

```
$ brew install kind
```

## :one: Run

```
% kind create cluster --name k8s
```

```
% kubectl config get-contexts   
CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         kind-k8s   kind-k8s   kind-k8s   
          minikube   minikube   minikube  
```

```
$ kubectl config use-context kind-k8s
```


