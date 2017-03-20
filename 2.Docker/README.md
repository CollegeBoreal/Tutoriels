# Docker

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

## Partage de clés

* Outil `temporaire` permettant de copier et sauvegarder les clés crées par `docker-machine`  
  l'outil permet également de récupérer les clés sur une autre machine (i.e. MacOS => Windows et vice-versa)   
https://www.npmjs.com/package/machine-share

## Récupérer les clés du Nuage

  https://www.canarie.ca/fr/nuage/colleges-et-ecoles-polytechniques/
  
  > Le Collège bénéficie du support de Canarie pour une partie de son Infrastruture de test.  
  > Les étudiants de derniére année sont invités à appliquer à ATIR pour bénéficier d'un compte

Établir les variables d'environnements

* Cloner le projet comportant les clés
```
$ cd ~/Developer
$ git clone git@github.com:CollegeBoreal/canarie.ca.git
```

* Dans Git Bash, setter l'environnement
```
$ source ~/Developer/canarie.ca/collège-boréal-openrc-quebec.sh
```

## Creer la Machine Docker dans OpenStack

```
$ docker-machine \
  create --driver openstack \
  --openstack-flavor-name m1.tiny \
  --openstack-image-name "Ubuntu 14.04" \
  --openstack-ssh-user ubuntu \
  --openstack-floatingip-pool nova \
  --openstack-sec-groups default  \
  --openstack-nova-network \
  --openstack-net-name nova \
  CB-<numero étudiant>
  ```

## pointer à l'environnement OpenStack

```
$ eval $(docker-machine env CB-<numero étudiant>)
```

## Créer un serveur test

```
$ docker run --name nginx -d -p 80:80 nginx
```
