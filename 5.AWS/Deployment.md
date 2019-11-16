# AWS Deploiement

#### Avec Docker, Lancer une nouvelle machine sous `git bash` ou un `terminal`

:pushpin: par défaut (t2.micro) - :dollar:

```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        cb-dev
```

Avec une instance plus large
```
$ docker-machine create --driver amazonec2  \ 
                        --amazonec2-instance-type t2.small \
                        --amazonec2-security-group default \
                        cb-dev
```

Avec un sous-réseau
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-vpc-id vpc-yyyy \
                        --amazonec2-subnet-id subnet-yyyy \
                        --amazonec2-zone b \
                        cb-dev
```

Avec un autre profil
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-security-group default \
                        --amazonec2-iam-instance-profile mon-profil \  
                        cb-dev
```

Avec une paire de clés
```
$ docker-machine create --driver amazonec2  \
                        --amazonec2-security-group default \
                        --amazonec2-keypair-name test \
                        --amazonec2-ssh-keypath ~/.aws \
                        cb-dev
```


