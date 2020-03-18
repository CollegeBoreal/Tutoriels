# Installation

## Create Bootable Drives

https://www.raspberrypi.org/documentation/installation/installing-images/

Dexter Industries Images

https://sourceforge.net/projects/dexterindustriesraspbianflavor/files/latest/download


** On Linux Terminal

- List all Flash Devices

```
$ lsblk
```

- UnMount the devices

```
$ umount /dev/mmcblk0p1 /dev/mmcblk0p2
```

- burn the zip

```
$ unzip -p ~/Downloads/2019-09-26-raspbian-buster-full.zip | \
         sudo dd of=/dev/mmcblk0 bs=4M conv=fsync
```
