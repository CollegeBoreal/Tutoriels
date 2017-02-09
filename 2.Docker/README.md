## Set your environment Variables

```
$ source ~/Developer/canarie.ca/collège-boréal-openrc-quebec.sh
```

## Create the Docker Machine on OpenStack

```
$ docker-machine \
  create --driver openstack \
  --openstack-flavor-name m1.tiny \
  --openstack-image-name "Ubuntu 14.04" \
  --openstack-ssh-user ubuntu \
  --openstack-floatingip-pool nova \
  --openstack-sec-groups default  \
  --openstack-nova-network \
  --openstack-net-name nova \
  CB-<NAME>
  ```

## Switch to openstack

```
$ eval $(docker-machine env CB-<NAME>)
```

## Create test server

```
$ docker run --name nginx -d -p 80:80 nginx
```
