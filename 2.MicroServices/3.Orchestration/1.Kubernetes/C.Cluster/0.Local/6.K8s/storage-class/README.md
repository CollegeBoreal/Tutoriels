# Storage Class

[CSI - Container Storage Interface](https://kubernetes-csi.github.io/docs)


```
$ kubectl get storageclass
```

## :b: Storage Class Engine

https://docs.openebs.io/docs/next/installation.%20html#selecting-the-right-storage-engine

:round_pushpin: [High Availablity](https://docs.openebs.io/docs/next/installation.%20html#replicated-volumes-aka-highly-available-volumes)

| APPLICATION REQUIREMENTS	  | STORAGE TYPE	| OPENEBS VOLUMES |
|-----------------------------|---------------|-----------------|
| Low Latency, High Availability, Synchronous replication, Snapshots, Clones, Thin provisioning	| SSDs/Cloud Volumes	| OpenEBS Mayastor 	| 
| High Availability, Synchronous replication, Snapshots, Clones, Thin provisioning | Disks/SSDs/Cloud Volumes | OpenEBS cStor |
| High Availability, Synchronous replication, Thin provisioning | hostpath or external mounted storage | OpenEBS Jiva | 
| Low latency, Local PV	                    | hostpath or external mounted storage	| [Dynamic Local PV - Hostpath](https://docs.openebs.io/docs/next/uglocalpv-hostpath.html) |
| Low latency, Local PV	                    | Disks/SSDs/Cloud Volumes | [Dynamic Local PV - Device](https://docs.openebs.io/docs/next/uglocalpv-device.html) |
| Low latency, Local PV, Snapshots, Clones	| Disks/SSDs/Cloud Volumes | [OpenEBS Dynamic Local PV - ZFS](https://github.com/openebs/zfs-localpv) |



# :ab: Storage Class Usage

| Vendor                                 |  Relational DB - MySQL                                | Cache - (In Memory DB)                          | Block Storage |
|----------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-----|
| [OpenEBS](https://docs.openebs.io)     | [MySQL](https://docs.openebs.io/docs/next/mysql.html) | [Redis](https://docs.openebs.io/docs/next/redis.html) | [Minio](https://docs.openebs.io/docs/next/minio.html)
| [AWS](https://aws.amazon.com)          | [RDS](https://aws.amazon.com/rds/) |
| Cloud AZ 
| Cloud GCP 
| OVH 
| Digital Ocean |







