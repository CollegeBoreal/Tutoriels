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


```
$ sudo journalctl --unit libvirtd.service
-- Logs begin at Wed 2020-09-16 21:12:37 UTC, end at Thu 2021-01-21 03:35:04 UTC. --
Jan 18 21:54:55 ranomafana systemd[1]: Starting Virtualization daemon...
Jan 18 21:54:55 ranomafana systemd[1]: Started Virtualization daemon.
Jan 18 21:54:56 ranomafana dnsmasq[3006702]: started, version 2.80 cachesize 150
Jan 18 21:54:56 ranomafana dnsmasq[3006702]: compile time options: IPv6 GNU-getopt DBus i18n IDN DHCP DHCP>
Jan 18 21:54:56 ranomafana dnsmasq-dhcp[3006702]: DHCP, IP range 192.168.122.2 -- 192.168.122.254, lease t>
Jan 18 21:54:56 ranomafana dnsmasq-dhcp[3006702]: DHCP, sockets bound exclusively to interface virbr0
...
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



