# Volumes

## Storage Class

https://kubernetes.io/docs/concepts/storage/storage-classes/

```
$ kubectl get nodes
NAME    STATUS   ROLES                  AGE   VERSION
orion   Ready    control-plane,master   17h   v1.20.2
ursa    Ready    <none>                 16h   v1.20.2
```

connect to the single node on your cluster

```
$ ssh -i ~/.ssh/my-private.key ubuntu@ursa
```

In your shell on that Node, create a /mnt/data directory:

```
$ sudo mkdir /mnt/data
```

In the `/mnt/data` directory, create an `index.html` file:

```
$ sudo sh -c "echo 'Hello from Kubernetes storage' > /mnt/data/index.html"
```

- [ ] Here is the configuration file for the hostPath PersistentVolume:

```yaml
pods/storage/pv-volume.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: task-pv-volume
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
```

- [ ] Create the PersistentVolume:

```
$ kubectl apply -f pv-volume.yaml
```

- [ ] View information about the PersistentVolume:

:bulb: Note the `Available` status and the `empty` claim

```
% kubectl get pv task-pv-volume   
NAME             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
task-pv-volume   10Gi       RWO            Retain           Available           manual                  5s
```

- [ ] Here is the configuration file for the PersistentVolumeClaim:

```yaml
pods/storage/pv-claim.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: task-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
```

- [ ] Create the PersistentVolumeClaim:

```
$ kubectl apply -f pv-claim.yaml
```

:bulb: Note the `Bound` status and the `default/task-pv-claim` claim

```
$ kubectl get pv task-pv-volume   
NAME             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                   STORAGECLASS   REASON   AGE
task-pv-volume   10Gi       RWO            Retain           Bound    default/task-pv-claim   manual                  3m9s
```

```
$ kubectl get pvc task-pv-claim
NAME            STATUS   VOLUME           CAPACITY   ACCESS MODES   STORAGECLASS   AGE
task-pv-claim   Bound    task-pv-volume   10Gi       RWO            manual         3m54s
```
