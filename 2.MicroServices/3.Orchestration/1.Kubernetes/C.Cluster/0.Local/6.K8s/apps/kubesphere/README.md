

* Load Balancer

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: ks-console
  namespace: kubesphere-system
  annotations:
    lb.kubesphere.io/v1alpha1: porter
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
