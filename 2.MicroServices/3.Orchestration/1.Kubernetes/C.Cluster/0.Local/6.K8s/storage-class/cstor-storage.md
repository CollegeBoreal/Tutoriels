

https://docs.openebs.io/docs/next/ugcstor.html#creating-cStor-storage-pools

```
% kubectl get blockdevice -n openebs
NAME                                               NODENAME   SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4   ursa       102687672   Unclaimed    Active   75m
blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e   canis      102687672   Unclaimed    Active   19h
```

```yaml
$ kubectl apply -f - <<EOF
#Use the following YAMLs to create a cStor Storage Pool.
apiVersion: openebs.io/v1alpha1
kind: StoragePoolClaim
metadata:
  name: cstor-disk-pool
  annotations:
    cas.openebs.io/config: |
      - name: PoolResourceRequests
        value: |-
            memory: 2Gi
      - name: PoolResourceLimits
        value: |-
            memory: 4Gi
spec:
  name: cstor-disk-pool
  type: disk
  poolSpec:
    poolType: striped
  blockDevices:
    blockDeviceList:
    - blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4
    - blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e
---
EOF
```

```
$ kubectl get spc
NAME              AGE
cstor-disk-pool   7s
```

```
$ kubectl get csp
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-fny2   662K        99.5G   99.5G      Healthy   false      striped   51s
cstor-disk-pool-m7sr   86K         99.5G   99.5G      Healthy   false      striped   51s
```

```
$ kubectl get blockdevices -nopenebs
NAME                                               NODENAME   SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4   ursa       102687672   Claimed      Active   91m
blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e   canis      102687672   Claimed      Active   19h
```

```
$ kubectl apply -f - <<EOF
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: openebs-sc-statefulset
  annotations:
    openebs.io/cas-type: cstor
    cas.openebs.io/config: |
      - name: StoragePoolClaim
        value: "cstor-disk-pool"
      - name: ReplicaCount
        value: "2"
provisioner: openebs.io/provisioner-iscsi
EOF
```

```
$ kubectl get sc openebs-sc-statefulset
NAME                     PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
openebs-sc-statefulset   openebs.io/provisioner-iscsi   Delete          Immediate           false                  74s
```


## :exclamation: Python Example

```yaml
$ kubectl apply -f - <<EOF
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: openebs-sc-example
  annotations:
    openebs.io/cas-type: cstor
    cas.openebs.io/config: |
      - name: StoragePoolClaim
        value: "cstor-disk-pool"
      - name: ReplicaCount
        value: "2"
provisioner: openebs.io/provisioner-iscsi
EOF
```

```yaml
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cstor-python-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 200Mi
  storageClassName: openebs-sc-example
EOF
```

```yaml
$ kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python-myapp
spec:
  selector:
    matchLabels:
      app: python-myapp
  template:
    metadata:
      labels:
        app: python-myapp
    spec:
      containers:
      - name: python-myapp-container
        image: dunefro/hostpath:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        volumeMounts:
          - mountPath: /workspace/apps/
            name: cstor-volume
      volumes:
        - name: cstor-volume
          persistentVolumeClaim:
            claimName: cstor-python-pvc
EOF
```
# References

https://github.com/openebs/openebs-docs/issues/900
