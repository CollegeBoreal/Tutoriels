## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (métal)

  Le 'Driver' Docker à utilser est le generique `generic`
```

## :a: Sur le serveur

### :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)

** dans le cas échéant, installer `curl` si non présent (suivre les instructions du serveur)

* Installer `Docker` avec le [`convenient script`](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) dans un environnement de  développement

```
$ sudo curl -sSL https://get.docker.com | sh
```

* Verifier que le service fonctionne

```
$ systemctl status docker # doit être actif - Active (running)
```

* Permettre l'accès au service au démarrage de la machine

```
$ sudo systemctl enable docker
```


### :two: Permissions

* Lister les conteneurs donne une erreur de permission quand à l'accès des [socket-files](https://askubuntu.com/questions/372725/what-are-socket-files)

Les [socket-files](https://askubuntu.com/questions/372725/what-are-socket-files) sont utilisé pour communiquer entre applications gràce aux [IPC](https://en.wikipedia.org/wiki/Inter-process_communication)

```
$ docker container ls
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: 
Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: 
dial unix /var/run/docker.sock: connect: permission denied
```

* Permettre l'accès au `socket file` en rajoutant votre utilisateur au groupe `docker`

```
$ sudo usermod --append --groups docker $USER
```

* Pour verifier, sortir du terminal et lancer la commande `groups`, `docker` doit apparaitre

:warning: pour forcer le group il faut sortir de la session avec `exit` et revenir dans le serveur

```
$ groups
ubuntu adm cdrom sudo dip plugdev lxd docker
```

