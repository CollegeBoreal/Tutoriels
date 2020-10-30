## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (métal)

  Le 'Driver' Docker à utilser est le generique `gereric`
```

## :a: Sur le serveur

### :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

** dans le cas échéant, installer `curl` si non présent (suivre les instructions du serveur)

* Installer avec le script `Docker`

```
$ sudo curl -sSL https://get.docker.com | sh
```

* Verifier que le service fonctionne

```
$ systemctl status docker # doit être actif
```

* sinon démarrer le service

```
$ sudo systemctl enable docker
```


### :two: Permissions

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

:warning: pour forcer le group il faut parfois rebooter la machine

```
$ groups
ubuntu adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
```

## :three: Authoriser l'acces à distance sans mot de passe quand on utilise `ssh`

:warning: Pour prévenir l'erreur de création de `Docker Engine Generic` suivante:

```
Error creating machine: Error running provisioning: ssh command error:
command : sudo hostname labo16 && echo "labo16" | sudo tee /etc/hostname
err     : exit status 1
output  : sudo: no tty present and no askpass program specified
```

https://github.com/docker/machine/issues/1569

- [ ] Authoriser votre utilisateur à etre un `sudoer`

```
$ sudo visudo   # edit sudo config file
```

  :>>: `Ajouter` la ligne ci-dessous en changeant votre utilisateur 
  
  :warning: substituer ubuntu par votre utilisateur

  ```
  ubuntu ALL=(ALL:ALL) NOPASSWD: ALL
  ```

