

```
$ openstack project list
+----------------------------------+--------------------+
| ID                               | Name               |
+----------------------------------+--------------------+
| 11dbd32de6a4421b8f973e8b59699aea | demo               |
| 5207c2752a654738a5f609f671ba8040 | invisible_to_admin |
+----------------------------------+--------------------+
```

Le domaine et le projet (i.e. tenant) est requis en version v3

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
