# Docker

## Install Docker on Linux

https://docs.docker.com/engine/installation/

```
$ curl -fsSL get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```
* add `stack` as a docker user (to avoid sudo)

```
$ sudo usermod -aG docker stack
```

## Install Docker Machine

https://docs.docker.com/machine/install-machine/#install-machine-directly

```
$ curl -L https://github.com/docker/machine/releases/download/v0.13.0/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine &&
chmod +x /tmp/docker-machine &&
sudo cp /tmp/docker-machine /usr/local/bin/docker-machine
```


```
$ openstack project list
+----------------------------------+--------------------+
| ID                               | Name               |
+----------------------------------+--------------------+
| 11dbd32de6a4421b8f973e8b59699aea | demo               |
| 5207c2752a654738a5f609f671ba8040 | invisible_to_admin |
+----------------------------------+--------------------+
```

Domain and projext (i.e. tenant) is required for OpenStack version v3

```
$ docker-machine -D  create \
       --driver openstack  \
       --openstack-flavor-name m1.tiny  \
       --openstack-image-name "cirros-0.3.5-x86_64-disk"  \
       --openstack-ssh-user ubuntu \
       --openstack-floatingip-pool PUBLIC \
       --openstack-sec-groups default \
       --openstack-nova-network  \
       --openstack-net-name nova \
       --openstack-domain-id default \
       --openstack-tenant-id 11dbd32de6a4421b8f973e8b59699aea \
       CB-TEST3
```

```
$ docker-machine -D  create \
       --driver openstack  \
       --openstack-flavor-name m1.tiny  \
       --openstack-image-name "cirros-0.3.5-x86_64-disk"  \
       --openstack-ssh-user ubuntu \
       --openstack-floatingip-pool PUBLIC \
       --openstack-sec-groups default \
       --openstack-nova-network  \
       --openstack-net-name nova \
       --openstack-domain-id default \
       --openstack-tenant-name demo \
       CB-TEST3
```
