# Open EBS Installation


https://openebs.io

Used by `kubesphere`

<img src="images/1-config-sequence.svg" width="657" height="145"> </img>

## :a: Verify iSCSI services are configured

https://docs.openebs.io/docs/next/prerequisites.html#ubuntu

- [ ] Check presence of `iscsi` configuration file  

```
$ sudo cat /etc/iscsi/initiatorname.iscsi
```

:bulb: if `ìnitiator` file is not present, install

```
$ sudo apt-get update && sudo apt-get install open-iscsi
```

- [ ] Check `iscsid` Sercice is enabled

:warning: Printout below shows `disabled` 

```
$ systemctl status iscsid 
● iscsid.service - iSCSI initiator daemon (iscsid)
     Loaded: loaded (/lib/systemd/system/iscsid.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● iscsid.socket
       Docs: man:iscsid(8)
```

- [ ] Enable the `iscsid` Sercice

```
$ sudo systemctl enable --now iscsid
Synchronizing state of iscsid.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable iscsid
Created symlink /etc/systemd/system/sysinit.target.wants/iscsid.service → /lib/systemd/system/iscsid.service.
```

- [ ] Check back again

```
$ systemctl status iscsid 
● iscsid.service - iSCSI initiator daemon (iscsid)
     Loaded: loaded (/lib/systemd/system/iscsid.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2021-02-28 18:13:56 UTC; 8s ago
TriggeredBy: ● iscsid.socket
       Docs: man:iscsid(8)
    Process: 727335 ExecStartPre=/lib/open-iscsi/startup-checks.sh (code=exited, status=0/SUCCESS)
    Process: 727344 ExecStart=/sbin/iscsid (code=exited, status=0/SUCCESS)
   Main PID: 727346 (iscsid)
      Tasks: 2 (limit: 77183)
     Memory: 3.6M
     CGroup: /system.slice/iscsid.service
             ├─727345 /sbin/iscsid
             └─727346 /sbin/iscsid

Feb 28 18:13:56 orion systemd[1]: Starting iSCSI initiator daemon (iscsid)...
Feb 28 18:13:56 orion iscsid[727344]: iSCSI logger with pid=727345 started!
Feb 28 18:13:56 orion systemd[1]: iscsid.service: Failed to parse PID from file /run/iscsid.pid: Invalid argument
Feb 28 18:13:56 orion systemd[1]: Started iSCSI initiator daemon (iscsid).
Feb 28 18:13:57 orion iscsid[727345]: iSCSI daemon with pid=727346 started!
```


## :b: Install OpenEBS

