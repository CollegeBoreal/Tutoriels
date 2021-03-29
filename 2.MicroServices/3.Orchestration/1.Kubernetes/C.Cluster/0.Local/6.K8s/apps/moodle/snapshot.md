# Snaphot

## :gear: Create the service account and cluster roles

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

- [ ] Create the `snapshot-controller` role


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

- [ ] Create the `snapshot-controller` binding, associate `snapshot-controller-role` role to `snapshot-controller-runner` service account


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

- [ ] Create a deployment using the `snapshot-controller-runner` service account and deploying the OpenEBS `snapshot-controller` containers

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

* Snapshot-controller is running, you will be able to see the created CustomResourceDefinitions(CRD).

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

- [ ] Create the pod that will store a date and hostname on the PVC

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
    imagePullPolicy: Always
    command: 
    - sh
    - -c
    - 'date > /mnt/store1/date.txt; hostname >> /mnt/store1/hostname.txt; tail -f /dev/null;'
    volumeMounts:
    - mountPath: /mnt/store1
      name: demo-vol1
  volumes:
  - name: demo-vol1
    persistentVolumeClaim:
      claimName: demo-vol1-claim
---
EOF
```

- [ ] Let's see the mounted devices on the `busybox` pod

```
$ kubectl exec --stdin --tty busybox -- cat /proc/mounts | grep "/dev/"
devpts /dev/pts devpts rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=666 0 0
mqueue /dev/mqueue mqueue rw,nosuid,nodev,noexec,relatime 0 0
/dev/mapper/ubuntu--vg-ubuntu--lv /dev/termination-log ext4 rw,relatime 0 0
/dev/sdd /mnt/store1 ext4 rw,relatime,stripe=256 0 0
/dev/mapper/ubuntu--vg-ubuntu--lv /etc/resolv.conf ext4 rw,relatime 0 0
/dev/mapper/ubuntu--vg-ubuntu--lv /etc/hostname ext4 rw,relatime 0 0
/dev/mapper/ubuntu--vg-ubuntu--lv /etc/hosts ext4 rw,relatime 0 0
shm /dev/shm tmpfs rw,nosuid,nodev,noexec,relatime,size=65536k 0 0
```

- [ ] Finally, let's display the content on the `demo-vol1-claim` PVC

```
$ kubectl exec --stdin --tty busybox -- cat /mnt/store1/date.txt    
Mon Mar 29 03:43:45 UTC 2021
```

## :a: Creating the Volume Snapshot

- [ ] Let's create the volume snapshot of the `demo-vol1-claim` PVC

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

- [ ] Observe the just-created Volume Snapshot `snapshot-demo`

```
$ kubectl get volumesnapshot snapshot-demo -o yaml                       
apiVersion: volumesnapshot.external-storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"volumesnapshot.external-storage.k8s.io/v1","kind":"VolumeSnapshot","metadata":{"annotations":{},"name":"snapshot-demo","namespace":"default"},"spec":{"persistentVolumeClaimName":"demo-vol1-claim"}}
  creationTimestamp: "2021-03-29T03:44:06Z"
  generation: 3
  labels:
    SnapshotMetadata-PVName: pvc-f6d542a8-da7d-4c2b-9696-0660b4990820
    SnapshotMetadata-Timestamp: "1616989447500832330"
  managedFields: (Toot long - not displayed)
  name: snapshot-demo
  namespace: default
  resourceVersion: "1536394"
  selfLink: /apis/volumesnapshot.external-storage.k8s.io/v1/namespaces/default/volumesnapshots/snapshot-demo
  uid: eb84391c-f04f-41a8-bd26-9feb050c5852
spec:
  persistentVolumeClaimName: demo-vol1-claim
  snapshotDataName: k8s-volume-snapshot-0400570a-9041-11eb-b3c7-5a703c17820c
status:
  conditions:
  - lastTransitionTime: "2021-03-29T03:44:07Z"
    message: Snapshot created successfully
    reason: ""
    status: "True"
    type: Ready
  creationTimestamp: null
