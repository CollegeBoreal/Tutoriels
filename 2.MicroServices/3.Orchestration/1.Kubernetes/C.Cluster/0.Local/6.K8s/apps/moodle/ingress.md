# Ingress

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-wildcard-host
spec:
  rules:
  - host: "bellatrix.boreal.codes"
    http:
      paths:
      - pathType: Prefix
        path: "/admin"
        backend:
          service:
            name: moodle-1616890389.default.svc.cluster.local
            port:
              number: 80
  - host: "bellatrix.boreal.codes"
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: moodle-1616890389.default.svc.cluster.local
            port:
              number: 80
---
EOF
```
