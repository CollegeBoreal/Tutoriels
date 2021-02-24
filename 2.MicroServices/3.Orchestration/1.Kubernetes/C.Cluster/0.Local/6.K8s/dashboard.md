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

- [ ] Create [sample user](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md) service account

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

- [ ] Create its `role`

```yaml
kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```

```yaml
$ cat << EOF > dashboard-svc-loadbalancer.yaml 
apiVersion: v1
kind: Service
metadata:
  name: dashboard-loadbalancer
  namespace: kubernetes-dashboard
  annotations:
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip
spec:
  type: LoadBalancer
  selector:
    app: kubernetes-dashboard
  ports:
    - name: http
      port: 9000
      targetPort: 8001
  externalTrafficPolicy: Cluster
EOF
```


- [ ] Let's get the generated token

```
$ kubectl --namespace kubernetes-dashboard describe secret \
 `kubectl --namespace kubernetes-dashboard get secret \
 | grep admin-user | awk '{print $1}'` | grep 'token:' | awk '{print $2}'
 ```
 
 
