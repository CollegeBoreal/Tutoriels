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

## Creer la connection d'un PC distant

https://docs.docker.com/v17.09/machine/drivers/generic

* Utiliser votre clé privée et publique RSA

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.6 \
                        --generic-ssh-user=root \
                        --generic-ssh-key ~/.ssh/id_rsa \
                        genericVM
```

### enlever la cle pour recommencer l'operation

```
$ rm -rf ~/.docker/machine/machines/genericVM
```

https://www.digitalocean.com/community/tutorials/how-to-configure-the-linux-firewall-for-docker-swarm-on-ubuntu-16-04
 ```
$ ufw allow 3306/tcp
$ sudo ufw allow 3306/tcp
```
 Reload chain
 ```
$ ufw reload
$ sudo ufw reload
```
 enable
 ```
$ ufw enable
$ sudo ufw enable
```
 restart docker

# Fix API version

https://stackoverflow.com/questions/43072703/client-is-newer-than-server-client-api-version-1-24-server-api-version-1-21

```
$ docker ps
```
  Error response from daemon: client is newer than server (client API version: 1.24, server API version: 1.21)

```
$ export DOCKER_API_VERSION=1.21
```
