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
Error with pre-create check: "no External vswitch found. A valid vswitch must be available for this command to run. Check https://docs.docker.com/machine/drivers/hyper-v/"
```










# Références 

## Docker Machine Examples

http://www.macadamian.com/2017/01/24/docker-machine-basic-examples/

