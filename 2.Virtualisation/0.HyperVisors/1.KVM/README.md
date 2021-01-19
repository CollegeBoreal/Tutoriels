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

```
$ sudo apt install gcc libvirt-clients libvirt-dev
```

```
$ sudo apt install libxslt-dev libxml2-dev zlib1g-dev ruby-dev ruby-libvirt 
```

```
$ sudo apt install ebtables dnsmasq-base
```


```
$ curl -O https://releases.hashicorp.com/vagrant/2.2.14/vagrant_2.2.14_x86_64.deb
```


```
$ sudo apt install ./vagrant_2.2.14_x86_64.deb
```

```
$ vagrant --version
Vagrant 2.2.14
```

```
$ vagrant up --provider=libvirt
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


https://linuxize.com/post/how-to-install-vagrant-on-ubuntu-20-04/
