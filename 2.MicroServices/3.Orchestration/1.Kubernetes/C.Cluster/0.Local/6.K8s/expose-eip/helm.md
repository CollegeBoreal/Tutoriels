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
