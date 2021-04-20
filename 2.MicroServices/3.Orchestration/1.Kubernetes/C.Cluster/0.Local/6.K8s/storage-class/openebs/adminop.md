# Admin Operations

https://docs.openebs.io/docs/next/ugcstor.html#admin-operations

## :a: Create the BlockDevice CR (Custom Resource)

- [ ] Check the `openebs-ndm-config` configmaps 

* list the `openebs` configmaps, we are more interested in the `ndm` configmaps

```
$ kubectl get configmaps  -n openebs
NAME                         DATA   AGE
node-disk-manager-lock       0      27h
openebs-cstor-csi-iscsiadm   1      3d17h
openebs-ndm-config           1      3d17h
```

:warning: `openebs-cstor-csi-iscsiadm` config map is missing when using helm

```
$ kubectl get configmaps  --namespace openebs
NAME                     DATA   AGE
node-disk-manager-lock   0      6m27s
openebs-ndm-config       1      6m38s
```


* edit `openebs-ndm-config` configmaps to check its content (:x: do not save the configmap if changed)

```
$ kubectl edit configmaps openebs-ndm-config -n openebs
...
data:
  node-disk-manager.config: |
    ...
    filterconfigs:
      ...
      - key: path-filter
        name: path filter
        state: true
        include: ""
        exclude: "/dev/loop,/dev/fd0,/dev/sr0,/dev/ram,/dev/dm-,/dev/md,/dev/rbd,/dev/zd"
```

As you can see Logical Volumes `/dev/dm-` (and others) are excluded by default. A CR (Custom Resource) will be created

:round_pushpin: Let's creat a block device per `node`

- [ ] Let's list the nodes

```
$ kubectl get pods --namespace openebs
NAME                                              READY   STATUS    RESTARTS   AGE
...
openebs-ndm-48k4j                              1/1     Running   0          31m
openebs-ndm-kphxn                              1/1     Running   0          31m
openebs-ndm-lzwj4                              1/1     Running   0          31m
openebs-ndm-operator-785c656646-2hlfm          1/1     Running   0          31m
...
```

- [ ] Let's pick a node as a configuration example

```
$ kubectl get  pod openebs-ndm-lzwj4 -n openebs --output jsonpath='{.spec.nodeName}@{.status.hostIP}' && echo
rigel@10.13.15.202
```

- [ ] connect to the node and determine the LV information on that node (we know that `iscsi-lv` is the given LV)

```
$ sudo lvs --options +devices
  LV        VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log (...) Devices         
  docker-lv ubuntu-vg -wi-a-----  <36.20g                                          /dev/sda3(60467)
  iscsi-lv  ubuntu-vg -wi-a-----  100.00g                                          /dev/sda3(34867)
  ubuntu-lv ubuntu-vg -wi-ao---- <136.20g                                          /dev/sda3(0)    
```

* let's determine the `LV PATH` using the more detailled `lvdisplay` command by passing the `VG/LV`

```
$ sudo lvdisplay ubuntu-vg/iscsi-lv
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/iscsi-lv
  LV Name                iscsi-lv
  VG Name                ubuntu-vg
  LV UUID                rdOs38-ndKR-jGqB-4A4P-Kc89-3FS8-heIdc3
  LV Write Access        read/write
  LV Creation host, time bellatrix, 2021-03-14 17:28:42 +0000
  LV Status              available
  # open                 0
  LV Size                100.00 GiB
  Current LE             25600
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:1
```

* finally, let's grab the `DEVLINKS` through `udevadm` using the found `LV Path`

```
$ udevadm info --query property --name /dev/ubuntu-vg/iscsi-lv
DEVPATH=/devices/virtual/block/dm-1
DEVNAME=/dev/dm-1
DEVTYPE=disk
MAJOR=253
MINOR=1
SUBSYSTEM=block
USEC_INITIALIZED=61132596734
DM_UDEV_DISABLE_LIBRARY_FALLBACK_FLAG=1
DM_UDEV_PRIMARY_SOURCE_FLAG=1
DM_UDEV_RULES=1
DM_UDEV_RULES_VSN=2
DM_NAME=ubuntu--vg-iscsi--lv
DM_UUID=LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3
DM_SUSPENDED=0
DM_VG_NAME=ubuntu-vg
DM_LV_NAME=iscsi-lv
DM_TABLE_STATE=LIVE
DM_STATE=ACTIVE
DEVLINKS=/dev/mapper/ubuntu--vg-iscsi--lv /dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3 /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv /dev/ubuntu-vg/iscsi-lv
TAGS=:systemd:
```

:round_pushpin: Let's prepare the Block Device Custom Resource `CR` for all the nodes

The block device name needs to be segregated by node, by convention the string `blockdevice`-`UUID` should be used.
Since dealing with a LV which will be formatted by `openebs`, let's use the Partition UUID of the disk `/dev/sda3` instead. `PARTUUID` can be taken from the below command.

```
$ echo "blockdevice-"`sudo blkid --match-tag PARTUUID --output value /dev/sda3`
blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03
```

:building_construction: The below file contains 3 node configurations separated by `---` 

