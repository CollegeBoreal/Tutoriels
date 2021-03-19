```
$ helm install /opt/istio-1.0.4/install/kubernetes/helm/istio \
           --name istio \
           --namespace istio-system \
           --set servicegraph.enabled=true \
           --set servicegraph.enable=true \
           --set tracing.enabled=true \
           --set grafana.enabled=true \
           --set kiali.enabled=true \
           --set prometheus.enabled=true \
           --set gateways.istio-ingressgateway.serviceAnnotations."service\.beta\.kubernetes\.io/azure-load-balancer-internal"='"true"'
```

```
$ helm install my-release bitnami/moodle \
       --set metadata.annotations.lb\.kubesphere\.io/v1alpha1=porter \
       --set metadata.annotations.protocol\.porter\.kubesphere\.io/v1alpha1=layer2 \
       --set metadata.annotations.eip\.porter\.kubesphere\.io/v1alpha2=porter-layer2-eip-bellatrix
```

```yaml
$ kubectl apply -f -- <EOF
kind: Service
apiVersion: v1
metadata:
  name: my-release-moodle
  labels:
    app.kubernetes.io/instance: my-release
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: moodle
    helm.sh/chart: moodle-11.0.6
  annotations:
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-bellatrix
spec:
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https
  selector:
    app.kubernetes.io/instance: my-release
    app.kubernetes.io/name: moodle
  type: LoadBalancer
  externalTrafficPolicy: Cluster
EOF
```
