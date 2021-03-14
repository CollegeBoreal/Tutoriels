# Logical Volume Manager


https://opensource.com/business/16/9/linux-users-guide-lvm

<img src="images/lvm-520x222.png" width="520" height="222"> </img>

- [ ] List the physical disks (Hard Drives) and devices (partitions)

* For example listing all the **SD** ([**S**CSI](https://en.wikipedia.org/wiki/SCSI) **D**isks)

```
$ sudo fdisk -l /dev/sd?
[sudo] password for ubuntu: 
Disk /dev/sda: 273.41 GiB, 293564211200 bytes, 573367600 sectors
Disk model: LOGICAL VOLUME  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: ED4AACF5-4D43-4257-A30B-3155D94AFA0F

Device       Start       End   Sectors   Size Type
/dev/sda1     2048      4095      2048     1M BIOS boot
/dev/sda2     4096   2101247   2097152     1G Linux filesystem
/dev/sda3  2101248 573364223 571262976 272.4G Linux filesystem
```

- [ ] List the block devices (Disk **HD** and **Part**itions)

* Displaying the physical volumes

```
$ sudo lsblk /dev/sda
NAME                      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda                         8:0    0 273.4G  0 disk 
├─sda1                      8:1    0     1M  0 part 
├─sda2                      8:2    0     1G  0 part /boot
└─sda3                      8:3    0 272.4G  0 part 
  └─ubuntu--vg-ubuntu--lv 253:0    0 136.2G  0 lvm  /
```

* displaying the physical volumes along with the **FS** (File System) Information


```
$ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        197.5M    20% /boot
└─sda3                    272.4G part        LVM2_member               
  └─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         19.9G    15% /
```

- [ ] List the physical volumes PV

It only displays the volume that can be used (i.e no /boot which is not usable by users)

* the summary

```
$ sudo pvs
  PV         VG        Fmt  Attr PSize    PFree   
  /dev/sda3  ubuntu-vg lvm2 a--  <272.40g <136.20g
```

* In detail

```
$ sudo pvdisplay
  --- Physical volume ---
  PV Name               /dev/sda3
  VG Name               ubuntu-vg
  PV Size               <272.40 GiB / not usable 0   
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              69734
  Free PE               34867
  Allocated PE          34867
  PV UUID               xe2Kkf-22cm-OIIK-HXGB-nHGM-DcDc-0F5PWX
```   

- [ ] List the volume groups VG

* the summary (with the devices attached)

```
$ sudo vgs --options +devices | column -t
VG         #PV  #LV  #SN  Attr    VSize     VFree     Devices
ubuntu-vg  1    1    0    wz--n-  <272.40g  <136.20g  /dev/sda3(0)
```

* In detail

```
$ sudo vgdisplay
  --- Volume group ---
  VG Name               ubuntu-vg
  System ID             
  Format                lvm2
  Metadata Areas        1
  Metadata Sequence No  2
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                1
  Open LV               1
  Max PV                0
  Cur PV                1
  Act PV                1
  VG Size               <272.40 GiB
  PE Size               4.00 MiB
  Total PE              69734
  Alloc PE / Size       34867 / <136.20 GiB
  Free  PE / Size       34867 / <136.20 GiB
  VG UUID               sriYwj-haKn-73lS-vWNq-HEsr-aPHd-oVkHV9
```

- [ ] List the logical volumes LV

* the summary

```
$ sudo lvs --options +devices 
  LV        VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert Devices     
  ubuntu-lv ubuntu-vg -wi-ao---- <136.20g                                                     /dev/sda3(0)
```

* In detail

```
$ sudo lvdisplay
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/ubuntu-lv
  LV Name                ubuntu-lv
  VG Name                ubuntu-vg
  LV UUID                vTuF2C-B6kd-Ptcu-xQaR-h0it-HmdJ-YDKQum
  LV Write Access        read/write
  LV Creation host, time ubuntu-server, 2021-02-12 22:33:11 +0000
  LV Status              available
  # open                 1
  LV Size                <136.20 GiB
  Current LE             34867
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:0
```

- [ ] List the disk filesystems **df**

```
$  df --human --type ext4
Filesystem                         Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu--vg-ubuntu--lv  134G   20G  107G  16% /
/dev/sda2                          976M  198M  712M  22% /boot
```

- [ ] List where the **devices** are mounted on? **i.e. fs**

```
$ ( printf "DEVICES .. FS .... TYPE ATTRIBUTES\n"; mount --types ext4) | column -t
DEVICES                            ..  FS    ....  TYPE  ATTRIBUTES
/dev/mapper/ubuntu--vg-ubuntu--lv  on  /     type  ext4  (rw,relatime)
/dev/sda2                          on  /boot type  ext4  (rw,relatime)
```


## :a: PLaying with the LVG

- [ ] Lets create the LV

```
$ sudo lvcreate --name vol_backups --extents 100%FREE ubuntu-vg
  Logical volume "vol_backups" created.
```

* Lets get a summary with lv**s**

```
$ sudo lvs
  LV          VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  ubuntu-lv   ubuntu-vg -wi-ao---- <136.20g                                                    
  vol_backups ubuntu-vg -wi-a----- <136.20g      
```

- [ ] Lets rename the LV

```
$ sudo lvrename ubuntu-vg vol_backups mysql-lv
  Renamed "vol_backups" to "mysql-lv" in volume group "ubuntu-vg"
```

* Lets get another summary with lv**s**

```
$ sudo lvs
  LV        VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  mysql-lv  ubuntu-vg -wi-a----- <136.20g                                                    
  ubuntu-lv ubuntu-vg -wi-ao---- <136.20g   
```

* The created LV appears in /dev/mapper

```
$ ls -l /dev/mapper
total 0
crw------- 1 root root 10, 236 Mar  6 05:03 control
lrwxrwxrwx 1 root root       7 Mar  7 03:56 ubuntu--vg-mysql--lv -> ../dm-1
lrwxrwxrwx 1 root root       7 Mar  6 05:03 ubuntu--vg-ubuntu--lv -> ../dm-0
```

* As expected, it has to be mounted (NO MOUNTPOINT)

```
$ sudo lsblk /dev/sda
[sudo] password for ubuntu: 
NAME                      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda                         8:0    0 273.4G  0 disk 
├─sda1                      8:1    0     1M  0 part 
├─sda2                      8:2    0     1G  0 part /boot
└─sda3                      8:3    0 272.4G  0 part 
  ├─ubuntu--vg-ubuntu--lv 253:0    0 136.2G  0 lvm  /
  └─ubuntu--vg-mysql--lv  253:1    0 136.2G  0 lvm  
```

- [ ] Lets remove the LV

```
$ sudo lvremove ubuntu-vg/mysql-lv
Do you really want to remove and DISCARD active logical volume ubuntu-vg/mysql-lv? [y/n]: y
  Logical volume "mysql-lv" successfully removed
```

* let's check if it's gone

```
$ sudo lsblk /dev/sda
NAME                      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda                         8:0    0 273.4G  0 disk 
├─sda1                      8:1    0     1M  0 part 
├─sda2                      8:2    0     1G  0 part /boot
└─sda3                      8:3    0 272.4G  0 part 
  └─ubuntu--vg-ubuntu--lv 253:0    0 136.2G  0 lvm  /
```

## :b: Multiple LVs

- [ ] Create a 100G LV for iscsi usage (i.e. SAN) - Storage Access Network

```
$ sudo lvcreate --name iscsi-lv --size 100G  ubuntu-vg
  Logical volume "iscsi-lv" created.
```

- [ ] Create a Docker Volume with the remainder


```
$ sudo lvcreate --name docker-lv --extents 100%FREE ubuntu-vg
  Logical volume "docker-lv" created.
```

* Check the result by summarizing the entries

```
$ sudo lvs
  LV        VG        Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  docker-lv ubuntu-vg -wi-a-----  <36.20g                                                    
  iscsi-lv  ubuntu-vg -wi-a-----  100.00g                                                    
  ubuntu-lv ubuntu-vg -wi-ao---- <136.20g  
```

* displaying the physical volumes along with the **FS** (File System) Information


```
$ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        197.5M    20% /boot
└─sda3                    272.4G part        LVM2_member               
  ├─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         19.9G    15% /
  ├─ubuntu--vg-iscsi--lv    100G lvm                                   
  └─ubuntu--vg-docker--lv  36.2G lvm                                   
```

:round_pushpin: Let's focus on `docker-lv`

```
$ sudo lvdisplay ubuntu-vg/docker-lv
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/docker-lv
  LV Name                docker-lv
  VG Name                ubuntu-vg
  LV UUID                VoP1ad-6sDQ-qNED-hYUa-I65a-QdmT-FGRr43
  LV Write Access        read/write
  LV Creation host, time canis, 2021-03-07 12:15:54 +0000
  LV Status              available
  # open                 0
  LV Size                <36.20 GiB
  Current LE             9267
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:2
```

:bangbang: Let's format the LV to a filesystem with `mkfs` to an [`ext4`](https://en.wikipedia.org/wiki/Ext4) journalized filesystem

```
$ sudo mkfs.ext4 /dev/ubuntu-vg/docker-lv
mke2fs 1.45.5 (07-Jan-2020)
/dev/ubuntu-vg/docker-lv contains a ext4 file system
	created on Sun Mar  7 15:45:41 2021
Proceed anyway? (y,N) Y
Creating filesystem with 9489408 4k blocks and 2375680 inodes
Filesystem UUID: 463994c9-81ee-4a07-b90e-5ec2c2a6088d
Superblock backups stored on blocks: 
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
	4096000, 7962624

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done 
```

* displaying the physical volumes along with the **FS** (File System) Information

:bulb: Note the **ext4** FSTYPE attached to `ubuntu--vg-docker--lv` LV

```
$ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        103.5M    11% /boot
└─sda3                    272.4G part        LVM2_member               
  ├─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         17.1G    13% /
  ├─ubuntu--vg-iscsi--lv    100G lvm                                   
  └─ubuntu--vg-docker--lv  36.2G lvm         ext4         
```

## :ab: Mounting Logical Volumes on Boot and on Demand

- [ ] Getting the basic device information with [Udev](https://en.wikipedia.org/wiki/Udev) 

:bulb: Udev (Userspace Device) is managed by [systemd-udevd](https://manpages.debian.org/unstable/udev/systemd-udevd.service.8.en.html)

```
$ udevadm info --query property --name /dev/ubuntu-vg/docker-lv
DEVPATH=/devices/virtual/block/dm-2
DEVNAME=/dev/dm-2
DEVTYPE=disk
MAJOR=253
MINOR=2
SUBSYSTEM=block
USEC_INITIALIZED=9556835
DM_UDEV_DISABLE_LIBRARY_FALLBACK_FLAG=1
DM_UDEV_PRIMARY_SOURCE_FLAG=1
DM_UDEV_RULES=1
DM_UDEV_RULES_VSN=2
DM_NAME=ubuntu--vg-docker--lv
DM_UUID=LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssVoP1ad6sDQqNEDhYUaI65aQdmTFGRr43
DM_SUSPENDED=0
DM_VG_NAME=ubuntu-vg
DM_LV_NAME=docker-lv
ID_FS_UUID=463994c9-81ee-4a07-b90e-5ec2c2a6088d
ID_FS_UUID_ENC=463994c9-81ee-4a07-b90e-5ec2c2a6088d
ID_FS_VERSION=1.0
ID_FS_TYPE=ext4
ID_FS_USAGE=filesystem
DM_TABLE_STATE=LIVE
DM_STATE=ACTIVE
DEVLINKS=/dev/ubuntu-vg/docker-lv /dev/mapper/ubuntu--vg-docker--lv /dev/disk/by-id/dm-uuid-LVM-3wU1GsK3RM9v8mInM2B300iKIJ9GlQssVoP1ad6sDQqNEDhYUaI65aQdmTFGRr43 /dev/disk/by-uuid/463994c9-81ee-4a07-b90e-5ec2c2a6088d /dev/disk/by-id/dm-name-ubuntu--vg-docker--lv
TAGS=:systemd:
```

- [ ] Let's display the file system tab at boot process `/etc/fstab`

```
$ $ cat /etc/fstab 
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/ubuntu-vg/ubuntu-lv during curtin installation
/dev/disk/by-id/dm-uuid-LVM-sriYwjhaKn73lSvWNqHEsraPHdoVkHV9vTuF2CB6kdPtcuxQaRh0itHmdJYDKQum / ext4 defaults 0 0
# /boot was on /dev/sda2 during curtin installation
/dev/disk/by-uuid/da420220-48cc-4a27-a53f-92e31bbac806 /boot ext4 defaults 0 0
#/swap.img	none	swap	sw	0	0
```

We need to add the LV information into the `/etc/fstab`

- [ ] Adding to the `/etc/fstab` file structure

* Let's use the mounting by uuid **/dev/disk/by-`uuid`**

`blkid` utility displays the LV info 

```
$ sudo blkid /dev/ubuntu-vg/docker-lv
/dev/ubuntu-vg/docker-lv: UUID="463994c9-81ee-4a07-b90e-5ec2c2a6088d" TYPE="ext4"
```

or with `--match-tag` and `--output` to only display the `udev` information we need

```
$ sudo blkid /dev/ubuntu-vg/docker-lv --match-tag UUID --match-tag TYPE --output value
463994c9-81ee-4a07-b90e-5ec2c2a6088d
ext4
```

* Let's create the mounting folder, that we'll put in the `vol` like volumes folder

```
$ sudo mkdir -p /vol/docker-lv
```

* lets' add the entire line to the `/etc/fstab` file

```
/dev/disk/by-uuid/463994c9-81ee-4a07-b90e-5ec2c2a6088d /vol/docker-lv ext4 defaults 0 0
```

- [ ] Let's display the **new** file system tab at boot process `/etc/fstab`

```
$ cat /etc/fstab 
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/ubuntu-vg/ubuntu-lv during curtin installation
/dev/disk/by-id/dm-uuid-LVM-sriYwjhaKn73lSvWNqHEsraPHdoVkHV9vTuF2CB6kdPtcuxQaRh0itHmdJYDKQum / ext4 defaults 0 0
# /boot was on /dev/sda2 during curtin installation
/dev/disk/by-uuid/da420220-48cc-4a27-a53f-92e31bbac806 /boot ext4 defaults 0 0
#/swap.img	none	swap	sw	0	0

/dev/disk/by-uuid/463994c9-81ee-4a07-b90e-5ec2c2a6088d /vol/docker-lv ext4 defaults 0 0
```

- [ ] Reprocess `/etc/fstab` to mount all the filesystems

```
$ sudo mount --all
```

- [ ] Check that `/vol/docker-lv` is mounted 

```
$ mount --type ext4
/dev/mapper/ubuntu--vg-ubuntu--lv on / type ext4 (rw,relatime)
/dev/sda2 on /boot type ext4 (rw,relatime)
/dev/mapper/ubuntu--vg-ubuntu--lv on /var/lib/kubelet/pods/1833e7d1-eb2d-4eae-8d3e-dbc852f1a3ec/volume-subpaths/config/openebs-ndm/0 type ext4 (rw,relatime)
/dev/mapper/ubuntu--vg-docker--lv on /vol/docker-lv type ext4 (rw,relatime)
``` 

- [ ] Reboot and check back 

```
$ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        103.5M    11% /boot
└─sda3                    272.4G part        LVM2_member               
  ├─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         17.1G    13% /
  ├─ubuntu--vg-iscsi--lv    100G lvm                                   
  └─ubuntu--vg-docker--lv  36.2G lvm   35.4G ext4           48M     0% /vol/docker-lv 
```

# References

https://www.tecmint.com/manage-and-create-lvm-parition-using-vgcreate-lvcreate-and-lvextend/

https://serverfault.com/questions/262541/how-to-display-used-devices-free-space-when-using-lvm/648302

https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04

https://blog.confirm.ch/mount-options-atime-vs-relatime/

https://www.unixmen.com/attach-iscsi-target-disks-linux-servers/
