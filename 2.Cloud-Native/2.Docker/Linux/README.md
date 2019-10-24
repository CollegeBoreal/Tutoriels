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


```
$ docker container ls
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

```
$ sudo -i

# usermod --append --groups docker ubuntu
```




https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

** dans le cas échéant, installer `curl` si non présent

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

## use Docker as a non-root user (i.e. substituer ubuntu)

# usermod --append --groups docker ubuntu
```

## :two: Authoriser l'acces sans mot de passe

```
$ sudo visudo   # edit sudo config file
```

### Rajouter la ligne ci-dessous en changeant votre utilisateur (i.e. substituer ubuntu)
```
ubuntu ALL=(ALL) NOPASSWD: ALL
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
