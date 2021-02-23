# Docker Machine

## :m: Utilisation

`docker-machine` est un outil pour `devops` permettant la création de machine virtuelle.

https://docs.docker.com/machine/get-started-cloud/#drivers-for-cloud-providers


## :zero: Prérequis

* Installer Docker Machine - avec un Package Manager

:pushpin: :computer: Windows

```
PS > choco install docker-machine
```

:pushpin: :strwaberry: MacOS

```
PS > brew install docker-machine
```

* [Installer Docker Machine - Manuellement](https://docs.docker.com/v17.09/machine/install-machine/)   

:pushpin: :pinguin: Linux

```
$ base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo mv /tmp/docker-machine /usr/local/bin/docker-machine &&
  chmod +x /usr/local/bin/docker-machine
```


## :one: Hypervisor or Cloud Environment

- [x] [0.Generic](0.Generic/README.md)

- [x] [1.OpenStack](1.OpenStack/README.md)

- [x] [2.Hyper-V](2.Hyper-V/README.md)

## :two: Embedded Linux


| Hypervisor | Distribution                          | 
|------------|---------------------------------------| 
| HyperV     | tinycorelinux.net                     | 
| HyperKit   | https://github.com/linuxkit/linuxkit  | 




# Références 

** Docker Machine Examples

http://www.macadamian.com/2017/01/24/docker-machine-basic-examples/


## :whale: Cheat Sheets

$ docker-machine `command` => [Cheat Sheet - Machine](http://files.zeroturnaround.com/pdf/zt_docker_cheat_sheet.pdf)


