# Expose EIP (External IP Address)


Exposing an External IP Address to Access an Application in a Cluster

This page shows how to create a Kubernetes Service object that exposes an external IP address.

| Link | Comments |
|------|----------|
| [expose-external-ip-address](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address) | Document Template that uses GKE cloud provider for Load Balancing | 
| [use-porter-in-layer-2-mode](https://porterlb.io/docs/getting-started/usage/use-porter-in-layer-2-mode) | Page that shows how to use a local (Bare Metal) load balancer |



## :o: Before you begin

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


## :a: Creating a service for an application running in two pods 

:round_pushpin: Run a `kuron` application in your cluster:

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
$ kubectl apply -f kuron-deployment.yaml 
```

The preceding command creates a Deployment and an associated `ReplicaSet`. The `ReplicaSet` has two Pods each of which runs the `kuron` application.

Display information about the Deployment:

```
$ kubectl get deployments kuron-deployment
$ kubectl describe deployments kuron-deployment
```

Display information about your ReplicaSet objects:

```
$ kubectl get replicasets
$ kubectl describe replicasets
```

:round_pushpin: Create a Service object that exposes the deployment:

```yaml
$ cat << EOF > kuron-svc-loadbalancer.yaml 
apiVersion: v1
kind: Service
metadata:
  name: kuron-loadbalancer
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
spec:
  type: LoadBalancer
  selector:
    app: kuron
  ports:
    - name: http
      port: 80
      targetPort: 8080
  externalTrafficPolicy: Cluster
EOF
```

:bulb: NOTE

  You must set spec.type to LoadBalancer.
  The lb.kubesphere.io/v1alpha1: porter annotation specifies that the service uses Porter.
  The protocol.porter.kubesphere.io/v1alpha1: layer2 annotation specifies that Porter is used in Layer 2 mode.
  The eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip annotation specifies the Eip object used by Porter. If this annotation is not configured, Porter automatically uses the first available Eip object that matches the protocol. You can also delete this annotation and add the spec.loadBalancerIP field (for example, spec.loadBalancerIP: 192.168.0.91) to assign a specific IP address to the service.
  If spec.externalTrafficPolicy is set to Cluster (default value), Porter randomly selects a node from all Kubernetes cluster nodes to handle service requests. Pods on other nodes can also be reached over kube-proxy.
  If spec.externalTrafficPolicy is set to Local, Porter randomly selects a node that contains a pod in the Kubernetes cluster to handle service requests. Only pods on the selected node can be reached.

Run the following command to create the service:

```
$ kubectl apply -f kuron-svc-loadbalancer.yaml 
```

Display information about the Service:

```
$ kubectl get services kuron-loadbalancer
```

The output is similar to:

```
NAME                TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)    AGE
kuron-loadbalancer  LoadBalancer   10.19.0.01    10.13.15.200     8080/TCP   54s
```

Note: The type=LoadBalancer service is backed by external cloud providers, which is not covered in this example, please refer to this page for the details.

Note: If the external IP address is shown as <pending>, wait for a minute and enter the same command again.

Display detailed information about the Service:

```
kubectl describe services kuron-loadbalancer
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
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
% curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
% curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-rjvfh
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
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
