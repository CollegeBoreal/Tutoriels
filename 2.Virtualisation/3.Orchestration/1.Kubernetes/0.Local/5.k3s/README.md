# K3s

Lightweight Kubernetes


:bulb: Example de création de machine virtuelle sous HYPER-V en utilisant une image `boot2docker` provenant de [`RancherOS`](https://rancher.com/docs/os/v1.x/en/installation/workstation/docker-machine/)

```powershell
PS> docker-machine create `
          --driver hyperv `
          --hyperv-boot2docker-url https://github.com/rancher/os/releases/download/v1.5.7/rancheros-hyperv.iso `
          CB-K3S1
```



```powershell
PS> docker-machine ssh CB-K3S1
```

### :one: initd

RancherOS utilise `docker` pour démarer ses services

* sous rancherOS

```
$ ps -ef | awk 'NR<=2'
PID   USER     COMMAND
    1 root     system-dockerd --bip 172.18.42.1/16 --config-file /etc/docker/system-docker.json --exec-root /var/run/system-docker --host unix:///var/run/system-docker.sock --userland-proxy=false --group root --graph /var/lib/system-docker --restart=false --storage-driver overlay2 --log-opt max-file=2 --log-opt max-size=25m --pidfile /var/run/system-docker.pid
```

* sous Ubuntu

```
$ ps -ef | awk 'NR<=2'
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0  2020 ?        00:44:33 /lib/systemd/systemd --system --deserialize 29
```

Changer a une apparance Ubuntu

```
$ sudo ros console switch ubuntu
```

- [ ] Lister les [services](https://rancher.com/docs/os/v1.x/en/system-services/) de RancherOS (l'equivalent `init` SysV ou `systemd`)

```
$ sudo ros service list
```


```
$ sudo ros os list | grep running
v1.5.7 running
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

### :gear: [cloud-config](https://rancher.com/docs/os/v1.x/en/configuration/#cloud-config)

```
$ sudo cat /var/lib/rancher/conf/cloud-config.yml 
rancher:
  services_include:
    hyperv-vm-tools: true
  ssh:
    keys:
      dsa: |+
      ...
```

