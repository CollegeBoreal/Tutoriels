```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: moodle-1616890389
spec:
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: http
      nodePort: 32580
    - name: https
      protocol: TCP
      port: 443
      targetPort: https
      nodePort: 32713
  # clusterIP: 10.101.107.252
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
---
EOF
```
