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

## :one: Run single node



```
% kind create cluster --name k8s
```

<img src="images/kind-single-node.png" width="1076" heigth="514"></img>

```
% kubectl config get-contexts   
CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         kind-k8s   kind-k8s   kind-k8s   
          minikube   minikube   minikube  
```

```
$ kubectl config use-context kind-k8s
```

## :two: Run multiple nodes

:pushpin: Edit file `HA-config.yaml`

```yaml
# HA-config.yaml
kind: Cluster
apiVersion: kind.sigs.k8s.io/v1alpha3
nodes:
- role: control-plane
- role: control-plane
- role: control-plane
- role: worker
- role: worker
- role: worker
```

:pushpin: Run the cluster

```
$ kind create cluster --name k8s-HA --config HA-config.yaml 
```

<img src="images/kind-multiple-nodes.png" width="1480" heigth="618"></img>

```
% kubectl config get-contexts                              
CURRENT   NAME          CLUSTER       AUTHINFO      NAMESPACE
          kind-k8s      kind-k8s      kind-k8s      
*         kind-k8s-HA   kind-k8s-HA   kind-k8s-HA   
          minikube      minikube      minikube  
```

<img src="images/kind-k8s-dashboard.png" width="1602" heigth="1378"></img>
