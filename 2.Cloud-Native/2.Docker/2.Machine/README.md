# Docker Machine

## :whale: Cheat Sheets

$ docker-machine `command` => [Cheat Sheet - Machine](http://files.zeroturnaround.com/pdf/zt_docker_cheat_sheet.pdf)

https://docs.docker.com/machine/get-started-cloud/#drivers-for-cloud-providers

## Prérequis

* Installer Docker Machine - avec un Package Manager

:pushpin: Windows

```
PS > choco install docker-machine
```


* [Installer Docker Machine - Manuellement](https://docs.docker.com/v17.09/machine/install-machine/)   

:pushpin: MacOS

```
PS > brew install docker-machine
```

## Machine

:one: Hyper-V

```
PS > docker-machine create --driver hyperv vm
Creating CA: C:\Users\300098957\.docker\machine\certs\ca.pem
Creating client certificate: C:\Users\300098957\.docker\machine\certs\cert.pem
Running pre-create checks...
Error with pre-create check: "Hyper-v commands have to be run as an Administrator"
```

```
PS > docker-machine create --driver hyperv vm
Running pre-create checks...
Error with pre-create check: "no External vswitch found. A valid vswitch must be available for this command to run. 
Check https://docs.docker.com/machine/drivers/hyper-v/"
```

* Trouver la Switch Virtuelle


```
PS > Get-VMSwitch

Name           SwitchType NetAdapterInterfaceDescription
----           ---------- ------------------------------
Default Switch Internal
```

* Creer la machine virtuelle avec la Switch Virtuelle

```
PS > docker-machine create --driver hyperv --hyperv-virtual-switch "Default Switch" vm
Running pre-create checks...
(vm) Image cache directory does not exist, creating it at C:\Users\300098957\.docker\machine\cache...
(vm) No default Boot2Docker ISO found locally, downloading the latest release...
(vm) Latest release for github.com/boot2docker/boot2docker is v19.03.5
(vm) Downloading C:\Users\300098957\.docker\machine\cache\boot2docker.iso from https://github.com/boot2docker/boot2docker/releases/download/v19.03.5/boot2docker.iso...
(vm) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%
Creating machine...
(vm) Copying C:\Users\300098957\.docker\machine\cache\boot2docker.iso to C:\Users\300098957\.docker\machine\machines\vm\boot2docker.iso...
(vm) Creating SSH key...
(vm) Creating VM...
(vm) Using switch "Default Switch"
(vm) Creating VHD
(vm) Starting VM...
(vm) Waiting for host to start...
Waiting for machine to be running, this may take a few minutes...
Detecting operating system of created instance...
Waiting for SSH to be available...
Detecting the provisioner...
Provisioning with boot2docker...
Copying certs to the local machine directory...
Copying certs to the remote machine...
Setting Docker configuration on the remote daemon...
Checking connection to Docker...
Error creating machine: Error checking the host: Error checking and/or regenerating the certs: There was an error validating certificates for host "172.17.100.172:2376": remote error: tls: bad certificate
You can attempt to regenerate them using 'docker-machine regenerate-certs [name]'.
Be advised that this will trigger a Docker daemon restart which might stop running containers.









# Références 

## Docker Machine Examples

http://www.macadamian.com/2017/01/24/docker-machine-basic-examples/

