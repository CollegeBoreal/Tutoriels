# Docker Engine with `snap`

:bookmark: Autre methode d'installation (plus facile) -- Ne pas utiliser


## :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)


```
$ docker

Command 'docker' not found, but can be installed with:

sudo snap install docker     # version 18.06.1-ce, or
sudo apt  install docker.io  # version 19.03.2-0ubuntu1

See 'snap info docker' for additional versions.
```


* Installer avec apt 

:warning: installer une version officielle (18.06.1-ce) car une autre risque de ne pas marcher (19.03.2-0ubuntu1)

```
$ sudo snap install docker     # version 18.06.1-ce
```

## (optionnel) Enlever un package

```
$ dpkg --list | grep docker
ii  docker.io      19.03.2-0ubuntu1      amd64     Linux container runtime
```

```
$ sudo apt-get remove --purge 19.03.2-0ubuntu1
```


## DNS

https://linuxize.com/post/how-to-set-dns-nameservers-on-ubuntu-18-04/
