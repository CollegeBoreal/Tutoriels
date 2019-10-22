# Docker 

## :whale: Cheat Sheets

$ docker `command` => [Cheat Sheet](https://www.docker.com/sites/default/files/Docker_CheatSheet_08.09.2016_0.pdf)

[Cheat Sheet - Machine](http://files.zeroturnaround.com/pdf/zt_docker_cheat_sheet.pdf)

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

https://download.docker.com/ (installer docker sans login-wall)


## Docker Engine

```
  Ce tutoriel explique comment installer un Moteur Docker (Docker Engine) sur une plateforme
```

| Plateforme           | Commentaires .               |
|----------------------|------------------------------|
| [Linux](Linux)       | Bare Metal - Generic .       |
| [Hyper-V](Hyper-V)   | Windows Type 1 Hypervisor    |
| [HyperKit](HyperKit) | MacOS Type 1 Hypervisor      |
| [Toolbox](Toolbox)   | VirtualBox Type 2 Hypervisor |


# Références 

## Fix API version

https://stackoverflow.com/questions/43072703/client-is-newer-than-server-client-api-version-1-24-server-api-version-1-21

```
$ docker ps
```
  Error response from daemon: client is newer than server (client API version: 1.24, server API version: 1.21)

```
$ export DOCKER_API_VERSION=1.21
```

## Docker Machine Examples

http://www.macadamian.com/2017/01/24/docker-machine-basic-examples/
