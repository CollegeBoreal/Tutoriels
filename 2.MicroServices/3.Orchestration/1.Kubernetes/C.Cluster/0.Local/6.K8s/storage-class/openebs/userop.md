# openebs StorageClass


## :b: User Operations

### :exclamation: Python Example

```yaml
$ kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cstor-python-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 200Mi
  # Storage Class can be omitted when default storage is set
  # storageClassName: openebs-sc-statefulset
EOF
```

* Observe the PVC

```
$ kubectl get persistentvolumeclaims 
NAME               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS             AGE
cstor-python-pvc   Bound    pvc-793b127d-6809-400e-9128-6407fe13372d   200Mi      RWO            openebs-sc-statefulset   24s
```

* Observe the PV

```
$ kubectl get persistentvolumes     
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                      STORAGECLASS             REASON   AGE
pvc-793b127d-6809-400e-9128-6407fe13372d   200Mi      RWO            Delete           Bound    default/cstor-python-pvc   openebs-sc-statefulset            86s
```

* cStor specific objects

- Volumes

```
$ kubectl get cstorvolumes -n openebs
NAME                                       STATUS    AGE    CAPACITY
pvc-793b127d-6809-400e-9128-6407fe13372d   Healthy   139m   200Mi
```

- Volume Replicas

```
$ kubectl get cstorvolumereplicas -n openebs
NAME                                                            USED    ALLOCATED   STATUS    AGE
pvc-793b127d-6809-400e-9128-6407fe13372d-cstor-disk-pool-3oqs   1.01M   27.5K       Healthy   137m
pvc-793b127d-6809-400e-9128-6407fe13372d-cstor-disk-pool-thk6   1.21M   30K         Healthy   137m
pvc-793b127d-6809-400e-9128-6407fe13372d-cstor-disk-pool-yit1   1.21M   30K         Healthy   137m
```



```yaml
$ kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python-myapp
spec:
  selector:
    matchLabels:
      app: python-myapp
  template:
    metadata:
      labels:
        app: python-myapp
    spec:
      containers:
      - image: collegeboreal/file1250:v1
        name: python-myapp-container
        imagePullPolicy: Always
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        volumeMounts:
        - mountPath: /workspace/apps/
          name: cstor-volume
      volumes:
      - name: cstor-volume
        persistentVolumeClaim:
          claimName: cstor-python-pvc
EOF
```

## :o: Analysis

:round_pushpin: On which node is the PVC running?

* pull the PVC pod

```
% kubectl get pods -n openebs | grep pvc
pvc-793b127d-6809-400e-9128-6407fe13372d-target-77f46b78f5cl6tb   3/3     Running   0          26m
``` 

* Describe the pod's node information

``` 
$ kubectl describe pods pvc-793b127d-6809-400e-9128-6407fe13372d-target-77f46b78f5cl6tb -n openebs | grep Node:
Node:         rigel/10.13.15.202
``` 

* Get the PVC log

- needs a container

```
% kubectl logs -f pvc-793b127d-6809-400e-9128-6407fe13372d-target-77f46b78f5cl6tb -n openebs
error: a container name must be specified for pod pvc-793b127d-6809-400e-9128-6407fe13372d-target-77f46b78f5cl6tb, choose one of: [cstor-istgt maya-volume-exporter cstor-volume-mgmt]
```

- use the container

```
$ kubectl logs -f pvc-793b127d-6809-400e-9128-6407fe13372d-target-77f46b78f5cl6tb -n openebs -c cstor-volume-mgmt
```

