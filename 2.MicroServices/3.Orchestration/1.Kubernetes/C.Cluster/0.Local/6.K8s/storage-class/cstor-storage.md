

https://docs.openebs.io/docs/next/ugcstor.html#creating-cStor-storage-pools

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
    - blockdevice-1c10eb1bb14c94f02a00373f2fa09b93
    - blockdevice-77f834edba45b03318d9de5b79af0734
    - blockdevice-936911c5c9b0218ed59e64009cc83c8f
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
