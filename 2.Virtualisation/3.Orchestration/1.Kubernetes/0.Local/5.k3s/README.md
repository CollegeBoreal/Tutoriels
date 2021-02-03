# K3s

Lightweight Kubernetes


:bulb: Example de création de machine virtuelle sous HYPER-V en utilisant une image `boot2docker` provenant de [`RancherOS`](https://rancher.com/docs/os/v1.x/en/installation/workstation/docker-machine/)

```powershell
PS> docker-machine create --driver hyperv `
                          --hyperv-boot2docker-url https://github.com/rancher/os/releases/download/v1.5.7/rancheros-hyperv.iso `
                          CB-K3S1
```



```powershell
PS> docker-machine ssh CB-K3S1
```

- [ ] Lister les [services](https://rancher.com/docs/os/v1.x/en/system-services/) de RancherOS 

```
$ sudo ros service list
```

- [ ] Utiliser system-docker

```
$ sudo system-docker image ls
REPOSITORY                  TAG                   IMAGE ID            CREATED             SIZE
rancher/os-syslog           v1.5.7                a0fef3d8aeaa        6 weeks ago         47MB
rancher/os-logrotate        v1.5.7                74ba6f426624        6 weeks ago         47MB
rancher/os-console          v1.5.7                1b76de33abbe        6 weeks ago         47MB
rancher/os-acpid            v1.5.7                0d8a7c9988f3        6 weeks ago         47MB
rancher/os-base             v1.5.7                feeafd2573ea        6 weeks ago         47MB
rancher/os-docker           19.03.14              fa847775e813        7 weeks ago         209MB
rancher/os                  v1.5.6                6591109dda7c        8 months ago        164MB
rancher/os-hypervvmtools    v4.14.138-rancher-1   88df9ce674e0        18 months ago       74.1MB
rancher/container-crontab   v0.4.0                7a2485d285d9        3 years ago         12.9MB
```

- [ ] Log

```
$ cat /var/log/system-docker.log
```

```
$ sudo system-docker container  ps
CONTAINER ID        IMAGE                                          COMMAND                  CREATED             STATUS              PORTS               NAMES
cb2c2718af7c        rancher/os-docker:19.03.14                     "ros user-docker"        6 hours ago         Up 5 hours                              docker
2d3d98be49ab        rancher/os-console:v1.5.7                      "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              console
2fbb911412a7        rancher/os-base:v1.5.7                         "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              ntp
feb50d78ce4f        rancher/os-hypervvmtools:v4.14.138-rancher-1   "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              hyperv-vm-tools
9eb7bdabe71f        rancher/os-base:v1.5.7                         "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              network
7279ef97c280        rancher/os-base:v1.5.7                         "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              udev
888803eae14a        rancher/container-crontab:v0.4.0               "container-crontab"      6 hours ago         Up 6 hours                              system-cron
19c6c9eaf323        rancher/os-syslog:v1.5.7                       "/usr/bin/entrypoi..."   6 hours ago         Up 6 hours                              syslog
a29f5efb8441        rancher/os-acpid:v1.5.7                        "/usr/bin/ros entr..."   6 hours ago         Up 6 hours                              acpid
```
