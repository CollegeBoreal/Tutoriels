



### Ubuntu Server

http://cdimage.ubuntu.com/releases/18.04.4/release/


 On Linux Terminal

    List all Flash Devices

```
$ $ lsblk
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

