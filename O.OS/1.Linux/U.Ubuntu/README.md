



### Ubuntu Server

http://cdimage.ubuntu.com/releases/18.04.4/release/


```
$ curl http://cdimage.ubuntu.com/releases/18.04.4/release/ubuntu-18.04.4-server-arm64.iso \
       --output ~/Downloads/ubuntu-18.04.4-server-amd64.iso
```


 On Linux Terminal

    List all Flash Devices

```
$ lsblk
NAME                     MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0                      7:0    0    16K  1 loop /snap/software-boutique/39
loop1                      7:1    0  54.7M  1 loop /snap/core18/1668
loop2                      7:2    0  15.2M  1 loop /snap/ubuntu-mate-welcome/430
loop3                      7:3    0  91.3M  1 loop /snap/core/8592
loop4                      7:4    0    16K  1 loop /snap/software-boutique/54
loop6                      7:6    0  15.2M  1 loop /snap/ubuntu-mate-welcome/420
loop7                      7:7    0   7.9M  1 loop /snap/pulsemixer/250
loop8                      7:8    0  91.4M  1 loop /snap/core/8689
sda                        8:0    0 238.5G  0 disk 
└─sda1                     8:1    0 238.5G  0 part 
  ├─ubuntu--mate--vg-root
  │                      253:0    0 237.5G  0 lvm  /
  └─ubuntu--mate--vg-swap_1
                         253:1    0   980M  0 lvm  [SWAP]
sdb                        8:16   1   7.5G  0 disk /media/b300098957/E2DF-71F7
sr0                       11:0    1  1024M  0 rom  
```

    UnMount the devices

```
$ umount /dev/mmcblk0p1 /dev/mmcblk0p2
```


    burn the zip

```
$ xzcat ~/Downloads/ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz | \
          sudo dd bs=4M of=/dev/mmcblk0
```

## Network

https://linuxconfig.org/how-to-configure-static-ip-address-on-ubuntu-20-04-focal-fossa-desktop-server

* Edit `/etc/netplan/50-cloud-init.yaml`

```
# This file is generated from information provided by
# the datasource.  Changes to it will not persist across an instance.
# To disable cloud-init's network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    ethernets:
        enp0s3:
            dhcp4: false
            addresses: [192.168.1.202/24]
            gateway4: 192.168.1.1
            nameservers:
              addresses: [8.8.8.8,8.8.4.4,192.168.1.1]
    version: 2
```

* To apply the new Netplan changes execute:

```
$ sudo netplan apply
```
