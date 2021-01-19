# KVM

# :a: How to Install KVM on Ubuntu 20.04


- [ ] check is `Ubuntu` system supports virtualization

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

## :b: LibVirt


```
$ sudo apt install qemu-kvm libvirt-daemon-system
```

```
$ sudo systemctl status libvirtd
```

## :ab: Vagrant

- [ ] Install Vagrant

* download

```
$ curl -O https://releases.hashicorp.com/vagrant/2.2.14/vagrant_2.2.14_x86_64.deb
```

* install

```
$ sudo apt install ./vagrant_2.2.14_x86_64.deb
```

* test version

```
$ vagrant --version
Vagrant 2.2.14
```

- [ ] Install Vagrant `libvirt` plugin development environment

* Install `gcc` and `libvirt` development environment

```
$ sudo apt install gcc libvirt-clients libvirt-dev
```

* Install `ruby` development environment

```
$ sudo apt install libxslt-dev libxml2-dev zlib1g-dev ruby-dev ruby-libvirt 
```

* Install other libraries

```
$ sudo apt install ebtables dnsmasq-base
```

- [ ] Install Vagrant `libvirt` plugin

* plugin

```
$ vagrant plugin install vagrant-libvirt
```

* plugin which converts vagrant boxes to work with different providers

```
$ vagrant plugin install vagrant-mutate
```

:round_pushpin: Start a VM

```
$ mkdir vagrant && cd vagrant
```

```
$ vagrant init centos/7
```

```
$ vagrant up --provider=libvirt
```

:round_pushpin: Virsh

```
$ virsh list
```


## :x: Troubleshooting

```
$ vagrant up --provider=libvirt
Bringing machine 'default' up with 'libvirt' provider...
Error while connecting to Libvirt: Error making a connection to libvirt URI qemu:///system?no_verify=1&keyfile=/home/ubuntu/.ssh/id_rsa:
Call to virConnectOpen failed: Failed to connect socket to '/var/run/libvirt/libvirt-sock': Permission denied
```

```
$ sudo adduser $USER libvirt
```

Exit and return to the Terminal


# References

https://www.tecmint.com/install-kvm-on-ubuntu/

https://ostechnix.com/how-to-use-vagrant-with-libvirt-kvm-provider/

https://computingforgeeks.com/virsh-commands-cheatsheet/

https://linuxize.com/post/how-to-install-vagrant-on-ubuntu-20-04/
