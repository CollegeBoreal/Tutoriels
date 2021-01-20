# KVM

# :a: How to Install KVM

#### :bookmark: on Ubuntu 20.04


- [ ] check if `Ubuntu` system supports virtualization

Result must be greater than 0 

```
$ egrep -c '(vmx|svm)' /proc/cpuinfo
16
```

- [ ] check if your system supports `KVM` virtualization

```
$ sudo kvm-ok
INFO: /dev/kvm exists
KVM acceleration can be used
```

if `kvm-ok` not present install `cpu-cheker` package

```
$ sudo apt install cpu-checker
```

:closed_book: https://www.tecmint.com/install-kvm-on-ubuntu/


## :b: [LibVirt](https://libvirt.org/) Virtualisation API


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



