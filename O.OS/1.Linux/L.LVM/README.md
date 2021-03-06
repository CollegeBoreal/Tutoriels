# Logical Volume Manager


https://opensource.com/business/16/9/linux-users-guide-lvm

<img src="images/lvm-520x222.png" width="520" height="222"> </img>

- [ ] List the block devices

```
$ lsblk
NAME                      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0                       7:0    0  55.5M  1 loop /snap/core18/1988
loop1                       7:1    0  55.4M  1 loop /snap/core18/1944
loop2                       7:2    0  69.9M  1 loop /snap/lxd/19188
loop3                       7:3    0  31.1M  1 loop /snap/snapd/11036
loop4                       7:4    0  32.3M  1 loop /snap/snapd/11107
sda                         8:0    0 273.4G  0 disk 
├─sda1                      8:1    0     1M  0 part 
├─sda2                      8:2    0     1G  0 part /boot
└─sda3                      8:3    0 272.4G  0 part 
  └─ubuntu--vg-ubuntu--lv 253:0    0 136.2G  0 lvm  /
sr0                        11:0    1  1024M  0 rom  
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

```
$ sudo fdisk -l
Disk /dev/loop0: 55.39 MiB, 58073088 bytes, 113424 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop1: 69.9 MiB, 73277440 bytes, 143120 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop2: 31.9 MiB, 32595968 bytes, 63664 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop3: 32.28 MiB, 33845248 bytes, 66104 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop4: 55.48 MiB, 58159104 bytes, 113592 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


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


Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 136.2 GiB, 146242797568 bytes, 285630464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```


https://serverfault.com/questions/262541/how-to-display-used-devices-free-space-when-using-lvm/648302

https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04
