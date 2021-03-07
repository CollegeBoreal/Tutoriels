# Logical Volume Manager


https://opensource.com/business/16/9/linux-users-guide-lvm

<img src="images/lvm-520x222.png" width="520" height="222"> </img>

- [ ] List the physical disks

* For example listing all the **SD** (**S**CSI **D**isks)

```
$ sudo fdisk -l /dev/sd?
Disk /dev/sda: 273.41 GiB, 293563949056 bytes, 573367088 sectors
Disk model: LOGICAL VOLUME  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 147F8706-F7D6-4323-BFF8-64FA5D7B9A32

Device       Start       End   Sectors   Size Type
/dev/sda1     2048      4095      2048     1M BIOS boot
/dev/sda2     4096   2101247   2097152     1G Linux filesystem
/dev/sda3  2101248 573364223 571262976 272.4G Linux filesystem
```

- [ ] List the block devices

* Just displaying the physical volumes

```
$ sudo lsblk /dev/sda
NAME                      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda                         8:0    0 273.4G  0 disk 
├─sda1                      8:1    0     1M  0 part 
├─sda2                      8:2    0     1G  0 part /boot
└─sda3                      8:3    0 272.4G  0 part 
  └─ubuntu--vg-ubuntu--lv 253:0    0 136.2G  0 lvm  /
```

* displaying the physical volumes with the **FS** (File System) Information


```
$ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        103.5M    11% /boot
└─sda3                    272.4G part        LVM2_member               
  └─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         15.8G    12% /
```

```
$ sudo pvs
  PV         VG          Fmt   Attr   PSize      PFree   
  /dev/sda3  ubuntu-vg   lvm2  a--    <272.40g   <136.20g
```

```
$ sudo vgs
  VG         #PV  #LV  #SN  Attr    VSize     VFree   
  ubuntu-vg    1    1    0  wz--n-  <272.40g  <136.20g
```

```
$ sudo lvs
  LV          VG          Attr         LSize      Pool   Origin   Data%    Meta%    Move   Log   Cpy%Sync Convert
  ubuntu-lv   ubuntu-vg   -wi-ao----   <136.20g                                                    
```

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
  PV UUID               wMmt0Q-zccm-5bUc-Z2NQ-CLx1-pJ35-smZFTQ
```   

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
  VG UUID               3wU1Gs-K3RM-9v8m-InM2-B300-iKIJ-9GlQss
```

```
$ sudo lvdisplay
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/ubuntu-lv
  LV Name                ubuntu-lv
  VG Name                ubuntu-vg
  LV UUID                M3aFew-MTKU-RilU-1s52-Gl8H-sE8f-3wg2Se
  LV Write Access        read/write
  LV Creation host, time ubuntu-server, 2020-04-01 17:26:26 +0000
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

```
$ df --human --type ext4
Filesystem                         Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu--vg-ubuntu--lv  134G   16G  111G  13% /
/dev/sda2                          976M  104M  806M  12% /boot
```

```
$ ( printf "DEVICES .. FS .... TYPE ATTRIBUTES\n"; mount --types ext4) | column -t
DEVICES                            ..  FS                                                                                                             ....  TYPE  ATTRIBUTES
/dev/mapper/ubuntu--vg-ubuntu--lv  on  /                                                                                                              type  ext4  (rw,relatime)
/dev/sda2                          on  /boot                                                                                                          type  ext4  (rw,relatime)
/dev/mapper/ubuntu--vg-ubuntu--lv  on  /var/lib/kubelet/pods/d7b2db25-998b-4a12-b19b-4d2241213d01/volume-subpaths/config/node-disk-manager/0          type  ext4  (rw,relatime)
/dev/mapper/ubuntu--vg-ubuntu--lv  on  /var/lib/kubelet/pods/b634fa33-51cd-4e9c-8f29-f596b05e7dba/volume-subpaths/chroot-iscsiadm/cstor-csi-plugin/4  type  ext4  (rw,relatime)
```


## :a: PLaying with the LVG

- [ ] Lets create the LV

```
$ sudo lvcreate --name vol_backups --extends 100%FREE ubuntu-vg
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

* It has to be mounted

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

* Check the result by summarizing the entries


```
$ $ lsblk /dev/sda --output NAME,SIZE,TYPE,FSSIZE,FSTYPE,FSUSED,FSUSE%,MOUNTPOINT 
NAME                        SIZE TYPE FSSIZE FSTYPE      FSUSED FSUSE% MOUNTPOINT
sda                       273.4G disk                                  
├─sda1                        1M part                                  
├─sda2                        1G part 975.9M ext4        103.5M    11% /boot
└─sda3                    272.4G part        LVM2_member               
  ├─ubuntu--vg-ubuntu--lv 136.2G lvm  133.1G ext4         15.9G    12% /
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



## :ab: Mounting Logical Volumes on Boot and on Demand

https://www.tecmint.com/manage-and-create-lvm-parition-using-vgcreate-lvcreate-and-lvextend/


# References


https://serverfault.com/questions/262541/how-to-display-used-devices-free-space-when-using-lvm/648302

https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04

https://blog.confirm.ch/mount-options-atime-vs-relatime/
