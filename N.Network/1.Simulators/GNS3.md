
```
% vboxmanage list vms            
"GNS3 VM" {941a5f1f-66be-4e7f-9fad-5a24b18d67d6}
```

```
% VM="GNS3 VM"
```

```
% vboxmanage showvminfo ${VM}
```

```
% VBoxManage guestproperty enumerate ${VM}
Name: /VirtualBox/HostInfo/GUI/LanguageID, value: en_US, timestamp: 1584388271159071000, flags: RDONLYGUEST
Name: /VirtualBox/HostInfo/VBoxVerExt, value: 6.1.4, timestamp: 1584387254070548001, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/VMInfo/ResumeCounter, value: 4, timestamp: 1584387989609544000, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/HostGuest/SysprepExec, value: , timestamp: 1584387253106920000, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/HostGuest/SysprepArgs, value: , timestamp: 1584387253106920000, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/VMInfo/ResetCounter, value: 0, timestamp: 1584387253106920000, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/HostInfo/VBoxRev, value: 136177, timestamp: 1584387254070548002, flags: TRANSIENT, RDONLYGUEST
Name: /VirtualBox/HostInfo/VBoxVer, value: 6.1.4, timestamp: 1584387254070548000, flags: TRANSIENT, RDONLYGUEST
```

```
% ssh gns3@192.168.1.10
```

Please run 'sudo gns3restore' in case the menu is no longer showing



## References


https://blog.scottlowe.org/2016/11/10/intro-to-vbox-cli/

https://www.thomas-krenn.com/en/wiki/Network_Configuration_in_VirtualBox
