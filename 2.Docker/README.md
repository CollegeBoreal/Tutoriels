# Docker

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   
* [Récupérer les clés du Nuage]

## Établir les variables d'environnements

Cloner le projet comportant les clés
```
$ cd ~/Developer
$ git clone git@github.com:CollegeBoreal/canarie.ca.git
```

Dans Git Bash, setter l'environnement
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
