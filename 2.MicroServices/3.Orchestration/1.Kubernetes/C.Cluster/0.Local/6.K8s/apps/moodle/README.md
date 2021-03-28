# Moodle

Edit the `Service` to allow the use of a local `LoadBalancer`  `porter` ELB

:warning: `metadata.name` must match the helm moodle service name

```
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: moodle-1616890389
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
    - name: https
      protocol: TCP
      port: 443
      targetPort: https
  type: LoadBalancer
EOF
```
