# Kali Linux 

# Installation

## Create Bootable Drives

### On ARM (RaspberryPi)

https://www.offensive-security.com/kali-linux-arm-images/

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
$ xzcat ~/Downloads/kali-linux-2020.3a-rpi3-nexmon-64.img.xz | \
         sudo dd bs=4M of=/dev/mmcblk0
```

### Default Credentials

https://www.kali.org/docs/introduction/default-credentials/

Any default operating system credentials used during Live Boot, or pre-created VMware and ARM images will be:

User: `kali`

Password: `kali`
