

https://docs.openebs.io/docs/next/ugcstor.html#creating-cStor-storage-pools

```
% kubectl get blockdevice -n openebs
NAME                                               NODENAME   SIZE        CLAIMSTATE   STATUS   AGE
blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4   ursa       102687672   Unclaimed    Active   75m
blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e   canis      102687672   Unclaimed    Active   19h
```

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
    - blockdevice-9214d585-1b63-4bd4-a500-0f1a2c5f7af4
    - blockdevice-e69f6903-176b-4034-aaf8-40d5f09e577e
---
EOF
```

```
$ kubectl get spc
NAME              AGE
cstor-disk-pool   3m45s
```

```yaml
$ kubectl apply -f - <<EOF
apiVersion: openebs.io/v1alpha1
kind: StoragePoolClaim
metadata:
  name: cstor-disk
  annotations:
    cas.openebs.io/config: |
      - name: PoolResourceLimits
        value: |-
            memory: 4Gi
spec:
  name: cstor-disk
  type: disk
EOF
```
