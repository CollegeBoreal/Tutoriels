# cstor operations


- [ ] Get all `cstor` operations 

```
$ kubectl get cstor
cstorbackups.openebs.io           cstorpools.openebs.io             cstorvolumepolicies.openebs.io
cstorcompletedbackups.openebs.io  cstorrestores.openebs.io          cstorvolumereplicas.openebs.io
cstorpoolinstances.openebs.io     cstorvolumeclaims.openebs.io      cstorvolumes.openebs.io
```

- [ ] `cstor` pool `cstorpools.openebs.io ` or `csp` 

```
$ kubectl get csp
NAME                   ALLOCATED   FREE   CAPACITY   STATUS               READONLY   TYPE      AGE
cstor-disk-pool-2gpl                                 PoolCreationFailed   false      striped   15h
cstor-disk-pool-4mwz                                 PoolCreationFailed   false      striped   15h
cstor-disk-pool-fv5a                                 PoolCreationFailed   false      striped   15h
```

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

```
$ POD=cstor-disk-pool-2gpl-765fff776c-bcwpz; CONTAINER=cstor-pool-mgmt; \
  kubectl exec --stdin --tty  \
               --namespace openebs $POD --container  $CONTAINER \
               -- bash
```

```
$ POD=cstor-disk-pool-2gpl-765fff776c-bcwpz; CONTAINER=cstor-pool-mgmt; \ 
  kubectl logs --namespace openebs $POD --container $CONTAINER 
```
