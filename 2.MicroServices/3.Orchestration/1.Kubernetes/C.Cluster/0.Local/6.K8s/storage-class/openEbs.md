# Open EBS


https://openebs.io

Used by `kubesphere`

<img src="images/1-config-sequence.svg" width="657" height="145"> </img>

## :o: Installation

https://docs.openebs.io/docs/next/prerequisites.html#ubuntu

:round_pushpin: Verify iSCSI services are configured

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


:round_pushpin: [Set Cluster Admin User Context](https://docs.openebs.io/docs/next/installation.html#set-cluster-admin-user-context)

:warning: This is a must

<img src="images/kube-context.png" width="658" height="48"> </img>


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

## :ab: [Verifying OpenEBS Installation](https://docs.openebs.io/docs/next/installation.html#verifying-openebs-installation)

```
$ kubectl get pods --namespace openebs
NAME                                           READY   STATUS             RESTARTS   AGE
maya-apiserver-6999679866-t5xxz                0/1     CrashLoopBackOff   2          92s
openebs-admission-server-68cf7797d7-jhhm4      1/1     Running            0          92s
openebs-localpv-provisioner-7bc9cbbc9c-hlsxb   1/1     Running            0          92s
openebs-ndm-operator-575c46f9d8-m7rkb          1/1     Running            0          92s
openebs-ndm-x275n                              1/1     Running            0          92s
openebs-ndm-xkl58                              1/1     Running            0          92s
openebs-provisioner-7ff7958d7f-k27hz           1/1     Running            0          92s
openebs-snapshot-operator-5dbc4f69dc-4z427     2/2     Running            0          92s
```

```
$ kubectl get pods --namespace openebs --output wide
NAME                                           READY   STATUS    RESTARTS   AGE     IP               NODE    NOMINATED NODE   READINESS GATES
maya-apiserver-6999679866-t5xxz                1/1     Running   3          6m22s   172.16.183.133   ursa    <none>           <none>
openebs-admission-server-68cf7797d7-jhhm4      1/1     Running   0          6m22s   172.16.183.132   ursa    <none>           <none>
openebs-localpv-provisioner-7bc9cbbc9c-hlsxb   1/1     Running   0          6m22s   172.16.183.135   ursa    <none>           <none>
openebs-ndm-operator-575c46f9d8-m7rkb          1/1     Running   0          6m22s   172.16.183.136   ursa    <none>           <none>
openebs-ndm-x275n                              1/1     Running   0          6m22s   10.13.15.201     canis   <none>           <none>
openebs-ndm-xkl58                              1/1     Running   0          6m22s   10.13.15.202     ursa    <none>           <none>
openebs-provisioner-7ff7958d7f-k27hz           1/1     Running   0          6m22s   172.16.183.134   ursa    <none>           <none>
openebs-snapshot-operator-5dbc4f69dc-4z427     2/2     Running   0          6m22s   172.16.108.6     canis   <none>           <none>
```


