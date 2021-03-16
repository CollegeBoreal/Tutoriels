

```
apiVersion: v1
kind: Service
metadata:
  name: moodle-1615922330
  namespace: default
  selfLink: /api/v1/namespaces/default/services/moodle-1615922330
  uid: 60289186-af74-461f-b892-10f33a74e5f2
  resourceVersion: '910681'
  creationTimestamp: '2021-03-16T19:18:54Z'
  labels:
    app.kubernetes.io/instance: moodle-1615922330
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: moodle
    helm.sh/chart: moodle-11.0.6
  annotations:
    meta.helm.sh/release-name: moodle-1615922330
    meta.helm.sh/release-namespace: default
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
    app.kubernetes.io/instance: moodle-1615922330
    app.kubernetes.io/name: moodle
  clusterIP: 10.102.81.84
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
status:
  loadBalancer: {}
```

```
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: kuron-deployment-service
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
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