```

- [ ] Let's grab the snapshotDataName `k8s-volume-snapshot-0400570a-9041-11eb-b3c7-5a703c17820c` and Observe its Volume Snapshot Data

```
$ % kubectl get volumesnapshotdata k8s-volume-snapshot-0400570a-9041-11eb-b3c7-5a703c17820c --output yaml
apiVersion: volumesnapshot.external-storage.k8s.io/v1
kind: VolumeSnapshotData
metadata:
  creationTimestamp: "2021-03-29T03:44:07Z"
  generation: 1
  managedFields: (Toot long - not displayed)
  name: k8s-volume-snapshot-0400570a-9041-11eb-b3c7-5a703c17820c
  resourceVersion: "1536393"
  selfLink: /apis/volumesnapshot.external-storage.k8s.io/v1/volumesnapshotdatas/k8s-volume-snapshot-0400570a-9041-11eb-b3c7-5a703c17820c
  uid: 63346265-363c-495e-904e-31869e665a2b
spec:
  openebsVolume:
    capacity: 5G
    snapshotId: pvc-f6d542a8-da7d-4c2b-9696-0660b4990820_snapshot-demo_1616989446899630784
  persistentVolumeRef:
    kind: PersistentVolume
    name: pvc-f6d542a8-da7d-4c2b-9696-0660b4990820
  volumeSnapshotRef:
    kind: VolumeSnapshot
    name: default/snapshot-demo-eb84391c-f04f-41a8-bd26-9feb050c5852
status:
  conditions:
  - lastTransitionTime: "2021-03-29T03:44:07Z"
    message: Snapshot created successfully
    reason: ""
    status: "True"
    type: Ready
  creationTimestamp: null
```

## :b: Restoring the Volume Snapshot


```yaml
$ kubectl apply --filename - <<EOF
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: snapshot-promoter
provisioner: volumesnapshot.external-storage.k8s.io/snapshot-promoter
---
EOF
```

```
$ kubectl get sc
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  2d13h
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  2d13h
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  2d13h
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  2d13h
snapshot-promoter           volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  99s
standard (default)          openebs.io/provisioner-iscsi                               Delete          Immediate              false                  41h
```

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: demo-snap-vol-claim
  annotations:
    snapshot.alpha.kubernetes.io/snapshot: snapshot-demo
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: snapshot-promoter
---
EOF
```

```
$ kubectl get pvc
NAME                                STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS        AGE
data-kafka-1616893476-0             Bound    pvc-b0aacc12-11fd-48ca-8086-36c5c7805b8c   8Gi        RWO            standard            37h
data-kafka-1616893476-zookeeper-0   Bound    pvc-4af48280-dce2-45a1-a515-7c8378a7193a   8Gi        RWO            standard            37h
data-moodle-1616890389-mariadb-0    Bound    pvc-7acbfcd8-6c5f-46ad-9532-a11230acaa08   8Gi        RWO            standard            38h
demo-snap-vol-claim                 Bound    pvc-f2af399b-3360-4ebc-9707-420403cec6fb   5Gi        RWO            snapshot-promoter   8s
demo-vol1-claim                     Bound    pvc-f6d542a8-da7d-4c2b-9696-0660b4990820   5G         RWO            standard            10h
grafana-1616897123                  Bound    pvc-3418f3de-7879-43be-bf63-79db0ea91d14   10Gi       RWO            standard            36h
moodle-1616890389-moodle            Bound    pvc-66bfc9e2-48f0-4be7-bb3d-5fc2821154f0   8Gi        RWO            standard            38h
```

# References

https://blog.mayadata.io/openebs/openebs-snapshots-using-kubectl

https://docs.openshift.com/container-platform/3.3/dev_guide/deployments/deployment_strategies.html

https://github.com/kubernetes-retired/external-storage/blob/master/snapshot/doc/user-guide.md#lifecycle-of-a-volume-snapshot-and-volume-snapshot-data
