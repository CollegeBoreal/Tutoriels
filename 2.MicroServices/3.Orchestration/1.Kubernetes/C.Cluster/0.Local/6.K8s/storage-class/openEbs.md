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

- [ ] Check is enabled

```
$ systemctl status iscsid 
● iscsid.service - iSCSI initiator daemon (iscsid)
     Loaded: loaded (/lib/systemd/system/iscsid.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● iscsid.socket
       Docs: man:iscsid(8)
```
