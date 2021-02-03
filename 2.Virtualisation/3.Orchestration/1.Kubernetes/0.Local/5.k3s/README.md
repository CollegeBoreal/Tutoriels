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
