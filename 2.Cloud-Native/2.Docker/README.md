# Docker 

## :whale: [Cheat Sheet](https://www.docker.com/sites/default/files/Docker_CheatSheet_08.09.2016_0.pdf)

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

https://download.docker.com/ (installer docker sans login-wall)


## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (metal)

  Le 'Driver' Docker a utilser est le generique `gereric`
```


## :one: Installer Docker sur une machine Ubuntu 

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

** dans le cas échéant, installer `curl` si non présent

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

## use Docker as a non-root user (i.e. substituer ubuntu)

# usermod -aG docker ubuntu

$ systemctl enable docker # or sudo service docker start 

$ systemctl status docker # or sudo service docker status

```

## :two: Authoriser l'acces sans mot de passe

```
$ sudo visudo   # edit sudo config file
```

### Rajouter la ligne ci-dessous en changeant votre utilisateur (i.e. substituer ubuntu)
```
ubuntu ALL=(ALL) NOPASSWD: ALL
```

## :three: Installer la clé publique de la machine utilisé comme Docker Client

* generer votre cle privee/publique (~/.ssh/id_rsa)

```
$ ssh-keygen
```

* Serveur ou est installé Docker Engine (i.e. substituer ubuntu)

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@10.13.237.16  
```

## 3) Creer votre `pseudo` machine virtuelle

https://docs.docker.com/v17.09/machine/drivers/generic

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.16 \
                        --generic-ssh-user=ubuntu \
                        --generic-ssh-key ~/.ssh/id_rsa \
                        labo16
```

### enlever la clé pour recommencer l'operation si erreur il y a

```
$ rm -rf ~/.docker/machine/machines/labo16
```

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
