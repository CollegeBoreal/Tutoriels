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
$ kubectl apply --filename - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kuron-deployment
  labels:
    app: kuron
spec:
  replicas: 4
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

:one:

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: kuron-deployment-service
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-bellatrix
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

:two:

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: kuron-deployment-service-rigel
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-rigel
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

* You must set `spec.type` to LoadBalancer.
* The `lb.kubesphere.io/v1alpha1: porter` `annotation` specifies that the service uses `Porter`.
* The `protocol.porter.kubesphere.io/v1alpha1: layer2` `annotation` specifies that `Porter` is used in `Layer 2` mode.
* The `eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip` `annotation` specifies the `Eip object` used by `Porter`. If this `annotation` is not configured, `Porter` automatically uses the first available `Eip object` that matches the protocol. You can also delete this annotation and add the `spec.loadBalancerIP` field (for example, `spec.loadBalancerIP: 10.13.15.200`) to assign a specific IP address to the service.
* If `spec.externalTrafficPolicy` is set to `Cluster` (default value), Porter randomly selects a node from all Kubernetes cluster nodes to handle service requests. Pods on other nodes can also be reached over `kube-proxy`.
* If `spec.externalTrafficPolicy` is set to `Local`, Porter randomly selects a node that contains a pod in the Kubernetes cluster to handle service requests. Only pods on the selected node can be reached.


Display information about the Service:

```
$ kubectl get services kuron-deployment-service
```

The output is similar to:

```
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)        AGE
kuron-deployment-service   LoadBalancer   10.100.75.64   10.13.15.200   80:30464/TCP   26m
```

:bulb: Note: 

* The `type=LoadBalancer` service is usually backed by external cloud providers, which is not covered in this example, since it is using `Porter` bare metal load balancer.
* If the external IP address is shown as `<pending>`, wait for a minute and enter the same command again.
* The `kubernetes` cluster may also take some time to come back during that `<pending>` state (i.e. around 20 minutes) :warning:

Display detailed information about the Service:

```
$ kubectl describe services kuron-deployment-service
```

The output is similar to:

```yaml
Name:                     kuron-deployment-service
Namespace:                default
Labels:                   eip.porter.kubesphere.io/v1alpha2=porter-layer2-eip
Annotations:              eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
                          layer2.porter.kubesphere.io/v1alpha1: ursa
                          lb.kubesphere.io/v1alpha1: porter
                          protocol.porter.kubesphere.io/v1alpha1: layer2
Selector:                 app=kuron
Type:                     LoadBalancer
IP:                       10.100.75.64
LoadBalancer Ingress:     10.13.15.200
Port:                     http  80/TCP
TargetPort:               8080/TCP
NodePort:                 http  30464/TCP
Endpoints:                172.16.183.136:8080,172.16.183.137:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```
  
Make a note of the external IP address (`LoadBalancer Ingress`) exposed by your service. In this example, the external IP address is `10.13.15.200`. Also note the value of Port and NodePort. In this example, the Port is `80` and the NodePort is `30464`.

In the preceding output, you can see that the service has several endpoints: `172.16.183.136:8080,172.16.183.137:8080`. These are internal addresses of the pods that are running the `kuron` application. To verify these are pod addresses, enter this command:

```
$ kubectl get pods --output=wide
```

The output is similar to:

```
NAME                                READY   STATUS    RESTARTS   AGE    IP               NODE   NOMINATED NODE   READINESS GATES
kuron-deployment-55878fd4cd-9k7zs   1/1     Running   0          135m   172.16.183.136   ursa   <none>           <none>
kuron-deployment-55878fd4cd-rjvfh   1/1     Running   0          135m   172.16.183.137   ursa   <none>           <none>
porter-manager-98cc6c799-sggrq      1/1     Running   0          18h    10.13.15.202     ursa   <none>           <none>
```

Use the external IP address (LoadBalancer Ingress) to access the `kuron` application:

```
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-rjvfh
$ curl http://10.13.15.200:80
Tu as touché kuron-deployment-55878fd4cd-9k7zs
```

`10.13.15.200` is the external IP address (LoadBalancer Ingress) of your Service, and `80` is the value of `Port` in your Service description. If you are using `minikube`, typing `minikube service kuron-loadbalancer` will automatically open the `kuron` application in a browser.

The response to a successful request is a `touché` message:

```
Tu as touché kuron-deployment-55878fd4cd-9k7zs
```

## :ab: Cleaning up

To delete the Service, enter this command:

```
$ kubectl delete services kuron-deployment-service
```

To delete the `Deployment`, the `ReplicaSet`, and the `Pods` that are running the `kuron` application, enter this command:

```
$ kubectl delete deployment kuron-deployment
```
