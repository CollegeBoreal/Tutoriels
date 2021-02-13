## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (métal)

  Le 'Driver' Docker à utilser est le generique `generic`
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
$ systemctl status docker # doit être actif - Active (running)
```

* sinon démarrer le service

```
$ sudo systemctl enable docker
```


### :two: Permissions

* Lister les conteneurs donne une erreur de permission quand à l'accès des [socket-files](https://askubuntu.com/questions/372725/what-are-socket-files)

```
$ docker container ls
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

* Pour enlever l'erreur rajouter votre utilisateur au groupe docker

```
$ sudo usermod --append --groups docker $USER
```

* Pour verifier, sortir du terminal et lancer la commande `groups`, `docker` doit apparaitre

:warning: pour forcer le group il faut sortir de la session avec `exit` et revenir dans le serveur

```
$ groups
ubuntu adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
```

