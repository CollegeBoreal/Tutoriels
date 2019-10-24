## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (métal)

  Le 'Driver' Docker à utilser est le generique `gereric`
```


## :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)

* Installer avec apt

```
$ sudo apt  install docker.io  # version 19.03.2-0ubuntu1
```

* demarrer le service

```
$ sudo systemctl start docker
```

* Verifier le service

```
$ systemctl status docker # doit être actif
```

## :two: Permissions

* Lister les conteneurs donne une erreur de permission

```
$ docker container ls
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

* Pour enlever l'erreur rajouter votre utilisateur au groupe docker

```
$ sudo usermod --append --groups docker $USER
```

* Pour verifier, sortir du terminal et lancer la commande `groups`, `docker` doit apparaitre

```
$ groups
ubuntu adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
```

## :three: Installer la clé publique de la machine client à utiliser (d'où les commandes docker seront lancées) 

i.e. de `git bash` Windows ou de votre Terminal Mac

* generer votre cle privee/publique (~/.ssh/id_rsa)

```
$ ssh-keygen
```

* Copier la clé publique vers le Serveur ou est installé Docker Engine (i.e. substituer ubuntu et l'adresse IP 10.13.237.16)

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@10.13.237.16  
```

## 3) Creer votre `pseudo` machine virtuelle

https://docs.docker.com/v17.09/machine/drivers/generic

(i.e. substituer l'utilisateur ubuntu et l'adresse IP 10.13.237.16)

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



# Autre methode d'installation (plus difficile) 

## :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)


https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

** dans le cas échéant, installer `curl` si non présent

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

## use Docker as a non-root user (i.e. substituer ubuntu)

# usermod --append --groups docker ubuntu
```

## :two: Authoriser l'acces sans mot de passe

** En cas d'erreur de création de `Docker Engine Generic` suivante

```
Error creating machine: Error running provisioning: ssh command error:
command : sudo hostname labo16 && echo "labo16" | sudo tee /etc/hostname
err     : exit status 1
output  : sudo: no tty present and no askpass program specified
```

https://github.com/docker/machine/issues/1569

Authoriser votre utilisateur à etre un `sudoer`


```
$ sudo visudo   # edit sudo config file
```

### Rajouter la ligne ci-dessous en changeant votre utilisateur (i.e. substituer ubuntu)
```
ubuntu ALL=(ALL) NOPASSWD: ALL
```

# Enlever un package

```
$ dpkg --list | grep docker
ii  docker.io                             19.03.2-0ubuntu1                        amd64        Linux container runtime
```

```
$ sudo apt-get remove --purge 19.03.2-0ubuntu1
```
