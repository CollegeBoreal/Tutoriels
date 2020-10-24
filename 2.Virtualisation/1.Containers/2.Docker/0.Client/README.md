# Docker Client

## :bookmark:

Docker Client ( `docker` ) est une application qui permet d'interagir avec le moteur docker ( `docker engine` ) ou plus simplement le serveur docker.

Le `docker` CLI (Command Level Interface) permet de lancer les instructions permettnt de gérer les conteneurs, les volumes, le réseau et les images. 

## :o: Installation de docker CLI

:computer: Windows

```
PS > choco install docker-cli
```

:apple: MacOS

```
% brew cask install docker
```

## :a: Utilisation


:m: Gestion des Conteneurs

- [ ] Liste des conteneurs existants

```
$ docker container ls
```

- [ ] Liste de tous les conteneurs existants, et zombies

```
$ docker container ls --all
```

:m: Gestion des volumes

```
$ docker volume ls
```

:m: Gestion des images

```
$ docker image ls
```

:m: Gestion du réseau

```
$ docker network ls
```
