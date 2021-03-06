# Logical Volume Manager


https://opensource.com/business/16/9/linux-users-guide-lvm

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

https://serverfault.com/questions/262541/how-to-display-used-devices-free-space-when-using-lvm/648302

https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04
