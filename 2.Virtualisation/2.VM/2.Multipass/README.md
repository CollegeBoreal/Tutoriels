# Multipass

## :a: Install 

##### :m:  Manual install on [Multipass.run](https://multipass.run)

##### :m: with Package Managers

:pushpin: Windows

```
PS> choco install multipass
```


:x: Versions 

```
ERROR: Hyper-V requires Windows 10 Pro/Enterprise with a build version > 17134
The install of multipass was NOT successful.
Error while running 'C:\ProgramData\chocolatey\lib\multipass\tools\chocolateyinstall.ps1'.
 See log for details.
```

:warning: https://github.com/CanonicalLtd/multipass/issues/826

:pushpin: MacOS

```
$ brew cask install multipass
```

:pushpin: Linux snap

```
$ sudo snap install multipass
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

## :key: Multipass Keys


:penguin: Linux

```
$ sudo ssh -i /var/snap/multipass/common/data/multipassd/ssh-keys/id_rsa ubuntu@10.15.78.10
```

:apple: MacOS

```
% sudo ssh -i /var/root/Library/Application\ Support/multipassd/ssh-keys/id_rsa multipass@192.168.64.7
```

```
% sudo docker-machine create --driver generic \
   --generic-ip-address=192.168.64.7 \
   --generic-ssh-user=multipass \
   --generic-ssh-key /var/root/Library/Application\ Support/multipassd/ssh-keys/id_rsa \
   MY-VM

Running pre-create checks...
Creating machine...
(MY-VM) Importing SSH key...
(MY-VM) Couldn't copy SSH public key : unable to copy ssh key: open /var/root/Library/Application Support/multipassd/ssh-keys/id_rsa.pub: no such file or directory
Waiting for machine to be running, this may take a few minutes...
Detecting operating system of created instance...
Waiting for SSH to be available...
Detecting the provisioner...
Provisioning with ubuntu(systemd)...
Installing Docker...
Copying certs to the local machine directory...
Copying certs to the remote machine...
Setting Docker configuration on the remote daemon...
Checking connection to Docker...
Docker is up and running!
To see how to connect your Docker Client to the Docker Engine running on this virtual machine, run: docker-machine env MY-VM

https://github.com/canonical/multipass/issues/913
```

:warning: manage key folder rights

```
% sudo chown -R <YOUR USER> ~/.docker/machine/machines/MY-VM
```
