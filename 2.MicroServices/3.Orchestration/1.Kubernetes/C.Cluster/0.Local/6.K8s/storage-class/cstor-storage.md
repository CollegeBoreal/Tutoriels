# openebs StorageClass


## :a: Admin Operations

https://docs.openebs.io/docs/next/ugcstor.html#creating-cStor-storage-pools

- [ ] Retrieve the Block Devices

```
kubectl get blockdevice -n openebs
NAME                                               NODENAME    SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03   bellatrix   102687672   Unclaimed    Active   12m
blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1   saiph       102687672   Unclaimed    Active   12m
blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5   rigel       102687672   Unclaimed    Active   12m
```

- [ ] Create the `cStor Storage Pool` (csp)

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
    - blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03
    - blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1
    - blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5
---
EOF
```

:round_pushpin: Observe the `StoragePoolClaim`

```
$ kubectl get spc
NAME              AGE
cstor-disk-pool   7s
```

:round_pushpin: Observe the cStor Storage Pool 

* It may take some time to `Init`

```
$ kubectl get csp
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-3oqs   83K         99.5G   99.5G      Healthy   false      striped   23s
cstor-disk-pool-thk6                                  Init      false      striped   23s
cstor-disk-pool-yit1   83K         99.5G   99.5G      Healthy   false      striped   23s
```

* It may take some time to `ALLOCATE` (i.e. 83K)

```
$ kubectl get csp                   
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-3oqs   665K        99.5G   99.5G      Healthy   false      striped   95s
cstor-disk-pool-thk6   83K         99.5G   99.5G      Healthy   false      striped   95s
cstor-disk-pool-yit1   662K        99.5G   99.5G      Healthy   false      striped   95s
```

* Finally

```
$ kubectl get csp
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-3oqs   665K        99.5G   99.5G      Healthy   false      striped   4m59s
cstor-disk-pool-thk6   662K        99.5G   99.5G      Healthy   false      striped   4m59s
cstor-disk-pool-yit1   662K        99.5G   99.5G      Healthy   false      striped   4m59s
```

:round_pushpin: Block Devices are now `claimed`

```
$ kubectl get blockdevices -nopenebs
NAME                                               NODENAME    SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03   bellatrix   102687672   Claimed      Active   16m
blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1   saiph       102687672   Claimed      Active   16m
blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5   rigel       102687672   Claimed      Active   16m
```

```yaml
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
        value: "3"
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
        image: collegeboreal/file1250:v1
        imagePullPolicy: Always
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


```
$ kubectl logs -f maya-apiserver-6999679866-m64wq -n openebs
+ MAYA_API_SERVER_NETWORK=eth0
+ ip -4 addr show scope global dev+  eth0
grep inet
+ awk '{print $2}'
+ cut -d / -f 1
+ CONTAINER_IP_ADDR=172.16.108.29
+ exec /usr/local/bin/maya-apiserver start '--bind=172.16.108.29'
I0309 03:44:44.577330       1 start.go:148] Initializing maya-apiserver...
I0309 03:44:44.778403       1 start.go:279] Starting maya api server ...
I0309 03:44:45.576273       1 start.go:288] resources applied successfully by installer
I0309 03:44:45.603792       1 start.go:193] Maya api server configuration:
I0309 03:44:45.603811       1 start.go:195]          Log Level: INFO
I0309 03:44:45.603818       1 start.go:195]             Region: global (DC: dc1)
I0309 03:44:45.603825       1 start.go:195]            Version: 2.6.0-released
I0309 03:44:45.603831       1 start.go:201] 
I0309 03:44:45.603837       1 start.go:204] Maya api server started! Log data will stream in below:
...
```

:bangbang: From 

```
$ sudo blkid /dev/ubuntu-vg/iscsi-lv
/dev/ubuntu-vg/iscsi-lv: UUID="9214d585-1b63-4bd4-a500-0f1a2c5f7af4" TYPE="ext4"
```

:star: to

```
$ sudo blkid /dev/ubuntu-vg/iscsi-lv
/dev/ubuntu-vg/iscsi-lv: LABEL="cstor-6aa53c2d-8fad-418e-b5f3-7d38a9455849" UUID="5400056540718397328" UUID_SUB="11562005844770744908" TYPE="zfs_member"
```

```
$ lsblk /dev/sdb
NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb    8:16   0  200M  0 disk /var/lib/kubelet/pods/b49186fb-545a-43aa-afe3-e82949228129/volumes/kubernetes.io~iscsi/pvc-540d8067-33a2-4f2d-bc3b-d1712175db7b
``` 

```
% kubectl get pods       
NAME                           READY   STATUS              RESTARTS   AGE
python-myapp-f968487f8-cx5xd   0/1     ContainerCreating   0          46s
```

```
% kubectl get pods                           
NAME                           READY   STATUS    RESTARTS   AGE
python-myapp-f968487f8-cx5xd   1/1     Running   0          4m
```

```
% kubectl logs -f python-myapp-f968487f8-cx5xd
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
```


```
$ sudo lsblk /dev/sdb
NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb    8:16   0  200M  0 disk /var/lib/kubelet/pods/807179bc-ff8a-4ab9-9297-614a483d4de6/volumes/kubernetes.io~iscsi/pvc-540d8067-33a2-4f2d-bc3b-d1712175db7b
```

```
$ sudo ls -l /var/lib/kubelet/pods/807179bc-ff8a-4ab9-9297-614a483d4de6/volumes/kubernetes.io~iscsi/pvc-540d8067-33a2-4f2d-bc3b-d1712175db7b
total 216
-rw-r--r-- 1 root root    29 Mar 10 04:01 file1
-rw-r--r-- 1 root root    30 Mar 10 04:01 file10
-rw-r--r-- 1 root root    30 Mar 10 04:01 file11
-rw-r--r-- 1 root root    30 Mar 10 04:01 file12
-rw-r--r-- 1 root root    30 Mar 10 04:01 file13
...
```

:bangbang: After deleteing the pod the `pvc` also disappears 

# References

https://github.com/openebs/openebs-docs/issues/900

https://blog.mayadata.io/encrypted-volumes-using-luks

https://www.svennd.be/mount-unknown-filesystem-type-zfs_member/
