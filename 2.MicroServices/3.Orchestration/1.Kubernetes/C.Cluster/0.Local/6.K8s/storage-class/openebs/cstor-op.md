# cstor operations


- [ ] Get all `cstor` operations 

```
$ kubectl get cstor
cstorbackups.openebs.io           cstorpools.openebs.io             cstorvolumepolicies.openebs.io
cstorcompletedbackups.openebs.io  cstorrestores.openebs.io          cstorvolumereplicas.openebs.io
cstorpoolinstances.openebs.io     cstorvolumeclaims.openebs.io      cstorvolumes.openebs.io
```

- [ ] `cstor` pool `cstorpools.openebs.io ` or `csp` 

:x: `PoolCreationFailed` Error occurs

```
$ kubectl get csp
NAME                   ALLOCATED   FREE   CAPACITY   STATUS               READONLY   TYPE      AGE
cstor-disk-pool-2gpl                                 PoolCreationFailed   false      striped   15h
cstor-disk-pool-4mwz                                 PoolCreationFailed   false      striped   15h
cstor-disk-pool-fv5a                                 PoolCreationFailed   false      striped   15h
```

- [ ] Get the `cstor` pods 

```
$ kubectl get pods --namespace openebs
NAME                                         READY   STATUS      RESTARTS   AGE
cstor-disk-pool-2gpl-765fff776c-bcwpz        3/3     Running     242        16h
cstor-disk-pool-4mwz-6ff7454d76-hllml        3/3     Running     242        16h
cstor-disk-pool-fv5a-c8c5d769b-6zdmg         3/3     Running     242        16h
openebs-admission-server-7d5747544d-tf4d5    1/1     Running     0          18h
openebs-apiserver-989fc9d6d-szbtl            1/1     Running     3          18h
openebs-localpv-provisioner-96574448-dndtm   1/1     Running     0          18h
openebs-ndm-5rrkt                            1/1     Running     0          18h
openebs-ndm-bvzph                            1/1     Running     0          18h
openebs-ndm-g4bc5                            1/1     Running     0          18h
openebs-ndm-operator-54c666d48f-65hj9        1/1     Running     0          18h
openebs-provisioner-5dfb8bc756-jrvjz         1/1     Running     0          18h
openebs-snapshot-operator-56bb984746-vfnl4   2/2     Running     0          18h
openebs-webhook-cleanup-rszlz                0/1     Completed   0          18h
```

- [ ] Examine one of the `cstor-disk-pool`

```
$ POD=cstor-disk-pool-2gpl-765fff776c-bcwpz; CONTAINER=cstor-pool-mgmt; \ 
  kubectl logs --namespace openebs $POD --container $CONTAINER 
...
I0327 18:44:57.408071       7 event.go:282] Event(v1.ObjectReference{Kind:"CStorPool", Namespace:"", Name:"cstor-disk-pool-2gpl", UID:"69d2777f-ecb1-4ee8-b0b4-e413bd2f8925", APIVersion:"openebs.io/v1alpha1", ResourceVersion:"925405", FieldPath:""}): type: 'Warning' reason: 'FailCreate' Pool creation failed zpool create command failed error: invalid vdev specification
use '-f' to override the following errors:
/dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3 is part of potentially active pool 'cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97'
: exit status 1
I0327 18:44:57.414319       7 handler.go:148] cStorPool:cstor-disk-pool-2gpl, 69d2777f-ecb1-4ee8-b0b4-e413bd2f8925; Status: PoolCreationFailed
...
```

- [ ] Get onto the container

```
$ POD=cstor-disk-pool-2gpl-765fff776c-bcwpz; CONTAINER=cstor-pool-mgmt; \
  kubectl exec --stdin --tty  \
               --namespace openebs $POD --container  $CONTAINER \
               -- bash
root@cstor-disk-pool-2gpl-765fff776c-bcwpz:/# zpool import cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97
2021-03-27/18:48:24.594 Iterating over all the devices to find zfs devices using blkid
2021-03-27/18:48:24.604 Iterated over cache devices to find zfs devices
2021-03-27/18:48:24.606 Verifying pool existence on the device /dev/mapper/ubuntu--vg-iscsi--lv
2021-03-27/18:48:24.614 Verified the device /dev/mapper/ubuntu--vg-iscsi--lv for pool existence
2021-03-27/18:48:24.666 Verifying pool existence on the device /dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3
2021-03-27/18:48:24.668 Verified the device /dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3 for pool existence
```

```
root@cstor-disk-pool-2gpl-765fff776c-bcwpz:/# zpool status
  pool: cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97
 state: ONLINE
  scan: none requested
config:

	NAME                                                                            STATE     READ WRITE CKSUM
	cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97                                      ONLINE       0     0     0
	  dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssrdOs38ndKRjGqB4A4PKc893FS8heIdc3  ONLINE       0     0     0

errors: No known data errors
```

```
root@cstor-disk-pool-2gpl-765fff776c-bcwpz:/# zfs list
NAME                                                                                  USED  AVAIL  REFER  MOUNTPOINT
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97                                            757M  95.7G   512B  /cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-1909ab66-bb25-48f1-b9dc-da64f471fb09   347M  95.7G   347M  -
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-65b267b2-b137-4658-a290-578fd0450ebc   248K  95.7G   248K  -
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-9e01f4f8-df23-4e6a-bc7c-b4722edc4a08   376M  95.7G   376M  -
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-da301965-a89e-4898-a3d8-031fdba5e412   151K  95.7G   151K  -
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-e06ba33f-12d0-459a-b22b-430a8e87d86a  20.5M  95.7G  20.5M  -
cstor-7ad627fb-2433-4eb9-9b62-1c1c2a580f97/pvc-e1d0c8ab-139e-40cf-a449-ae5508f1d65b   160K  95.7G   160K  -
```
