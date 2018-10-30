# Docker

## Prérequis

* [Installer Docker](https://docs.docker.com/engine/getstarted/step_one/#step-1-get-docker)   

https://download.docker.com/ (installer docker sans login-wall)


## Docker Engine

## Installer Docker sur une VM Ubuntu 

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script

```
$ sudo -i

# curl -sSL https://get.docker.com | sh

## use Docker as a non-root user

# usermod -aG docker ubuntu

$ sudo service docker start    # or systemctl enable docker

$ sudo service docker status   # or systemctl status docker

```

https://docs.docker.com/v17.09/machine/drivers/generic

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.6 \
                        --generic-ssh-user=root \
                        --generic-ssh-key ~/.ssh/10.13.237.6_rsa 
                        genericVM
```


