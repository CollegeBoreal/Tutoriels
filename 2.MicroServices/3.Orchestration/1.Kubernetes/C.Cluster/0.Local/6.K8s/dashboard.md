# Dashboard

- [ ] Deploy Dashboard

```
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
```

- [ ] Get status

```
$  kubectl get deploy/kubernetes-dashboard --namespace kubernetes-dashboard
NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
kubernetes-dashboard   1/1     1            1           22h
```

- [ ] Create admin user

Since the dashboard shows us resources across our whole cluster, we will need to create an admin account `admin-user` for it.

```yaml
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```
