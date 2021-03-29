# Snaphot

- [ ] Create the `snapshot-controller-runner` service account and associated roles

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
   name: snapshot-controller-runner
---
EOF
```

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  # "namespace" omitted since ClusterRoles are not namespaced
  name: snapshot-controller-role
rules:
- apiGroups: [""]
  #
  # at the HTTP level, the name of the resource for accessing Secret
  # objects is "secrets"
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
EOF
```

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: snapshot-controller
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: snapshot-controller-role
subjects:
- kind: ServiceAccount
  name: snapshot-controller-runner
  namespace: default
---
EOF
```

- [ ] Create a deployment using the `snapshot-controller-runner` service account and deploying the OpenEBS `snapshot-controller`

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: snapshot-controller
spec:
  replicas: 1
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: snapshot-controller
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

 Snapshot-controller is running, you will be able to see the created CustomResourceDefinitions(CRD).

```
$ kubectl get crd | grep snapshot
volumesnapshotdatas.volumesnapshot.external-storage.k8s.io   2021-03-27T00:40:04Z
volumesnapshots.volumesnapshot.external-storage.k8s.io       2021-03-27T00:40:04Z
```

- [ ] Create the PVC that will be used by sample pod 

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: demo-vol1-claim
spec:
  storageClassName: standard
  resources:
    requests:
       storage: 5G
  accessModes:
    - ReadWriteOnce
---
EOF
```

- [ ] Create the pod that wille store a date and hostname on the PVC

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Pod
metadata:
  name: busybox
spec:
  containers:
  - image: busybox
    name: busybox
    command: ['sh', '-c', ‘date > /mnt/store1/date.txt; hostname >> /mnt/store1/hostname.txt; tail -f /dev/null;’]
    imagePullPolicy: Always
    volumeMounts:
    — name: demo-vol1
      mountPath: /mnt/store1
  volumes:
  — name: demo-vol1
    persistentVolumeClaim:
      claimName: demo-vol1-claim
---
EOF
```

- [ ] Create the snapshot

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: volumesnapshot.external-storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
   name: snapshot-demo
spec:
   persistentVolumeClaimName: demo-vol1-claim
---
EOF
```



# References

https://blog.mayadata.io/openebs/openebs-snapshots-using-kubectl

https://docs.openshift.com/container-platform/3.3/dev_guide/deployments/deployment_strategies.html

https://github.com/kubernetes-retired/external-storage/blob/master/snapshot/doc/user-guide.md#lifecycle-of-a-volume-snapshot-and-volume-snapshot-data