:round_pushpin: [Set Cluster Admin User Context](https://docs.openebs.io/docs/next/installation.html#set-cluster-admin-user-context)

:warning: This is a must

<img src="images/kube-context.png" width="658" height="48"> </img>


:round_pushpin: [Install using kubectl](https://docs.openebs.io/docs/next/installation.html#installation-through-kubectl)

```
$ kubectl apply -f https://openebs.github.io/charts/openebs-operator.yaml
namespace/openebs created
serviceaccount/openebs-maya-operator created
clusterrole.rbac.authorization.k8s.io/openebs-maya-operator created
clusterrolebinding.rbac.authorization.k8s.io/openebs-maya-operator created
deployment.apps/maya-apiserver created
service/maya-apiserver-service created
deployment.apps/openebs-provisioner created
deployment.apps/openebs-snapshot-operator created
configmap/openebs-ndm-config created
daemonset.apps/openebs-ndm created
deployment.apps/openebs-ndm-operator created
deployment.apps/openebs-admission-server created
deployment.apps/openebs-localpv-provisioner created
```

## :ab: [Verifying OpenEBS Installation](https://docs.openebs.io/docs/next/installation.html#verifying-openebs-installation)

```
$ kubectl get pods --namespace openebs
NAME                                           READY   STATUS             RESTARTS   AGE
maya-apiserver-6999679866-t5xxz                0/1     CrashLoopBackOff   2          92s
openebs-admission-server-68cf7797d7-jhhm4      1/1     Running            0          92s
openebs-localpv-provisioner-7bc9cbbc9c-hlsxb   1/1     Running            0          92s
openebs-ndm-operator-575c46f9d8-m7rkb          1/1     Running            0          92s
openebs-ndm-x275n                              1/1     Running            0          92s
openebs-ndm-xkl58                              1/1     Running            0          92s
openebs-provisioner-7ff7958d7f-k27hz           1/1     Running            0          92s
openebs-snapshot-operator-5dbc4f69dc-4z427     2/2     Running            0          92s
```

`openebs-ndm` is a daemon set, it should be running on all nodes or on the nodes that are selected through nodeSelector configuration.

The control plane pods `openebs-provisioner`, `maya-apiserver` and `openebs-snapshot-operator` should be running.

```
$ kubectl get pods --namespace openebs --output wide
NAME                                           READY   STATUS    RESTARTS   AGE     IP               NODE    NOMINATED NODE   READINESS GATES
maya-apiserver-6999679866-t5xxz                1/1     Running   3          6m22s   172.16.183.133   ursa    <none>           <none>
openebs-admission-server-68cf7797d7-jhhm4      1/1     Running   0          6m22s   172.16.183.132   ursa    <none>           <none>
openebs-localpv-provisioner-7bc9cbbc9c-hlsxb   1/1     Running   0          6m22s   172.16.183.135   ursa    <none>           <none>
openebs-ndm-operator-575c46f9d8-m7rkb          1/1     Running   0          6m22s   172.16.183.136   ursa    <none>           <none>
openebs-ndm-x275n                              1/1     Running   0          6m22s   10.13.15.201     canis   <none>           <none>
openebs-ndm-xkl58                              1/1     Running   0          6m22s   10.13.15.202     ursa    <none>           <none>
openebs-provisioner-7ff7958d7f-k27hz           1/1     Running   0          6m22s   172.16.183.134   ursa    <none>           <none>
openebs-snapshot-operator-5dbc4f69dc-4z427     2/2     Running   0          6m22s   172.16.108.6     canis   <none>           <none>
```

:star: Verify `StorageClasses` 

```
$ kubectl get storageclass
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  15m
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  15m
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  15m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  15m
```

## :ab: Create the BlockDevice CR (Custom Resource)

- [ ] Check the `openebs-ndm-config` configmaps 

* list the `openebs` configmaps, we are more interested in the `ndm` configmaps

```
$ kubectl get configmaps  -n openebs
NAME                         DATA   AGE
node-disk-manager-lock       0      27h
openebs-cstor-csi-iscsiadm   1      3d17h
openebs-ndm-config           1      3d17h
```

* edit `openebs-ndm-config` configmaps to check its content (:x: do not save the configmap if changed)

```
$ kubectl get configmaps openebs-ndm-config -n openebs
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
openebs-ndm-jpm2x                                 1/1     Running   2          2d20h
openebs-ndm-jx64c                                 1/1     Running   4          2d20h
openebs-ndm-operator-575c46f9d8-cqlz2             1/1     Running   0          6h25m
openebs-ndm-sl7h7                                 1/1     Running   2          2d20h
...
```

- [ ] Let's pick a node

```
$ kubectl get  pod openebs-ndm-jx64c -n openebs --output jsonpath='{.status.hostIP}' && echo
10.13.15.201
```

- [ ] connect to the node and determine the LV information on that node (we know that `iscsi-lv` is the given LV)

```
$ sudo lvs
  LV        VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  docker-lv ubuntu-vg -wi-a-----  <36.20g                                                    
  iscsi-lv  ubuntu-vg -wi-a-----  100.00g                                                    
  ubuntu-lv ubuntu-vg -wi-ao---- <136.20g  
```

* let's display the `LV PATH` through `lvdisplay`

```
$ sudo lvdisplay ubuntu-vg/iscsi-lv
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/iscsi-lv
  LV Name                iscsi-lv
  VG Name                ubuntu-vg
  LV UUID                duyiFf-JKTq-n3yv-jskY-yMvc-qpLl-xbgdlJ
  LV Write Access        read/write
  LV Creation host, time ursa, 2021-03-08 19:15:05 +0000
  LV Status              available
  # open                 1
  LV Size                100.00 GiB
...
```

* finally, let's grab the `DEVLINKS` through `udevadm`

```
$ udevadm info --query property --name /dev/ubuntu-vg/iscsi-lv
DEVPATH=/devices/virtual/block/dm-1
DEVNAME=/dev/dm-1
DEVTYPE=disk
MAJOR=253
MINOR=1
SUBSYSTEM=block
USEC_INITIALIZED=9508058
DM_UDEV_DISABLE_LIBRARY_FALLBACK_FLAG=1
DM_UDEV_PRIMARY_SOURCE_FLAG=1
DM_UDEV_RULES=1
DM_UDEV_RULES_VSN=2
DM_ACTIVATION=1
DM_NAME=ubuntu--vg-iscsi--lv
DM_UUID=LVM-sriYwjhaKn73lSvWNqHEsraPHdoVkHV9duyiFfJKTqn3yvjskYyMvcqpLlxbgdlJ
DM_SUSPENDED=0
DM_VG_NAME=ubuntu-vg
DM_LV_NAME=iscsi-lv
ID_FS_UUID=9214d585-1b63-4bd4-a500-0f1a2c5f7af4
ID_FS_UUID_ENC=9214d585-1b63-4bd4-a500-0f1a2c5f7af4
ID_FS_VERSION=1.0
ID_FS_TYPE=ext4
ID_FS_USAGE=filesystem
DM_TABLE_STATE=LIVE
DM_STATE=ACTIVE
DEVLINKS=/dev/disk/by-uuid/9214d585-1b63-4bd4-a500-0f1a2c5f7af4 /dev/ubuntu-vg/iscsi-lv /dev/mapper/ubuntu--vg-iscsi--lv /dev/disk/by-id/dm-uuid-LVM-sriYwjhaKn73lSvWNqHEsraPHdoVkHV9duyiFfJKTqn3yvjskYyMvcqpLlxbgdlJ /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
TAGS=:systemd:
```



:round_pushpin: Let's prepare the Custom Resource

The block device name is by convention the `blockdevice`-UUID

```
$ kubectl apply -n openebs -f - <<EOF 
 apiVersion: openebs.io/v1alpha1
 kind: BlockDevice
 metadata:
   name: blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4
   labels:
     kubernetes.io/hostname: ursa
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
     - /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
   - kind: by-path
     links:
     - /dev/mapper/ubuntu--vg-iscsi--lv
   nodeAttributes:
     nodeName: ursa
   path: /dev/dm-1
---
 apiVersion: openebs.io/v1alpha1
 kind: BlockDevice
 metadata:
   name: blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e
   labels:
     kubernetes.io/hostname: canis
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
     - /dev/disk/by-id/dm-name-ubuntu--vg-iscsi--lv
   - kind: by-path
     links:
     - /dev/mapper/ubuntu--vg-iscsi--lv
   nodeAttributes:
     nodeName: canis
   path: /dev/dm-1
EOF
```

```
$ kubectl get blockdevice -n openebs                                                                           
NAME                                               NODENAME   SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e   canis      102687672   Unclaimed    Active   9s
```

```
$ kubectl logs -f openebs-ndm-jx64c -n openebs 
```


# References

https://blog.mayadata.io/openebs/creating-manual-blockdevice

https://medium.com/@dunefro/part-3-4-using-block-devices-for-kubernetes-volume-understanding-openebs-cstor-80ff6307ea29

https://thenewstack.io/how-openebs-brings-container-attached-storage-to-kubernetes/

https://github.com/openebs/openebs/issues/2286 (HA Quorum)

https://medium.com/volterra-io/kubernetes-storage-performance-comparison-v2-2020-updated-1c0b69f0dcf4
