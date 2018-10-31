# Docker

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

https://download.docker.com/ (installer docker sans login-wall)


## Docker Engine

## 1) Installer Docker sur une machine Ubuntu 

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

** dans le cas échéant, installer `curl` si non présent

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

## use Docker as a non-root user

# usermod -aG docker ubuntu

$ sudo service docker start    # or systemctl enable docker

$ sudo service docker status   # or systemctl status docker

```

## Authoriser l'acces sans mot de passe

```
$ sudo visudo   # edit sudo config file
```

### Rajouter la ligne ci-dessous en changeant votre utilisateur (i.e. substituer ubuntu)
```
ubuntu ALL=(ALL) NOPASSWD: ALL
```

## 2) Creer votre `pseudo` machine virtuelle

https://docs.docker.com/v17.09/machine/drivers/generic

** N'oubliez pas de copier votre clé publique RSA sur la machine hôte

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.6 \
                        --generic-ssh-user=ubuntu \
                        --generic-ssh-key ~/.ssh/id_rsa \
                        genericVM
```

### enlever la clé pour recommencer l'operation si erreur il y a

```
$ rm -rf ~/.docker/machine/machines/genericVM
```

## 3) Ouvrir le port en faisant un trou dans le pare-feu

https://www.digitalocean.com/community/tutorials/how-to-configure-the-linux-firewall-for-docker-swarm-on-ubuntu-16-04

** Par exemple pour MySQL

Put the whole
 ```
$ ufw allow 3306/tcp
$ sudo ufw allow 3306/tcp
```
 Reloading chain
 ```
$ ufw reload
$ sudo ufw reload
```
 enabling UFW
 ```
$ ufw enable
$ sudo ufw enable
```

### Redémarer le service Docker

# Fix API version

https://stackoverflow.com/questions/43072703/client-is-newer-than-server-client-api-version-1-24-server-api-version-1-21

```
$ docker ps
```
  Error response from daemon: client is newer than server (client API version: 1.24, server API version: 1.21)

```
$ export DOCKER_API_VERSION=1.21
```
