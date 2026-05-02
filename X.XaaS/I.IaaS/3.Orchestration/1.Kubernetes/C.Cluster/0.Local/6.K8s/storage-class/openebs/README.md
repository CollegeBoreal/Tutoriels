# OpenEBS

https://openebs.io

Used by `kubesphere`

<img src="../images/1-config-sequence.svg" width="657" height="145"> </img>

## :gear: Prerequisites

[Install](install.md):pinching_hand: the [openEBS](https://openebs.io) [CSI](https://kubernetes-csi.github.io/docs/) [Driver](https://kubernetes-csi.github.io/docs/drivers.html) along with the [iSCSI](https://en.wikipedia.org/wiki/ISCSI) [SAN](https://en.wikipedia.org/wiki/Storage_area_network) implementation 

## :a: Admin Operations

For using [cStor](https://docs.openebs.io/docs/next/cstor.html) as the CSI compliant Storage Engine, provide with some [admin operations](adminop.md):pinching_hand:

## :b: User Operations

For testing the Storage with [cStor](https://docs.openebs.io/docs/next/cstor.html), provide with some [user operations](userop.md):pinching_hand:

## cStor 


``` 
% kubectl get pods -n openebs                               
NAME                                           READY   STATUS    RESTARTS   AGE
cstor-disk-pool-3oqs-5dc9878cb4-xf6zs          3/3     Running   0          18h
cstor-disk-pool-thk6-6c6c8dc6f7-7bjfb          3/3     Running   0          21h
cstor-disk-pool-yit1-6b96598485-m85cx          3/3     Running   0          21h
...
``` 
``` 
$ kubectl exec --stdin --tty  cstor-disk-pool-3oqs-5dc9878cb4-xf6zs -n openebs -- bash
Defaulting container name to cstor-pool.
Use 'kubectl describe pod/cstor-disk-pool-3oqs-5dc9878cb4-xf6zs -n openebs' to see all of the containers in this pod.
``` 

``` 
root@cstor-disk-pool-3oqs-5dc9878cb4-xf6zs:/# lsblk -f /dev/sda?
NAME                    FSTYPE      LABEL                                      UUID                                   MOUNTPOINT
sda1                                                                                                                  
sda2                    ext4                                                   da420220-48cc-4a27-a53f-92e31bbac806   
sda3                    LVM2_member                                            xe2Kkf-22cm-OIIK-HXGB-nHGM-DcDc-0F5PWX 
|-ubuntu--vg-ubuntu--lv ext4                                                   0b3fec99-1166-4022-8bfa-d0651bd294aa   /var/openeb
|-ubuntu--vg-iscsi--lv  zfs_member  cstor-1bd817bc-bbde-4d84-8c1c-c4f55ad9cf25 15252276871413574648                   
`-ubuntu--vg-docker--lv                  
```

```
root@cstor-disk-pool-3oqs-5dc9878cb4-xf6zs:/# zfs list
NAME                                         USED  AVAIL  REFER  MOUNTPOINT
cstor-1bd817bc-bbde-4d84-8c1c-c4f55ad9cf25   950K  96.4G   512B  /cstor-1bd817bc-bbde-4d84-8c1c-c4f55ad9cf25
```


# References

https://openebs.io/blog/openebs-dynamic-volume-provisioning-on-zfs/

https://forums.freebsd.org/threads/how-to-mount-a-zfs-partition.61112/

https://kubera-docs.mayadatastaging.io/en/free-pro-team@latest/kubera-enterprise/quickstart
