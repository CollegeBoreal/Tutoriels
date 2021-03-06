# K3os

:tada: Manual Install through UI

https://titanwolf.org/Network/Articles/Article?AID=0608030d-f550-404e-ba5a-b69096db56f4#gsc.tab=0


```
$ sudo k3os --version
k3os version v0.11.1
```


:x: Failed no SSH connection

```powershell
PS> docker-machine create `
          --driver hyperv `
          --hyperv-boot2docker-url https://github.com/rancher/k3os/releases/download/v0.11.0/k3os-amd64.iso `
          CB-K3OS
```

https://access.redhat.com/documentation/en-us/red_hat_container_development_kit/3.0/html/installation_guide/docker-machine-driver-install

```
$ docker-machine create \
          --driver kvm \
          --kvm-boot2docker-url https://github.com/rancher/k3os/releases/download/v0.11.0/k3os-amd64.iso \
          CB-K3OS
```

(CB-K3OS) Failed to start: [Code-55] [Domain-19] Requested operation is not valid: network 'default' is not active
Error creating machine: Error in driver during machine creation: [Code-55] [Domain-19] Requested operation is not valid: network 'default' is not active

https://askubuntu.com/questions/1036297/cant-start-kvm-guest-network-default-is-not-active

```
$ virsh net-list --all
 Name              State      Autostart   Persistent
------------------------------------------------------
 default           inactive   yes         yes
 docker-machines   active     yes         yes
 vagrant-libvirt   active     no          yes
 vagrant0          inactive   no          yes
```

```
$ virsh net-start default 
Network default started
```

```
$ virsh net-destroy default 
Network default destroyed
```

```
# curl -L https://github.com/docker/machine/releases/download/v0.16.1/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine &&
     chmod +x /tmp/docker-machine &&
     sudo cp /tmp/docker-machine /usr/local/bin/docker-machine 
# sudo chmod +x /usr/local/bin/docker-machine
```


```
# sudo curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.7.0/docker-machine-driver-kvm -o /usr/local/bin/docker-machine-driver-kvm
```

```
# sudo chmod +x /usr/local/bin/docker-machine-driver-kvm
```

```
$ docker-machine create \
        --driver kvm \
        --kvm-network docker-machines \
        --kvm-boot2docker-url https://github.com/rancher/k3os/releases/download/v0.11.0/k3os-amd64.iso \
        CB-K3OS
Running pre-create checks...
Creating machine...
(CB-K3OS) Downloading /home/ubuntu/.docker/machine/cache/boot2docker.iso from https://github.com/rancher/k3os/releases/download/v0.11.0/k3os-amd64.iso...
(CB-K3OS) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%
(CB-K3OS) Unable to determine VM's IP address, did it fail to boot?
Waiting for machine to be running, this may take a few minutes...
Detecting operating system of created instance...
Waiting for SSH to be available...
Error creating machine: Error detecting OS: Too many retries waiting for SSH to be available.  Last error: Maximum number of retries (60) exceeded
```

```
$ docker-machine ls
NAME      ACTIVE   DRIVER   STATE     URL                         SWARM   DOCKER    ERRORS
CB-K3OS   -        kvm      Running   tcp://192.168.42.247:2376           Unknown   Unable to query docker version: Cannot connect to the docker engine endpoint
```

# References

https://blog.scottlowe.org/2017/11/24/using-docker-machine-kvm-libvirt/
