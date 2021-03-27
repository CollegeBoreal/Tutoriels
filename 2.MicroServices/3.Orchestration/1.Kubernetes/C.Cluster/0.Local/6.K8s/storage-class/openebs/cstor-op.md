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
$ kubectl exec --stdin --tty  cstor-disk-pool-2gpl-765fff776c-bcwpz --namespace openebs \
                              --container cstor-pool-mgmt -- \
                              bash
```
