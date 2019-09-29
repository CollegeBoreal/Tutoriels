# Multipass

[Multipass.run](https://multipass.run)


```
$ multipass launch --name ubuntu-vm
Launched: ubuntu-vm  
```

```
$ multipass shell ubuntu-vm                                
```

```
$ multipass list
Name                    State       IPv4             Release
ubuntu-vm               RUNNING     192.168.64.4     Ubuntu 18.04 LTS
```

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
