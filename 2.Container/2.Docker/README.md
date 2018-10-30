# Docker

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

https://download.docker.com/ (installer docker sans login-wall)



https://docs.docker.com/v17.09/machine/drivers/generic

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.6 \
                        --generic-ssh-user=root \
                        --generic-ssh-key ~/.ssh/10.13.237.6_rsa 
                        genericVM
```



