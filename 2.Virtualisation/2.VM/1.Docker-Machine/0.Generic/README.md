# 0.Generic

La procédure suivante permet de gérer un moteur Docker (Docker Engine) installé sur un serveur à partir d'un client à distance grace à `Docker Machine`.


## :a: Préparer le serveur Linux où est installé `Docker Engine`

:bookmark: Authoriser l'acces à distance sans mot de passe quand on utilise `ssh`

:warning: Pour prévenir l'erreur de création de `Docker Engine Generic` suivante sur la machine cliente:

```
Error creating machine: Error running provisioning: ssh command error:
command : sudo hostname mon_serveur_ubuntu && echo "mon_serveur_ubuntu" | sudo tee /etc/hostname
err     : exit status 1
output  : sudo: no tty present and no askpass program specified
```

https://github.com/docker/machine/issues/1569

- [ ] Il faut authoriser votre utilisateur sur le serveur Linux :id: à etre un `sudoer`

```
$ sudo visudo   # edit sudo config file
```

  :bangbang: `Ajouter` la ligne ci-dessous en changeant votre utilisateur :id: Linux
  
  :warning: substituer `ubuntu` par votre utilisateur :id: Linux

  ```
  ubuntu ALL=(ALL:ALL) NOPASSWD: ALL
  ```



## :b: Sur le client 

:bookmark: i.e. de `git bash` Windows ou de votre Terminal Mac

### :one: Installer la clé publique de la machine client à utiliser (d'où les commandes docker seront lancées) 

- [ ] générer votre clé privée/publique (~/.ssh/id_rsa)

```
$ ssh-keygen
```

* Copier la clé publique vers le Serveur ou est installé `Docker Engine` 

  :warning: substituer `ubuntu` et l'adresse IP `10.13.237.16` par vos propres informations (votre :id: et Adresse IP)

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@10.13.237.16  
```


### :two: Creer votre `pseudo` machine virtuelle

https://docs.docker.com/v17.09/machine/drivers/generic

:warning: substituer l'utilisateur `ubuntu`, l'adresse IP `10.13.237.16` et le nom `nom_de_ma_machine` par vos propres informations (votre :id:, Adresse IP et votre nom de machine :desktop:)

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.16 \
                        --generic-ssh-user=ubuntu \
                        --generic-ssh-key ~/.ssh/id_rsa \
                        nom_de_ma_machine
```

* Si erreur 
```
Error creating machine: Error detecting OS: OS type not recognized
```

voir [Error :strawberry:](RaspberryPi.md) 

### :x: enlever la clé pour recommencer l'operation si erreur il y a

```
$ rm -rf ~/.docker/machine/machines/nom_de_ma_machine
```

:warning: Changement d'adresse IP, generant une erreur de certificat `x509` 

```
Unknown   Unable to query docker version: Get https://192.168.1.10:2376/v1.15/version: x509: certificate is valid for 10.13.237.16, not 192.168.1.10
```

:pushpin: regénérer le certificat

```
$ docker-machine regenerate-certs nom_de_ma_machine
```
