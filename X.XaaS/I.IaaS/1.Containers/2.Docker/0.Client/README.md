# Docker Client

## :bookmark:

Docker Client ( `docker` ) est une application qui permet d'interagir avec le moteur docker ( `docker engine` ) ou plus simplement le serveur docker.

Le `docker` CLI (Command Level Interface) permet de lancer les instructions permettnt de gérer les conteneurs, les volumes, le réseau et les images. 

## :o: Installation de docker CLI 


:computer: Windows (PowerShell) avec [choco](https://chocolatey.org/)

:bulb:  avec [HomeBrew](https://formulae.brew.sh)

```
choco install docker-cli
```

:apple: MacOS :m::one: (HomeBrew)

```
brew install docker
```

## :whale: Commandes pour "entrer" dans les trois dockers

- [ ] Créer un [docker context](https://docs.docker.com/engine/context/working-with-contexts/)

   :bulb: :id: est votre numéro d'étudiant

`docker context create context-`:id:` --docker "host=ssh://ubuntu@10.13.237.X"`


:warning: S'assurer que la clé privée `SSH` est visible par l'agent `ssh-agent` avec la commande `ssh-add ~/.ssh/<ma cle privee>`

- [ ] Lister les contextes

```
docker context ls
```

- [ ] Selectionner un contexte 

`docker context use context-`:id:`

- [ ] Vérifier que le contexte est sélectionné (repérer l':star:)

```
NAME                         DESCRIPTION                               DOCKER ENDPOINT                                     KUBERNETES ENDPOINT                                    ORCHESTRATOR
...
context-300098957    *                                          ssh://ubuntu@10.13.237.254                                            
```


## :a: Utilisation


:m: Gestion des Conteneurs

- [ ] Liste des conteneurs existants

```
docker container ls
```

- [ ] Liste de tous les conteneurs existants, et zombies

```
docker container ls --all
```

:m: Gestion des volumes (disques)

```
docker volume ls
```

:m: Gestion des images (image ISO)

```
docker image ls
```

:m: Gestion du réseau

```
docker network ls
```
