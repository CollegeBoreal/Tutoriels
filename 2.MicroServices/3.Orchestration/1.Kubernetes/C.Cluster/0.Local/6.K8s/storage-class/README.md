# Storage Class

[CSI - Container Storage Interface](https://kubernetes-csi.github.io/docs)


```
$ kubectl get storageclass
```

## :b: Storage Class Engine

https://docs.openebs.io/docs/next/installation.%20html#selecting-the-right-storage-engine

| APPLICATION | REQUIREMENTS	| STORAGE TYPE	| OPENEBS VOLUMES |
|-------------|---------------|---------------|-----------------|
| Low Latency, High Availability, Synchronous replication, Snapshots, Clones, Thin provisioning	| SSDs/Cloud Volumes	| OpenEBS Mayastor 	| 
High Availability, Synchronous replication, Snapshots, Clones, Thin provisioning	Disks/SSDs/Cloud Volumes	OpenEBS cStor
High Availability, Synchronous replication, Thin provisioning	hostpath or external mounted storage	OpenEBS Jiva
Low latency, Local PV	hostpath or external mounted storage	Dynamic Local PV - Hostpath
Low latency, Local PV	Disks/SSDs/Cloud Volumes	Dynamic Local PV - Device
Low latency, Local PV, Snapshots, Clones	Disks/SSDs/Cloud Volumes	OpenEBS Dynamic Local PV - ZFS



# :ab: Storage Class Usage

| Vendor                                 |  Relational DB - MySQL                                | Cache - (In Memory DB)                          | Block Storage |
|----------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-----|
| [OpenEBS](https://docs.openebs.io)     | [MySQL](https://docs.openebs.io/docs/next/mysql.html) | [Redis](https://docs.openebs.io/docs/next/redis.html) | [Minio](https://docs.openebs.io/docs/next/minio.html)
| [AWS](https://aws.amazon.com)          | [RDS](https://aws.amazon.com/rds/) |
| Cloud AZ 
| Cloud GCP 
| OVH 
| Digital Ocean |







