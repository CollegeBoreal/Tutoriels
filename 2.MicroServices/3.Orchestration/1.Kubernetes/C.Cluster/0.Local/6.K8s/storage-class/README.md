# Storage Class



```
$ kubectl get storageclass
```

[CSI - Container Storage Interface](https://kubernetes-csi.github.io/docs)

The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) like Kubernetes. Using CSI third-party storage providers can write and deploy plugins exposing new storage systems in Kubernetes without ever having to touch the core Kubernetes code.


[CSI - Drivers](https://kubernetes-csi.github.io/docs/drivers.html)



## :b: Storage Class Engine


### :star: [Types](https://docs.openebs.io/docs/next/installation.%20html#types-of-openebs-storage-engines)

#### :round_pushpin: [Local Volumes](https://docs.openebs.io/docs/next/installation.%20html#local-volumes)

Local Volumes are accessible only from a single node in the cluster. Pods using Local Volume have to be scheduled on the node where volume is provisioned. Local Volumes are typically preferred for distributed workloads like Cassandra, MongoDB, Elastic, etc that are **distributed in nature and have high availability built into them**.

Depending on the type of storage attached to your Kubernetes worker nodes, you can select from different flavors of `Dynamic Local PV` - `Hostpath`, `Device`, `ZFS` or `Rawfile`.

#### :round_pushpin: [Replicated Volumes](https://docs.openebs.io/docs/next/installation.%20html#replicated-volumes-aka-highly-available-volumes)

Replicated Volumes also are capable of enterprise storage features like snapshots, clone, volume expansion and so forth. **Replicated Volumes are a preferred choice for Stateful workloads like [Percona/MySQL](https://www.percona.com/software/mysql-database), Jira, GitLab, etc**.

Depending on the type of storage attached to your Kubernetes worker nodes and application performance requirements, you can select from [`Jiva`](https://docs.openebs.io/docs/next/jiva.html), [`cStor`](https://docs.openebs.io/docs/next/cstor.html) **:tada:** or [`Mayastor`](https://mayastor.gitbook.io) **:new:**.

### :star: [Selection:](https://docs.openebs.io/docs/next/installation.%20html#selecting-the-right-storage-engine)


| APPLICATION REQUIREMENTS	  | STORAGE TYPE	| OPENEBS VOLUMES |
|-----------------------------|---------------|-----------------|
| Low Latency, High Availability, [Synchronous replication](#round_pushpin-replicated-volumes), Snapshots, Clones, Thin provisioning	| SSDs/Cloud Volumes	| OpenEBS Mayastor 	| 
| High Availability, [Synchronous replication](#round_pushpin-replicated-volumes), Snapshots, Clones, Thin provisioning | Disks/SSDs/Cloud Volumes | OpenEBS cStor |
| High Availability, [Synchronous replication](#round_pushpin-replicated-volumes), Thin provisioning | hostpath or external mounted storage | OpenEBS Jiva | 
| Low latency, [Local PV](#round_pushpin-local-volumes)	                    | hostpath or external mounted storage	| [Dynamic Local PV - Hostpath](https://docs.openebs.io/docs/next/uglocalpv-hostpath.html) |
| Low latency, [Local PV](#round_pushpin-local-volumes)                    | Disks/SSDs/Cloud Volumes | [Dynamic Local PV - Device](https://docs.openebs.io/docs/next/uglocalpv-device.html) |
| Low latency, [Local PV](#round_pushpin-local-volumes), Snapshots, Clones	| Disks/SSDs/Cloud Volumes | [OpenEBS Dynamic Local PV - ZFS](https://github.com/openebs/zfs-localpv) |



# :ab: Storage Class Usage

| Vendor                                 |  Relational DB - MySQL                                | Cache - (In Memory DB)                          | Block Storage |
|----------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-----|
| [OpenEBS](https://docs.openebs.io)     | [MySQL](https://docs.openebs.io/docs/next/mysql.html) | [Redis](https://docs.openebs.io/docs/next/redis.html) | [Minio](https://docs.openebs.io/docs/next/minio.html)
| [AWS](https://aws.amazon.com)          | [RDS](https://aws.amazon.com/rds/) |
| Cloud AZ 
| Cloud GCP 
| OVH 
| Digital Ocean |







