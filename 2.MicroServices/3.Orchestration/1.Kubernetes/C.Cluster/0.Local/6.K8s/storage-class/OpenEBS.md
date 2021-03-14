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

:round_pushpin: [Install using helm](https://docs.openebs.io/docs/next/installation.html#installation-through-helm)

```
$ helm repo add openebs https://openebs.github.io/charts
```

```
$ helm repo update
```

```
$ helm install --namespace openebs openebs openebs/openebs
"openebs" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "openebs" chart repository
Update Complete. ⎈Happy Helming!⎈
NAME: openebs
LAST DEPLOYED: Sun Mar 14 07:45:49 2021
NAMESPACE: openebs
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The OpenEBS has been installed. Check its status by running:
$ kubectl get pods -n openebs

For dynamically creating OpenEBS Volumes, you can either create a new StorageClass or
use one of the default storage classes provided by OpenEBS.

Use `kubectl get sc` to see the list of installed OpenEBS StorageClasses. A sample
PVC spec using `openebs-jiva-default` StorageClass is given below:"

---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: demo-vol-claim
spec:
  storageClassName: openebs-jiva-default
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5G
---

Please note that, OpenEBS uses iSCSI for connecting applications with the
OpenEBS Volumes and your nodes should have the iSCSI initiator installed.

For more information, visit our Slack at https://openebs.io/community or view the documentation online at http://docs.openebs.io/.
```

- [ ] Test

``` 
$ helm ls --namespace openebs
NAME   	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART        APP VERSION
openebs	openebs  	1       	2021-03-14 07:45:49.558546 -0400 EDT	deployed	openebs-2.6.02.6.0      
``` 


## :ab: [Verifying OpenEBS Installation](https://docs.openebs.io/docs/next/installation.html#verifying-openebs-installation)

```
$ kubectl get pods --namespace openebs
NAME                                           READY   STATUS    RESTARTS   AGE
openebs-admission-server-577f797f64-cwr4w      1/1     Running   0          4m
openebs-apiserver-5579d8877f-cvsdt             1/1     Running   2          4m
openebs-localpv-provisioner-676fd8ccff-pdwfg   1/1     Running   0          4m
openebs-ndm-48k4j                              1/1     Running   0          4m
openebs-ndm-kphxn                              1/1     Running   0          4m
openebs-ndm-lzwj4                              1/1     Running   0          4m
openebs-ndm-operator-785c656646-2hlfm          1/1     Running   0          4m
openebs-provisioner-6d879c54bb-2684z           1/1     Running   0          4m
openebs-snapshot-operator-5b8df5fffc-rbr2x     2/2     Running   0          4m
```

`openebs-ndm` is a daemon set, it should be running on all nodes or on the nodes that are selected through nodeSelector configuration.

The control plane pods `openebs-provisioner`, `maya-apiserver` and `openebs-snapshot-operator` should be running.

```
$ kubectl get pods --namespace openebs --output wide
NAME                                           READY   STATUS    RESTARTS   AGE     IP              NODE        NOMINATED NODE   READINESS GATES
openebs-admission-server-577f797f64-cwr4w      1/1     Running   0          4m37s   172.16.224.65   bellatrix   <none>           <none>
openebs-apiserver-5579d8877f-cvsdt             1/1     Running   2          4m37s   172.16.185.67   rigel       <none>           <none>
openebs-localpv-provisioner-676fd8ccff-pdwfg   1/1     Running   0          4m37s   172.16.214.1    saiph       <none>           <none>
openebs-ndm-48k4j                              1/1     Running   0          4m37s   10.13.15.203    saiph       <none>           <none>
openebs-ndm-kphxn                              1/1     Running   0          4m37s   10.13.15.201    bellatrix   <none>           <none>
openebs-ndm-lzwj4                              1/1     Running   0          4m37s   10.13.15.202    rigel       <none>           <none>
openebs-ndm-operator-785c656646-2hlfm          1/1     Running   0          4m37s   172.16.185.66   rigel       <none>           <none>
openebs-provisioner-6d879c54bb-2684z           1/1     Running   0          4m37s   172.16.185.68   rigel       <none>           <none>
openebs-snapshot-operator-5b8df5fffc-rbr2x     2/2     Running   0          4m37s   172.16.185.65   rigel       <none>           <none>
```

:star: Verify `StorageClasses` 

```
$ kubectl get storageclass
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4m28s
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4m28s
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  4m28s
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  4m28s
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

```
% kubectl get blockdevice -n openebs   
NAME                                               NODENAME    SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-23e1292d-32f5-4528-8f7f-3abaee070a03   bellatrix   102687672   Unclaimed    Active   15s
blockdevice-3fa7d473-d0f1-4532-bcd4-a402241eeff1   saiph       102687672   Unclaimed    Active   15s
blockdevice-7e848c90-cca2-4ef4-9fdc-90cff05d5bb5   rigel       102687672   Unclaimed    Active   15s
```

* and if looking at the logs can be a good start (i.e a pod per node)

```
$ kubectl logs -f openebs-ndm-jx64c -n openebs 
```


# References

https://devopstales.github.io/home/k8s-install-openebs/

https://blog.mayadata.io/openebs/creating-manual-blockdevice

https://medium.com/@dunefro/part-3-4-using-block-devices-for-kubernetes-volume-understanding-openebs-cstor-80ff6307ea29

https://thenewstack.io/how-openebs-brings-container-attached-storage-to-kubernetes/

https://github.com/openebs/openebs/issues/2286 (HA Quorum)

https://medium.com/volterra-io/kubernetes-storage-performance-comparison-v2-2020-updated-1c0b69f0dcf4