```
$ kubectl logs -f  maya-apiserver-6999679866-v45vb -n openebs        
+ MAYA_API_SERVER_NETWORK=eth0
+ ip -4 addr show scope global dev eth0
+ grep inet
+ awk '{print $2}'
+ cut -d / -f 1
+ CONTAINER_IP_ADDR=172.16.224.66
+ exec /usr/local/bin/maya-apiserver start '--bind=172.16.224.66'
I0314 12:14:32.698256       1 start.go:148] Initializing maya-apiserver...
I0314 12:14:32.807009       1 start.go:279] Starting maya api server ...
I0314 12:14:33.576952       1 start.go:288] resources applied successfully by installer
I0314 12:14:33.607835       1 start.go:193] Maya api server configuration:
I0314 12:14:33.607856       1 start.go:195]          Log Level: INFO
I0314 12:14:33.607864       1 start.go:195]             Region: global (DC: dc1)
I0314 12:14:33.607871       1 start.go:195]            Version: 2.6.0-released
I0314 12:14:33.607877       1 start.go:201] 
I0314 12:14:33.607883       1 start.go:204] Maya api server started! Log data will stream in below:
I0314 12:14:33.614466       1 runner.go:37] Starting SPC controller
...
```

:star: to

```
$ sudo blkid /dev/ubuntu-vg/iscsi-lv
/dev/ubuntu-vg/iscsi-lv: LABEL="cstor-1bd817bc-bbde-4d84-8c1c-c4f55ad9cf25" UUID="15252276871413574648" UUID_SUB="15180849639404787565" TYPE="zfs_member"
```

```
$ lsblk /dev/sdb
NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb    8:16   0  200M  0 disk /var/lib/kubelet/pods/b49186fb-545a-43aa-afe3-e82949228129/volumes/kubernetes.io~iscsi/pvc-540d8067-33a2-4f2d-bc3b-d1712175db7b
``` 

```
$ kubectl get pods       
NAME                           READY   STATUS              RESTARTS   AGE
python-myapp-f968487f8-9cst4   0/1     ContainerCreating   0          46s
```

```
$ kubectl get pods                           
NAME                           READY   STATUS    RESTARTS   AGE
python-myapp-f968487f8-9cst4   1/1     Running   0          4m
```

```
$ kubectl logs -f python-myapp-f968487f8-9cst4
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
INFO:root:Printing fake logs
```


```
$ sudo lsblk /dev/sdb -o MOUNTPOINT
MOUNTPOINT
/var/lib/kubelet/pods/5e73b799-0ffa-4156-92ba-73340803cdc3/volumes/kubernetes.io~iscsi/pvc-793b127d-6809-400e-9128-6407fe13372d
```

```
$ sudo ls -l `sudo lsblk /dev/sdb -o MOUNTPOINT`
total 216
-rw-r--r-- 1 root root    29 Mar 10 04:01 file1
-rw-r--r-- 1 root root    30 Mar 10 04:01 file10
-rw-r--r-- 1 root root    30 Mar 10 04:01 file11
-rw-r--r-- 1 root root    30 Mar 10 04:01 file12
-rw-r--r-- 1 root root    30 Mar 10 04:01 file13
...
```

## :recycle: Replay the app

```
$ kubectl rollout restart deployment python-myapp                
deployment.apps/python-myapp restarted
```

## :x: Undeploy

```
$ kubectl delete deployments python-myapp
```

* Release the PVC (:warning: this can take time)

```
$ kubectl delete pvc cstor-python-pvc
persistentvolumeclaim "cstor-python-pvc" deleted
```

``` 
$ kubectl get pods -n openebs --watch                                                               
NAME                                                              READY   STATUS        RESTARTS   AGE
cstor-disk-pool-3oqs-5dc9878cb4-xf6zs                             3/3     Running       0          4h34m
...
openebs-snapshot-operator-5b8df5fffc-mw725                        2/2     Running       0          4h34m
pvc-5ea17dd0-1f3b-4b3e-be23-4b569851945d-target-56f6d65fc97bks2   3/3     Terminating   0          20m
``` 


:bangbang: After deleting the pod the `pvc` also disappears 

# References

https://github.com/openebs/openebs-docs/issues/900

https://blog.mayadata.io/encrypted-volumes-using-luks

https://www.svennd.be/mount-unknown-filesystem-type-zfs_member/

https://technology.amis.nl/platform/openebs-cstor-storage-engine-on-kvm/ (apply default SC)
