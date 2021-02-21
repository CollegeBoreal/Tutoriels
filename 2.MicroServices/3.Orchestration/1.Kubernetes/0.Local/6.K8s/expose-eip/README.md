# Expose EIP (External IP Address)


Exposing an External IP Address to Access an Application in a Cluster

This page shows how to create a Kubernetes Service object that exposes an external IP address.

| Link | Comments |
|------|----------|
| [expose-external-ip-address](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address) | Document Template that uses GKE cloud provider for Load Balancing | 
| [use-porter-in-layer-2-mode](https://porterlb.io/docs/getting-started/usage/use-porter-in-layer-2-mode) | Page that shows how to use a local (Bare Metal) load balancer |



Before you begin

- [ ] Install `kubectl`.
- [ ] Use `kubeadm` to create a Kubernetes cluster. 
- [ ] Install the [Porter](porter) Load Balancer

This tutorial creates an internal load balancer, which requires bare metal servers.

Configure `kubectl` to communicate with your Kubernetes API server. For instructions, see the documentation for a bare metal installation.

:round_pushpin: Objectives

* Run two instances of a `kuron` application.
* Create a Service object that exposes an external IP address.
* Use the Service object to access the running application.
* Creating a service for an application running in two pods
* Run a `kuron` application in your cluster:

```yaml
$ cat << EOF > kuron-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kuron-deployment
  labels:
    app: kuron
spec:
  replicas: 2
  selector:
    matchLabels:
      app: kuron
  template:
    metadata:
      labels:
        app: kuron
    spec:
      containers:
      - name: kuron
        image: collegeboreal/kuron:latest
        ports:
        - containerPort: 8080
EOF
```

```
$ kubectl apply -f https://k8s.io/examples/service/load-balancer-example.yaml
```

The preceding command creates a Deployment and an associated ReplicaSet. The ReplicaSet has five Pods each of which runs the Hello World application.

Display information about the Deployment:

```
$ kubectl get deployments hello-world
$ kubectl describe deployments hello-world
```

Display information about your ReplicaSet objects:

```
$ kubectl get replicasets
$ kubectl describe replicasets
```

Create a Service object that exposes the deployment:

```
$ kubectl expose deployment hello-world --type=LoadBalancer --name=my-service
```

Display information about the Service:

```
$ kubectl get services my-service
```

The output is similar to:

```
NAME         TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)    AGE
my-service   LoadBalancer   10.3.245.137   104.198.205.71   8080/TCP   54s
```

Note: The type=LoadBalancer service is backed by external cloud providers, which is not covered in this example, please refer to this page for the details.

Note: If the external IP address is shown as <pending>, wait for a minute and enter the same command again.

Display detailed information about the Service:

```
kubectl describe services my-service
```

The output is similar to:

```
Name:           my-service
Namespace:      default
Labels:         app.kubernetes.io/name=load-balancer-example
Annotations:    <none>
Selector:       app.kubernetes.io/name=load-balancer-example
Type:           LoadBalancer
IP:             10.3.245.137
LoadBalancer Ingress:   104.198.205.71
Port:           <unset> 8080/TCP
NodePort:       <unset> 32377/TCP
Endpoints:      10.0.0.6:8080,10.0.1.6:8080,10.0.1.7:8080 + 2 more...
Session Affinity:   None
Events:         <none>
```
  
Make a note of the external IP address (LoadBalancer Ingress) exposed by your service. In this example, the external IP address is 104.198.205.71. Also note the value of Port and NodePort. In this example, the Port is 8080 and the NodePort is 32377.

In the preceding output, you can see that the service has several endpoints: 10.0.0.6:8080,10.0.1.6:8080,10.0.1.7:8080 + 2 more. These are internal addresses of the pods that are running the Hello World application. To verify these are pod addresses, enter this command:

```
kubectl get pods --output=wide
```

The output is similar to:

```
NAME                         ...  IP         NODE
hello-world-2895499144-1jaz9 ...  10.0.1.6   gke-cluster-1-default-pool-e0b8d269-1afc
hello-world-2895499144-2e5uh ...  10.0.1.8   gke-cluster-1-default-pool-e0b8d269-1afc
hello-world-2895499144-9m4h1 ...  10.0.0.6   gke-cluster-1-default-pool-e0b8d269-5v7a
hello-world-2895499144-o4z13 ...  10.0.1.7   gke-cluster-1-default-pool-e0b8d269-1afc
hello-world-2895499144-segjf ...  10.0.2.5   gke-cluster-1-default-pool-e0b8d269-cpuc
```
Use the external IP address (LoadBalancer Ingress) to access the Hello World application:

```
curl http://<external-ip>:<port>
```

where <external-ip> is the external IP address (LoadBalancer Ingress) of your Service, and <port> is the value of Port in your Service description. If you are using minikube, typing minikube service my-service will automatically open the Hello World application in a browser.

The response to a successful request is a hello message:

```
Hello Kubernetes!
```

## :ab: Cleaning up

To delete the Service, enter this command:

```
kubectl delete services my-service
```

To delete the Deployment, the ReplicaSet, and the Pods that are running the Hello World application, enter this command:

```
kubectl delete deployment hello-world
```
