```
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: moodle-1616890389
  labels:
    app.kubernetes.io/instance: moodle-1616890389
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: moodle
    helm.sh/chart: moodle-11.0.7
  annotations:
    meta.helm.sh/release-name: moodle-1616890389
    meta.helm.sh/release-namespace: default
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
  selector:
    app.kubernetes.io/instance: moodle-1616890389
    app.kubernetes.io/name: moodle
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
---
EOF
```

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
---
EOF
```