| TAG | VALUE |
|-----|-------|
| `metadata.name:` | blockdevice-**PARTUUID** |
| `metadata.labels.kubernetes.io/hostname:` | hostname |
| `spec.devlinks.kind: by-id.links:`        | - DEVLINKS /dev/disk/**by-id** |
| `spec.devlinks.kind: by-path.links:`      | - DEVLINKS /dev/**mapper** |
| `spec.nodeAttributes.nodeName:`           | hostname |
| `spec.path:`                              | - DEVNAME |

```yaml
$ kubectl apply -n openebs -f - <<EOF 
 apiVersion: openebs.io/v1alpha1
 kind: BlockDevice
 metadata:
   name: blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03
   labels:
     kubernetes.io/hostname: bellatrix
     ndm.io/managed: "false"
     ndm.io/blockdevice-type: blockdevice
 status:
   claimState: Unclaimed
   state: Active
 spec:
   capacity:
     logicalSectorSize: 1024
     storage: 102687672
   details:
     deviceType: lvm
   devlinks:
   - kind: by-id
     links:
     - /dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3
     - /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
   - kind: by-path
     links:
     - /dev/mapper/ubuntu--vg-iscsi--lv
   nodeAttributes:
     nodeName: bellatrix
   path: /dev/dm-1
---
 apiVersion: openebs.io/v1alpha1
 kind: BlockDevice
 metadata:
   name: blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5
   labels:
     kubernetes.io/hostname: rigel
     ndm.io/managed: "false"
     ndm.io/blockdevice-type: blockdevice
 status:
   claimState: Unclaimed
   state: Active
 spec:
   capacity:
     logicalSectorSize: 1024
     storage: 102687672
   details:
     deviceType: lvm
   devlinks:
   - kind: by-id
     links:
     - /dev/disk/by-id/dm-uuid-LVM-sriYwjhaKn73lSvWNqHEsraPHdoVkHV9duyiFfJKTqn3yvjskYyMvcqpLlxbgdlJ
     - /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
   - kind: by-path
     links:
     - /dev/mapper/ubuntu--vg-iscsi--lv
   nodeAttributes:
     nodeName: rigel
   path: /dev/dm-1
---
 apiVersion: openebs.io/v1alpha1
 kind: BlockDevice
 metadata:
   name: blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1
   labels:
     kubernetes.io/hostname: saiph
     ndm.io/managed: "false"
     ndm.io/blockdevice-type: blockdevice
 status:
   claimState: Unclaimed
   state: Active
 spec:
   capacity:
     logicalSectorSize: 1024
     storage: 102687672
   details:
     deviceType: lvm
   devlinks:
   - kind: by-id
     links:
     - /dev/disk/by-id/dm-uuid-LVM-rezWQCWaDuFq4QzhcU4F3POBUQUJvJDMCYBBEPap5KcvpALZzh1BF1oXQ1QddcG1
     - /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
   - kind: by-path
     links:
     - /dev/mapper/ubuntu--vg-iscsi--lv
   nodeAttributes:
     nodeName: saiph
   path: /dev/dm-1
EOF
```

* Check the block device results

> blockdevices or bd

```
% kubectl get blockdevices --namespace openebs   
NAME                                               NODENAME    SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03   bellatrix   102687672   Unclaimed    Active   15s
blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1   saiph       102687672   Unclaimed    Active   15s
blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5   rigel       102687672   Unclaimed    Active   15s
```

## :b: Storage Pool

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
> blockdeviceclaims or bdc

```
$ kubectl get blockdeviceclaims.openebs.io --namespace openebs
NAME                                       BLOCKDEVICENAME                                    PHASE   AGE
bdc-0fcbd750-d9bc-484c-bc4b-d3b800bf5425   blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1   Bound   17h
bdc-562edaf1-6aef-485b-b83f-a7ddd73efcd3   blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03   Bound   17h
bdc-a68503ba-9882-459d-9e36-da24c54e1977   blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5   Bound   17h
```

* and if looking at the logs can be a good start (i.e a pod per node)

```
$ kubectl logs -f  openebs-ndm-48k4j -n openebs
```

:round_pushpin: Observe the `StoragePoolClaim`

```
$ kubectl get spc
NAME              AGE
cstor-disk-pool   7s
```

:round_pushpin: Observe the cStor Storage Pool 

* It may take some time to `Init`

:bulb: Use the [cStor CLI](https://docs.openebs.io/docs/next/cstor.html#cstor-cli) to display the Storage Engine artifacts

```
$ kubectl get csp --watch
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-3oqs   83K         99.5G   99.5G      Healthy   false      striped   23s
cstor-disk-pool-thk6                                  Init      false      striped   23s
cstor-disk-pool-yit1   83K         99.5G   99.5G      Healthy   false      striped   23s
```

* It may take some time to `ALLOCATE` (i.e. 83K)

```
$ kubectl get csp --watch           
NAME                   ALLOCATED   FREE    CAPACITY   STATUS    READONLY   TYPE      AGE
cstor-disk-pool-3oqs   665K        99.5G   99.5G      Healthy   false      striped   95s
cstor-disk-pool-thk6   83K         99.5G   99.5G      Healthy   false      striped   95s
cstor-disk-pool-yit1   662K        99.5G   99.5G      Healthy   false      striped   95s
```

* Finally

```
$ kubectl get csp --watch
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

## :ab: [Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/)

- [ ] Create the `standard` **Storage Class**

```yaml
$ kubectl apply -f - <<EOF
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: standard
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

- [ ] Check 

```
$ kubectl get storageclass standard
NAME       PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
standard   openebs.io/provisioner-iscsi   Delete          Immediate           false                  74s
```

- [ ] Set to be the default storage

```
$ kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

- [ ] check default storage

```
$ kubectl get sc          
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  20h
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  20h
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  20h
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  20h
standard (default)          openebs.io/provisioner-iscsi                               Delete          Immediate              false                  48s
```

# References

https://technology.amis.nl/platform/openebs-cstor-storage-engine-on-kvm/


