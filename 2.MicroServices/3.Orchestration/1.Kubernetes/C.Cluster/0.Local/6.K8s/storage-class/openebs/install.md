# Install

## :gear: Verify iSCSI services are configured

https://docs.openebs.io/docs/next/prerequisites.html#ubuntu

- [ ] Check presence of `iscsi` configuration file  

```
$ sudo cat /etc/iscsi/initiatorname.iscsi
```

:bulb: if `ìnitiator` file is not present, install

```
$ sudo apt-get update && sudo apt-get install open-iscsi
```

- [ ] Check `iscsid` Sercice is enabled

:warning: Printout below shows `disabled` 

```
$ systemctl status iscsid 
● iscsid.service - iSCSI initiator daemon (iscsid)
     Loaded: loaded (/lib/systemd/system/iscsid.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● iscsid.socket
       Docs: man:iscsid(8)
```

- [ ] Enable the `iscsid` Sercice

```
$ sudo systemctl enable --now iscsid
Synchronizing state of iscsid.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable iscsid
Created symlink /etc/systemd/system/sysinit.target.wants/iscsid.service → /lib/systemd/system/iscsid.service.
```

- [ ] Check back again

```
$ systemctl status iscsid 
● iscsid.service - iSCSI initiator daemon (iscsid)
     Loaded: loaded (/lib/systemd/system/iscsid.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2021-02-28 18:13:56 UTC; 8s ago
TriggeredBy: ● iscsid.socket
       Docs: man:iscsid(8)
    Process: 727335 ExecStartPre=/lib/open-iscsi/startup-checks.sh (code=exited, status=0/SUCCESS)
    Process: 727344 ExecStart=/sbin/iscsid (code=exited, status=0/SUCCESS)
   Main PID: 727346 (iscsid)
      Tasks: 2 (limit: 77183)
     Memory: 3.6M
     CGroup: /system.slice/iscsid.service
             ├─727345 /sbin/iscsid
             └─727346 /sbin/iscsid

Feb 28 18:13:56 orion systemd[1]: Starting iSCSI initiator daemon (iscsid)...
Feb 28 18:13:56 orion iscsid[727344]: iSCSI logger with pid=727345 started!
Feb 28 18:13:56 orion systemd[1]: iscsid.service: Failed to parse PID from file /run/iscsid.pid: Invalid argument
Feb 28 18:13:56 orion systemd[1]: Started iSCSI initiator daemon (iscsid).
Feb 28 18:13:57 orion iscsid[727345]: iSCSI daemon with pid=727346 started!
```


## :a: Install OpenEBS

