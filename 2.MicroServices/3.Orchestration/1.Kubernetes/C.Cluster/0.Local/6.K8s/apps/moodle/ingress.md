# Ingress

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-wildcard-host
spec:
  rules:
  - host: bellatrix.boreal.codes
    http:
      paths:
      - pathType: Prefix
        path: "/admin"
        backend:
          serviceName: moodle-1616890389.default.svc.cluster.local
          servicePort: 80
  - host: "bellatrix.boreal.codes"
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          serviceName: moodle-1616890389.default.svc.cluster.local
          servicePort: 80
---
EOF
```
