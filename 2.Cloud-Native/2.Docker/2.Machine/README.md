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
 get-vmswitch

Name                   SwitchType NetAdapterInterfaceDescription
----                   ---------- ------------------------------
Primary Virtual Switch External   QLogic BCM5709C Gigabit Ethernet (NDIS VBD Client) #4
nat                    Internal
```

* Creer la machine virtuelle avec la Switch Virtuelle

```
PS >  docker-machine create --driver hyperv --hyperv-virtual-switch "Primary Virtual Switch" vm
Creating CA: C:\Users\Brice\.docker\machine\certs\ca.pem
Creating client certificate: C:\Users\Brice\.docker\machine\certs\cert.pem
Running pre-create checks...
(vm) Image cache directory does not exist, creating it at C:\Users\Brice\.docker\machine\cache...
(vm) No default Boot2Docker ISO found locally, downloading the latest release...
(vm) Latest release for github.com/boot2docker/boot2docker is v19.03.5
(vm) Downloading C:\Users\Brice\.docker\machine\cache\boot2docker.iso from https://github.com/boot2docker/boot2docker/releases/download/v19.03.5/boot2docker.iso...
(vm) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%
Creating machine...
(vm) Copying C:\Users\Brice\.docker\machine\cache\boot2docker.iso to C:\Users\Brice\.docker\machine\machines\vm\boot2docker.iso...
(vm) Creating SSH key...
(vm) Creating VM...
(vm) Using switch "Primary Virtual Switch"
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
Docker is up and running!
To see how to connect your Docker Client to the Docker Engine running on this virtual machine, run: C:\ProgramData\chocolatey\lib\docker-machine\bin\docker-machine.exe env vm
```

* Lister les machines virtuelles

```
PS C:\Users\Brice> docker-machine ls
NAME   ACTIVE   DRIVER   STATE     URL                      SWARM   DOCKER     ERRORS
vm     -        hyperv   Running   tcp://10.13.4.242:2376           v19.03.5
```


```
$ docker-machine env fianarantsoa
export DOCKER_TLS_VERIFY="0"
export DOCKER_HOST="tcp://172.17.100.165:2376"
export DOCKER_CERT_PATH="/Users/300098957/.docker/machine/machines/vm"
export DOCKER_MACHINE_NAME="vm"
# Run this command to configure your shell: 
# eval $(docker-machine env fianarantsoa)
```





# Références 

## Docker Machine Examples

http://www.macadamian.com/2017/01/24/docker-machine-basic-examples/

