# Snaphot

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
   name: snapshot-controller-runner
   namespace: default
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: snapshot-controller-role
  namespace: default
rules:
- apiGroups: [""]
   resources: ["pods"]
   verbs: ["get", "list", "delete"]
- apiGroups: [""]
   resources: ["persistentvolumes"]
   verbs: ["get", "list", "watch", "create", "delete"]
- apiGroups: [""]
   resources: ["persistentvolumeclaims"]
   verbs: ["get", "list", "watch", "update"]
- apiGroups: ["storage.k8s.io"]
   resources: ["storageclasses"]
   verbs: ["get", "list", "watch"]
- apiGroups: [""]
   resources: ["events"]
   verbs: ["list", "watch", "create", "update", "patch"]
- apiGroups: ["apiextensions.k8s.io"]
  resources: ["customresourcedefinitions"]
  verbs: ["create", "list", "watch", "delete"]
- apiGroups: ["volumesnapshot.external-storage.k8s.io"]
  resources: ["volumesnapshots"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
- apiGroups: ["volumesnapshot.external-storage.k8s.io"]
  resources: ["volumesnapshotdatas"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
- apiGroups: [""]
  resources: ["services"]
  verbs: ["get"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: snapshot-controller
  namespace: default
roleRef:
- apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: snapshot-controller-role
subjects:
- kind: ServiceAccount
  name: snapshot-controller-runner
  namespace: default
---
apiVersion: extensions/v1
kind: Deployment
metadata:
  name: snapshot-controller
  namespace: default
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: snapshot-controller
    spec:
      serviceAccountName: snapshot-controller-runner
      containers:
      - image: openebs/snapshot-controller:ci
        name: snapshot-controller
        imagePullPolicy: Always
      - image: openebs/snapshot-provisioner:ci
        name: snapshot-provisioner
        imagePullPolicy: Always
---
EOF
```

# References

https://blog.mayadata.io/openebs/openebs-snapshots-using-kubectl

https://docs.openshift.com/container-platform/3.3/dev_guide/deployments/deployment_strategies.html

https://github.com/kubernetes-retired/external-storage/blob/master/snapshot/doc/user-guide.md#lifecycle-of-a-volume-snapshot-and-volume-snapshot-data
