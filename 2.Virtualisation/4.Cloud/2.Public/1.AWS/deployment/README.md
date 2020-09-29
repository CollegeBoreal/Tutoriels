# AWS Deploiement avec docker-machine

#### :m: Avec Docker Machine, Lancer une nouvelle machine sous `git bash` ou un `terminal`

[Ubuntu 18.0.4 LTS ami-00a208c7cdba991ea](https://console.aws.amazon.com/ec2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-00a208c7cdba991ea)

###### :warning: Ne choisir qu'une seule machine virtuelle

:pushpin: par défaut (t2.micro) - :heavy_dollar_sign:  :bangbang: À utiliser en priorité pour éviter de perdre vos crédits

```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        --amazonec2-ami ami-00a208c7cdba991ea \
                        cb-aws-dev
```

:pushpin: Avec une instance plus large - :heavy_dollar_sign::heavy_dollar_sign: 
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-instance-type t2.small \
                        --amazonec2-security-group default \
                        cb-aws-dev
```

:pushpin: Avec un sous-réseau
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-vpc-id vpc-yyyy \
                        --amazonec2-subnet-id subnet-yyyy \
                        --amazonec2-zone b \
                        cb-aws-dev
```

:pushpin: Avec une paire de clés a installer
```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        --amazonec2-keypair-name test \
                        --amazonec2-ssh-keypath ~/.aws \
                        cb-aws-dev
```

#### :m: Tester l'installation

```
$ docker-machine ls
NAME      ACTIVE   DRIVER      STATE     URL                         SWARM   DOCKER        ERRORS
cb-aws-dev   -        amazonec2   Running   tcp://18.500.509.149:2376           v18.09.0      
```

:pushpin: activer la machine `cb-aws-dev`

```
$ eval $(docker-machine env cb-aws-dev)
```

:pushpin: vérifier l'activation . :star: s'affiche

```
$ docker-machine ls
NAME      ACTIVE   DRIVER      STATE     URL                         SWARM   DOCKER        ERRORS
cb-aws-dev   *        amazonec2   Running   tcp://18.205.189.149:2376           v18.09.0      
```


:pushpin: désactiver la machine `cb-aws-dev`

```
$ eval $(docker-machine env --unset)
```

#### :m: Utiliser les commandes `docker` habituelles
```
$ docker container ls
```

# Example

[![image](http://img.youtube.com/vi/ZUKmVy0p7dc/0.jpg)](https://www.youtube.com/watch?v=ZUKmVy0p7dc)
