# Multipass

## :a: Install 

##### :m:  Manual install on [Multipass.run](https://multipass.run)

##### :m: with Package Managers

:pushpin: Windows

https://github.com/CanonicalLtd/multipass/issues/826

:pushpin: MacOS

```
$ brew cask install multipass
```

## :b: Launch a machine

* Launch

```
$ multipass launch --name ubuntu-vm
Launched: ubuntu-vm  
```

* Get into

```
$ multipass shell ubuntu-vm                                
```

* List all VMs

```
$ multipass ls    # or list
Name                    State       IPv4             Release
ubuntu-vm               RUNNING     192.168.64.4     Ubuntu 18.04 LTS
```

* Is the VM reachable ?

```
$ ping 192.168.64.4
```

* Get info about the VM

```
$ multipass info ubuntu-vm
Name:           ubuntu-vm
State:          RUNNING
IPv4:           192.168.64.4
Release:        Ubuntu 18.04.3 LTS
Image hash:     86be97c1cc31 (Ubuntu 18.04 LTS)
Load:           0.06 0.08 0.03
Disk usage:     1.1G out of 4.7G
Memory usage:   72.7M out of 986.1M
```

* Delete VM

```
$ multipass delete ubuntu-vm
```

* See all the VMs

```
$ multipass list
Name                    State       IPv4             Release
ubuntu-vm               DELETED     --               Not Available
```

* Cleanup

```
$ multipass purge
```

```
$ multipass ls
No instances found.
```
