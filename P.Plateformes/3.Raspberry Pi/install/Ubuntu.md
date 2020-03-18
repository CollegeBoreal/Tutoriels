### Ubuntu Server

https://ubuntu.com/download/iot/raspberry-pi

 On Linux Terminal

    List all Flash Devices

```
$ lsblk
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
