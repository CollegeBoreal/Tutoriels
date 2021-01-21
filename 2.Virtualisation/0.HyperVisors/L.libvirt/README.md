# `L`.[LibVirt](https://libvirt.org/) Virtualisation API

## :gear: Install

### :penguin: virt daemon (Linux)

```
$ sudo apt install qemu-kvm libvirt-daemon-system
```

```
$ sudo systemctl status libvirtd
```

```
$ sudo ls -l /var/lib/libvirt
total 20
drwx--x--x 2 root         root 4096 Oct  8 05:36 boot
drwxr-xr-x 2 root         root 4096 Jan 20 01:45 dnsmasq
drwxr-xr-x 2 root         root 4096 Jan 20 15:34 images
drwxr-x--- 9 libvirt-qemu kvm  4096 Jan 20 01:45 qemu
drwx------ 2 root         root 4096 Oct  8 05:36 sanlock
```

:open_book: https://computingforgeeks.com/virsh-commands-cheatsheet/


### :penguin: virt-manager (Linux) - UI

```
$ sudo apt install virt-manager virt-viewer 
```

### :computer: virt-viewer (Windows) - UI

```
$ sudo apt install virt-manager virt-viewer 
```

https://mangolassi.it/topic/19379/virt-manager-for-windows/7


## :a: Usage

VIRT CLI

```
$ virsh --connect qemu:///system
```
