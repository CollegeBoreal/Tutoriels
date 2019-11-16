# AWS Deploiement

#### Avec Docker, Lancer une nouvelle machine sous `git bash` ou un `terminal`

:pushpin: par défaut (t2.micro) - :heavy_dollar_sign:

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

:pushpin: Avec un autre profil
```
$ docker-machine create --driver amazonec2 \
                        --amazonec2-security-group default \
                        --amazonec2-iam-instance-profile mon-profil \  
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


