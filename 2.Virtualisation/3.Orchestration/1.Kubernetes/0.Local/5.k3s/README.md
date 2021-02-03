# K3s

Lightweight Kubernetes


:bulb: Example de création de machine virtuelle sous HYPER-V en utilisant une image `boot2docker` provenant de `RancherOS`

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
