# Graphana

Edit the `Service` to allow the use of a local `LoadBalancer`  `porter` ELB

:warning: `metadata.name` must match the helm moodle service name

```
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: grafana-1616897123
  annotations:
    lb.kubesphere.io/v1alpha1: openelb
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
spec:
  ports:
    - name: http
      protocol: TCP
      port: 3000
      targetPort: 3000
  type: LoadBalancer
EOF
```
