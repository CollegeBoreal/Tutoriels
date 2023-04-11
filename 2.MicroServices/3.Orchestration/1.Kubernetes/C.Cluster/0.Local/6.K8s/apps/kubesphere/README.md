# KubeSphere


## :o: Install

https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/


Execute the following commands:

- [ ] Installation

```
kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.3.2/kubesphere-installer.yaml
```

- [ ] Configuration
   
```
kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.3.2/cluster-configuration.yaml
```

Inspect the logs of installation:

```
$ kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
```

Make sure port 30880 is opened in your security group and access the web console through the NodePort (IP:30880) with the default account and password (admin/P@88w0rd).

## :a: Load Balancer

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: ks-console
  namespace: kubesphere-system
  annotations:
    lb.kubesphere.io/v1alpha1: openelb
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
spec:
  ports:
    - name: nginx
      protocol: TCP
      port: 80
      targetPort: 8000
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
---
EOF
```

```
% kubectl get svc/ks-console -n kubesphere-system

NAME         TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)        AGE
ks-console   LoadBalancer   10.98.200.148   10.13.15.201   80:30007/TCP   6h37m
```

* NodePort

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: ks-console
  namespace: kubesphere-system
  labels:
    app: ks-console
    tier: frontend
    version: v3.0.0
spec:
  ports:
    - name: nginx
      protocol: TCP
      port: 80
      targetPort: 8000
      nodePort: 30880
  selector:
    app: ks-console
    tier: frontend
    version: v3.0.0
   clusterIP: 10.98.200.148
   type: NodePort
  sessionAffinity: None
  externalTrafficPolicy: Cluster
---
EOF
```
