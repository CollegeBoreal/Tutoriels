# KVM 


https://github.com/dhiltgen/docker-machine-kvm

## :o: Prérequis

:pushpin: Installer Docker-Machine

```
$ yum install docker-machine
```

:pushpin: Installer KVM

https://help.ubuntu.com/community/KVM/Installation


## :zero: Create Virtual Switch


:pushpin: As t'on besoin de ceci?

## :one: Créer sa VM


```
$ docker-machine create --driver kvm CB-KVM
```


## :two: Activer sa VM

```
$ eval $(docker-machine env CB-KVM)
```

# References

https://help.ubuntu.com/community/KVM/Installation

https://access.redhat.com/documentation/en-us/red_hat_container_development_kit/3.0/html/installation_guide/docker-machine-driver-install
