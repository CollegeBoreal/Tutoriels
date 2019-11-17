# AWS Deploiement

#### :m: Avec Docker, Lancer une nouvelle machine sous `git bash` ou un `terminal`

:pushpin: par défaut (t2.micro) - :heavy_dollar_sign:  :bangbang: À utiliser en priorité

```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        cb-dev
```

:pushpin: Avec une instance plus large - :heavy_dollar_sign::heavy_dollar_sign:
```
$ docker-machine create --driver amazonec2  \ 
                        --amazonec2-instance-type t2.small \
                        --amazonec2-security-group default \
                        cb-dev
```

:pushpin: Avec un sous-réseau
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-vpc-id vpc-yyyy \
                        --amazonec2-subnet-id subnet-yyyy \
                        --amazonec2-zone b \
                        cb-dev
```

:pushpin: Avec une paire de clés a installer
```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        --amazonec2-keypair-name test \
                        --amazonec2-ssh-keypath ~/.aws \
                        cb-dev
```

#### :m: Tester l'installation

```
$ docker-machine ls
NAME      ACTIVE   DRIVER      STATE     URL                         SWARM   DOCKER        ERRORS
cb-dev   -        amazonec2   Running   tcp://18.500.509.149:2376           v18.09.0      
```

:pushpin: activer la machine `cb-dev`

```
$ eval $(docker-machine env cb-dev)
```

:pushpin: vérifier l'activation . :star: s'affiche

```
$ docker-machine ls
NAME      ACTIVE   DRIVER      STATE     URL                         SWARM   DOCKER        ERRORS
cb-dev   *        amazonec2   Running   tcp://18.205.189.149:2376           v18.09.0      
```


:pushpin: désactiver la machine `cb-dev`

```
$ eval $(docker-machine env --unset)
```

#### :m: Utiliser les commandes `docker` habituelles
```
$ docker container ls
```
