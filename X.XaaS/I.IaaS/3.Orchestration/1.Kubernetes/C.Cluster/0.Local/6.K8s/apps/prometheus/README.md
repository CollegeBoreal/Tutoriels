
# Prometheus

Edit the `Service` to allow the use of a local `LoadBalancer`  `openelb` 

:warning: `metadata.name` must match the helm moodle service name

```yaml
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: kube-prometheus-1616893972-prometheus
  annotations:
    lb.kubesphere.io/v1alpha1: openelb
    protocol.openelb.kubesphere.io/v1alpha1: layer2
    eip.openelb.kubesphere.io/v1alpha2: layer2-eip
spec:
  ports:
    - name: http
      protocol: TCP
      port: 9090
      targetPort: 9090
  type: LoadBalancer
EOF
```
