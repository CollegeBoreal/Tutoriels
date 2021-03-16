

```
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: moodle-deployment-service
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
spec:
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: http
      nodePort: 31525
    - name: https
      protocol: TCP
      port: 443
      targetPort: https
      nodePort: 30303
  selector:
    app: moodle
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
EOF
```
