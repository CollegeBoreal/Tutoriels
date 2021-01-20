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


