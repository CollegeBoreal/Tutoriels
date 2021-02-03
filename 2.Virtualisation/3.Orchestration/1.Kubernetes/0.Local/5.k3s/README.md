# K3s

Lightweight Kubernetes


Example de création de machine virtuelle sous HYPER-V en utilisant une image `boot2docker` provenant de `RancherOS`

```
PS> docker-machine create --driver hyperv `
                          --hyperv-boot2docker-url https://github.com/rancher/os/releases/download/v1.5.7/rancheros-hyperv.iso `
                          CB-K3S1
```
