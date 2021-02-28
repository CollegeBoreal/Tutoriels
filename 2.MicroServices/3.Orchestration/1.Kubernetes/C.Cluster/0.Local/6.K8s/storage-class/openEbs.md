# Open EBS


https://openebs.io

Used by `kubesphere`

<img src="images/1-config-sequence.svg" width="657" height="145"> </img>

## :o: Installation

https://docs.openebs.io/docs/next/prerequisites.html#ubuntu

- [ ] Verify iSCSI services are configured

```
$ sudo cat /etc/iscsi/initiatorname.iscsi
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