:round_pushpin: [Set Cluster Admin User Context](https://docs.openebs.io/docs/next/installation.html#set-cluster-admin-user-context)

:warning: This is a must

<img src="../images/kube-context.png" width="658" height="48"> </img>


:round_pushpin: [Install using kubectl](https://docs.openebs.io/docs/next/installation.html#installation-through-kubectl)

```
$ kubectl apply -f https://openebs.github.io/charts/openebs-operator.yaml
namespace/openebs created
serviceaccount/openebs-maya-operator created
clusterrole.rbac.authorization.k8s.io/openebs-maya-operator created
clusterrolebinding.rbac.authorization.k8s.io/openebs-maya-operator created
deployment.apps/maya-apiserver created
service/maya-apiserver-service created
deployment.apps/openebs-provisioner created
deployment.apps/openebs-snapshot-operator created
configmap/openebs-ndm-config created
daemonset.apps/openebs-ndm created
deployment.apps/openebs-ndm-operator created
deployment.apps/openebs-admission-server created
deployment.apps/openebs-localpv-provisioner created
```

:round_pushpin: [Install using helm](https://docs.openebs.io/docs/next/installation.html#installation-through-helm)

```
$ helm repo add openebs https://openebs.github.io/charts
```

```
$ helm repo update
```

```
$ helm install --namespace openebs openebs openebs/openebs
"openebs" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "openebs" chart repository
Update Complete. ⎈Happy Helming!⎈
NAME: openebs
LAST DEPLOYED: Sun Mar 14 07:45:49 2021
NAMESPACE: openebs
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The OpenEBS has been installed. Check its status by running:
$ kubectl get pods -n openebs

For dynamically creating OpenEBS Volumes, you can either create a new StorageClass or
use one of the default storage classes provided by OpenEBS.

Use `kubectl get sc` to see the list of installed OpenEBS StorageClasses. A sample
PVC spec using `openebs-jiva-default` StorageClass is given below:"

---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: demo-vol-claim
spec:
  storageClassName: openebs-jiva-default
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5G
---

Please note that, OpenEBS uses iSCSI for connecting applications with the
OpenEBS Volumes and your nodes should have the iSCSI initiator installed.

For more information, visit our Slack at https://openebs.io/community or view the documentation online at http://docs.openebs.io/.
```

- [ ] Test

``` 
$ helm ls --namespace openebs
NAME   	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART        APP VERSION
openebs	openebs  	1       	2021-03-14 07:45:49.558546 -0400 EDT	deployed	openebs-2.6.02.6.0      
``` 


## :b: [Verifying OpenEBS Installation](https://docs.openebs.io/docs/next/installation.html#verifying-openebs-installation)

```
$ kubectl get pods --namespace openebs
NAME                                           READY   STATUS    RESTARTS   AGE
openebs-admission-server-577f797f64-cwr4w      1/1     Running   0          4m
openebs-apiserver-5579d8877f-cvsdt             1/1     Running   2          4m
openebs-localpv-provisioner-676fd8ccff-pdwfg   1/1     Running   0          4m
openebs-ndm-48k4j                              1/1     Running   0          4m
openebs-ndm-kphxn                              1/1     Running   0          4m
openebs-ndm-lzwj4                              1/1     Running   0          4m
openebs-ndm-operator-785c656646-2hlfm          1/1     Running   0          4m
openebs-provisioner-6d879c54bb-2684z           1/1     Running   0          4m
openebs-snapshot-operator-5b8df5fffc-rbr2x     2/2     Running   0          4m
```

`openebs-ndm` is a daemon set, it should be running on all nodes or on the nodes that are selected through nodeSelector configuration.

The control plane pods `openebs-provisioner`, `maya-apiserver` and `openebs-snapshot-operator` should be running.

```
$ kubectl get pods --namespace openebs --output wide
NAME                                           READY   STATUS    RESTARTS   AGE     IP              NODE        NOMINATED NODE   READINESS GATES
openebs-admission-server-577f797f64-cwr4w      1/1     Running   0          4m37s   172.16.224.65   bellatrix   <none>           <none>
openebs-apiserver-5579d8877f-cvsdt             1/1     Running   2          4m37s   172.16.185.67   rigel       <none>           <none>
openebs-localpv-provisioner-676fd8ccff-pdwfg   1/1     Running   0          4m37s   172.16.214.1    saiph       <none>           <none>
openebs-ndm-48k4j                              1/1     Running   0          4m37s   10.13.15.203    saiph       <none>           <none>
openebs-ndm-kphxn                              1/1     Running   0          4m37s   10.13.15.201    bellatrix   <none>           <none>
openebs-ndm-lzwj4                              1/1     Running   0          4m37s   10.13.15.202    rigel       <none>           <none>
openebs-ndm-operator-785c656646-2hlfm          1/1     Running   0          4m37s   172.16.185.66   rigel       <none>           <none>
openebs-provisioner-6d879c54bb-2684z           1/1     Running   0          4m37s   172.16.185.68   rigel       <none>           <none>
openebs-snapshot-operator-5b8df5fffc-rbr2x     2/2     Running   0          4m37s   172.16.185.65   rigel       <none>           <none>
```

:star: Verify `StorageClasses` 

```
$ kubectl get storageclass
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4m28s
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4m28s
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  4m28s
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  4m28s
```

# References

https://devopstales.github.io/home/k8s-install-openebs/

https://blog.mayadata.io/openebs/creating-manual-blockdevice

https://medium.com/@dunefro/part-3-4-using-block-devices-for-kubernetes-volume-understanding-openebs-cstor-80ff6307ea29

https://thenewstack.io/how-openebs-brings-container-attached-storage-to-kubernetes/

https://github.com/openebs/openebs/issues/2286 (HA Quorum)

https://medium.com/volterra-io/kubernetes-storage-performance-comparison-v2-2020-updated-1c0b69f0dcf4
