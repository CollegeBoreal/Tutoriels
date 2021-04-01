


```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: ks-console
  namespace: kubesphere-system
#  labels:
#    app: ks-console
#    tier: frontend
#    version: v3.0.0
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
  # clusterIP: 10.98.200.148
  # type: NodePort
  sessionAffinity: None
  externalTrafficPolicy: Cluster
---
EOF
```
