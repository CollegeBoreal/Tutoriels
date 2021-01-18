# KVM

# :a: How to Install KVM on Ubuntu 20.04


- [ ] check is `Ubuntu` system supports virtualization

An outcome greater than 0 

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

# References

https://www.tecmint.com/install-kvm-on-ubuntu/

https://ostechnix.com/how-to-use-vagrant-with-libvirt-kvm-provider/
