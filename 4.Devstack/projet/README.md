# Documentation
http://docs.openstack.org/admin-guide/networking-use.html   
http://docs.openstack.org/user-guide/cli-create-and-manage-networks.html  
http://blogs.igalia.com/dpino/2016/04/10/network-namespaces/  


# Créer son propre projet

## établir son environnement (admin)
```
$ sudo su - stack
$ cd /opt/devstack
$ source demo-openrc.sh
```

## Créer son projet
* Créer le projet General
```
$ openstack project create General
```
Retourne:
```
+-------------+----------------------------------+
| Field       | Value                            |
+-------------+----------------------------------+
| description |                                  |
| domain_id   | default                          |
| enabled     | True                             |
| id          | 56b0747f3b0d44c9a8612463205d8bdf |
| is_domain   | False                            |
| name        | General                          |
| parent_id   | default                          |
| tags        | []                               |
+-------------+----------------------------------+
```

* Lister les projets
```
$ openstack project list
```
Retourne:
```
+----------------------------------+--------------------+
| ID                               | Name               |
+----------------------------------+--------------------+
| 56b0747f3b0d44c9a8612463205d8bdf | General            |
| 5af1da3c591643ff98ae49fb54e16389 | alt_demo           |
| 5b25c7c2db314381aa286e423772dc4f | invisible_to_admin |
| 5be850f3348e41e896c51fcc3526429b | demo               |
| 73f829a4a39a4b698f76db83612664ef | service            |
| 9f99225dd7404c28b18a84ff568bd0c0 | admin              |
+----------------------------------+--------------------+
```

## Créer un utilisateur
```
$ openstack user create --password openstack1 --project General --email=johndoe@testco.com johndoe
```
Retourne:
```
+---------------------+----------------------------------+
| Field               | Value                            |
+---------------------+----------------------------------+
| default_project_id  | 56b0747f3b0d44c9a8612463205d8bdf |
| domain_id           | default                          |
| email               | johndoe@testco.com               |
| enabled             | True                             |
| id                  | b206463b63ee4c65b9816d40baf36569 |
| name                | johndoe                          |
| options             | {}                               |
| password_expires_at | None                             |
+---------------------+----------------------------------+
```
Vérification:
```
$ openstack user list
```

## Assigner un role à l'utilisateur
```
$ openstack role list
```
Retourne:
```
+----------------------------------+---------------+
| ID                               | Name          |
+----------------------------------+---------------+
| 1bd192821845403db911dad0e88f75fa | anotherrole   |
| 361dc1e8ebbe406e91b745b492056ad9 | service       |
| 6654acbdae4d4c24a622fe01f2a4dc0e | Member        |
| 9fe2ff9ee4384b1894a90878d3e92bab | _member_      |
| c8a2a58216ab4673a25c9e54029473fb | admin         |
| deb17ed230d84ec7b75c24603c336ee5 | ResellerAdmin |
+----------------------------------+---------------+
```
Retourne:
```
$ openstack role add --project General --user johndoe Member
```
Retourne:
```
+-----------+----------------------------------+
| Field     | Value                            |
+-----------+----------------------------------+
| domain_id | None                             |
| id        | 6654acbdae4d4c24a622fe01f2a4dc0e |
| name      | Member                           |
+-----------+----------------------------------+
```


## Créer un réseau interne
```
$ openstack network create GENERAL_NETWORK
```
Retourne:
```
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2017-12-20T23:09:00Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | cbff7b67-3607-4fb5-a96b-1f44cedb759c |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1450                                 |
| name                      | GENERAL_NETWORK                      |
| port_security_enabled     | True                                 |
| project_id                | 5be850f3348e41e896c51fcc3526429b     |
| provider:network_type     | vxlan                                |
| provider:physical_network | None                                 |
| provider:segmentation_id  | 30                                   |
| qos_policy_id             | None                                 |
| revision_number           | 2                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2017-12-20T23:09:00Z                 |
+---------------------------+--------------------------------------+
```
Vérification:
```
$ openstack network list
```
Retourne:
```
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
| ID                                   | Name            | Subnets                                                                    |
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
| 2bc2346f-873c-4162-bce2-a41c3e5682fe | public          | 2aa41a2f-b504-436f-a324-6ea3fae76ac5, c1aba6ce-28eb-4a73-9242-04abb5ad27ad |
| bc0016ba-cb63-411a-a801-c33b1b64816c | private         | 7667a8a7-dd1b-4138-97db-af395f36d60f, b355ff4c-8c03-4a17-881d-78a94aff7adf |
| cbff7b67-3607-4fb5-a96b-1f44cedb759c | GENERAL_NETWORK |                                                                            |
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
```

## Créer un sous-réseau interne
```
$ openstack subnet create GENERAL_SUBNETWORK --subnet-range 172.24.220.0/24 --service-type 'compute:nova' --network GENERAL_NETWORK
```
Retourne:
```
+-------------------+--------------------------------------+
| Field             | Value                                |
+-------------------+--------------------------------------+
| allocation_pools  | 172.24.220.2-172.24.220.254          |
| cidr              | 172.24.220.0/24                      |
| created_at        | 2017-12-20T23:09:43Z                 |
| description       |                                      |
| dns_nameservers   |                                      |
| enable_dhcp       | True                                 |
| gateway_ip        | 172.24.220.1                         |
| host_routes       |                                      |
| id                | 8d5682c8-2878-40b1-a433-f5abd1c27b5b |
| ip_version        | 4                                    |
| ipv6_address_mode | None                                 |
| ipv6_ra_mode      | None                                 |
| name              | GENERAL_SUBNETWORK                   |
| network_id        | cbff7b67-3607-4fb5-a96b-1f44cedb759c |
| project_id        | 5be850f3348e41e896c51fcc3526429b     |
| revision_number   | 1                                    |
| segment_id        | None                                 |
| service_types     | compute:nova                         |
| subnetpool_id     | None                                 |
| tags              |                                      |
| updated_at        | 2017-12-20T23:09:43Z                 |
+-------------------+--------------------------------------+
```
Vérification:
```
$ openstack subnet list
```

## Creer une machine virtuelle

```
$openstack server create demo-instance1 --flavor m1.tiny \
   --image cirros-0.3.5-x86_64-disk --nic net-id=cbff7b67-3607-4fb5-a96b-1f44cedb759c
```
Retourne:
```
+-------------------------------------+-----------------------------------------------------------------+
| Field                               | Value                                                           |
+-------------------------------------+-----------------------------------------------------------------+
| OS-DCF:diskConfig                   | MANUAL                                                          |
| OS-EXT-AZ:availability_zone         |                                                                 |
| OS-EXT-SRV-ATTR:host                | None                                                            |
| OS-EXT-SRV-ATTR:hypervisor_hostname | None                                                            |
| OS-EXT-SRV-ATTR:instance_name       |                                                                 |
| OS-EXT-STS:power_state              | NOSTATE                                                         |
| OS-EXT-STS:task_state               | scheduling                                                      |
| OS-EXT-STS:vm_state                 | building                                                        |
| OS-SRV-USG:launched_at              | None                                                            |
| OS-SRV-USG:terminated_at            | None                                                            |
| accessIPv4                          |                                                                 |
| accessIPv6                          |                                                                 |
| addresses                           |                                                                 |
| adminPass                           | Zc6Y7jLpoFPx                                                    |
| config_drive                        |                                                                 |
| created                             | 2017-12-20T23:15:18Z                                            |
| flavor                              | m1.tiny (1)                                                     |
| hostId                              |                                                                 |
| id                                  | e8056fe2-44db-43d5-a3cb-a7b1ad9ac6f1                            |
| image                               | cirros-0.3.5-x86_64-disk (c0ab32d2-4043-4581-a855-cccf52f8fd4d) |
| key_name                            | None                                                            |
| name                                | demo-instance1                                                  |
| progress                            | 0                                                               |
| project_id                          | 5be850f3348e41e896c51fcc3526429b                                |
| properties                          |                                                                 |
| security_groups                     | name='default'                                                  |
| status                              | BUILD                                                           |
| updated                             | 2017-12-20T23:15:18Z                                            |
| user_id                             | df44fd6eb9034b689951acbf50cc54be                                |
| volumes_attached                    |                                                                 |
+-------------------------------------+-----------------------------------------------------------------+
```

<HR/>

## Créer un router
```
neutron router-create --tenant-id bb39b2d8b3b2468a8fb06f5572568956 GENERAL_ROUTER
```
Retourne:
```
Created a new router:
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| admin_state_up          | True                                 |
| availability_zone_hints |                                      |
| availability_zones      |                                      |
| created_at              | 2016-12-01T23:07:44Z                 |
| description             |                                      |
| distributed             | False                                |
| external_gateway_info   |                                      |
| flavor_id               |                                      |
| ha                      | False                                |
| id                      | 19fe12e6-5bfe-4136-95ad-50ca3d4167ef |
| name                    | GENERAL_ROUTER                       |
| project_id              | bb39b2d8b3b2468a8fb06f5572568956     |
| revision_number         | 2                                    |
| routes                  |                                      |
| status                  | ACTIVE                               |
| tenant_id               | bb39b2d8b3b2468a8fb06f5572568956     |
| updated_at              | 2016-12-01T23:07:44Z                 |
+-------------------------+--------------------------------------+
```
Vérification:
```
$ openstack router list
```

## Rajout du sous-réseau au routeur
```
$ # neutron router-interface-add <router ID>  <subnet ID>
$ neutron router-interface-add 19fe12e6-5bfe-4136-95ad-50ca3d4167ef  9e2a6697-7ddc-4f7d-8a59-b2acc0f384d1
```
Retourne:
```
Added interface 6a5ca1ea-747a-4b05-b89c-90f126243bbd to router 19fe12e6-5bfe-4136-95ad-50ca3d4167ef.
```

## Rattacher le routeur au réseau externe

* Prendre la liste des sous-réseaux externes

```
$ neutron net-external-list
```
Retourne:
```
+--------------------------------------+--------+------------------------------------------------------+
| id                                   | name   | subnets                                              |
+--------------------------------------+--------+------------------------------------------------------+
| 45622527-184e-4a9a-a256-cc9b638a8b05 | public | a5c01daf-1a48-4a5e-a39c-564d8a0582ff 2001:db8::/64   |
|                                      |        | 08bfa6fe-b9ff-4377-a3f6-4f044da90b8a 10.13.237.80/28 |
+--------------------------------------+--------+------------------------------------------------------+
```

* Joindre la passerelle du routeur au réseau externe

```
$ neutron router-gateway-set <router ID>  <subnet ID>
$ neutron router-gateway-set 19fe12e6-5bfe-4136-95ad-50ca3d4167ef 45622527-184e-4a9a-a256-cc9b638a8b05
```
Retourne:
```
Set gateway for router 19fe12e6-5bfe-4136-95ad-50ca3d4167ef
```
Vérification:
```
$ neutron router-list
```
Retourne:
```
+--------------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------------+-------------+-------+
| id                                   | name           | external_gateway_info                                                                                                     | distributed | ha    |
+--------------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------------+-------------+-------+
| 19fe12e6-5bfe-4136-95ad-50ca3d4167ef | GENERAL_ROUTER | {"network_id": "45622527-184e-4a9a-a256-cc9b638a8b05", "enable_snat": true, "external_fixed_ips": [{"subnet_id":          | False       | False |
|                                      |                | "a5c01daf-1a48-4a5e-a39c-564d8a0582ff", "ip_address": "2001:db8::a"}, {"subnet_id": "08bfa6fe-                            |             |       |
|                                      |                | b9ff-4377-a3f6-4f044da90b8a", "ip_address": "10.13.237.92"}]}                                                             |             |       |
| e64e5e35-1d4a-4604-8bc7-2888bbba3c25 | router1        | {"network_id": "45622527-184e-4a9a-a256-cc9b638a8b05", "enable_snat": true, "external_fixed_ips": [{"subnet_id":          | False       | False |
|                                      |                | "a5c01daf-1a48-4a5e-a39c-564d8a0582ff", "ip_address": "2001:db8::1"}, {"subnet_id": "08bfa6fe-                            |             |       |
|                                      |                | b9ff-4377-a3f6-4f044da90b8a", "ip_address": "10.13.237.85"}]}                                                             |             |       |
+--------------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------------+-------------+-------+
```

Vérification:
```
$ neutron router-port-list GENERAL_ROUTER
```
Retourne:
```
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                           |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------+
| 6a5ca1ea-747a-4b05-b89c-90f126243bbd |      | fa:16:3e:6e:24:02 | {"subnet_id": "9e2a6697-7ddc-4f7d-8a59-b2acc0f384d1", "ip_address": "172.24.220.1"} |
| d4455c51-c52b-4448-9406-eebd89c14255 |      | fa:16:3e:4d:9d:e8 | {"subnet_id": "08bfa6fe-b9ff-4377-a3f6-4f044da90b8a", "ip_address": "10.13.237.92"} |
|                                      |      |                   | {"subnet_id": "a5c01daf-1a48-4a5e-a39c-564d8a0582ff", "ip_address": "2001:db8::a"}  |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------+
```

# Neutron

## OpenVSwitch

## Vérifier configuration OVS
```
$ sudo ovs-vsctl show
```
## Vérifier configuration OVS

|  Pont (Bridge) |  Utilitée                     |
|:--------------:|:------------------------------|
| br-ex          |                               |
| br-int         |                               |
| br-tun         |                               |
| ovs-system     |  Modules Noyaux d'OVS (actif) |

## Consulter les 'Linux Network Namespaces'

```
$ sudo ip netns list
```
Retourne:
```
qrouter-19fe12e6-5bfe-4136-95ad-50ca3d4167ef
qdhcp-db8714ed-ac3e-49a7-aec8-3b7e68cf33a5
qrouter-e64e5e35-1d4a-4604-8bc7-2888bbba3c25
qdhcp-77b611a4-08b6-43dd-a31d-e3d2827a051c
```

## Exécuter une commande sur un namespace particulier

* Example la configuration réseau d'un routeur particulier
```
$ # sudo ip netns exec <NameSpace ID> <Commande>
$ sudo ip netns exec qrouter-19fe12e6-5bfe-4136-95ad-50ca3d4167ef ifconfig -a
```
Retourne:
```
lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

qg-d4455c51-c5 Link encap:Ethernet  HWaddr fa:16:3e:4d:9d:e8  
          inet addr:10.13.237.92  Bcast:10.13.237.95  Mask:255.255.255.240
          inet6 addr: fe80::f816:3eff:fe4d:9de8/64 Scope:Link
          inet6 addr: 2001:db8::a/64 Scope:Global
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1 errors:0 dropped:0 overruns:0 frame:0
          TX packets:21 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1 
          RX bytes:28 (28.0 B)  TX bytes:1510 (1.5 KB)

qr-6a5ca1ea-74 Link encap:Ethernet  HWaddr fa:16:3e:6e:24:02  
          inet addr:172.24.220.1  Bcast:172.24.220.255  Mask:255.255.255.0
          inet6 addr: fe80::f816:3eff:fe6e:2402/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1450  Metric:1
          RX packets:25 errors:0 dropped:0 overruns:0 frame:0
          TX packets:13 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1 
          RX bytes:3378 (3.3 KB)  TX bytes:990 (990.0 B)
```

## Sortir du host
* Modifier les paramètres du noyau permettant le 'forwarding' des routes
```
$ sudo vi /etc/sysctl.conf

net.ipv4.conf.default.rp_filter=0
net.ipv4.conf.all.rp_filter=0
net.ipv4.ip_forward=1
```
* valider la configuration
```
$ sudo sysctl -p
```



# Glance

## Installer ubuntu 16.04 Cloud

```
$ wget http://cloud-images.ubuntu.com/xenial/current/xenial-server-cloudimg-amd64-disk1.img
```

## Changer de tenant et password
```
$ source openrc johndoe General
$  export OS_PASSWORD=openstack1
```


## Installer l'image d'ubuntu 16.04 Cloud dans glance

```
$ openstack image create \
         --disk-format qcow2 \
         --container-format bare \
         --public \
         --file ./xenial-server-cloudimg-amd64-disk1.img \
         Ubuntu-16.04
```
Retourne:
```
+------------------+------------------------------------------------------+
| Field            | Value                                                |
+------------------+------------------------------------------------------+
| checksum         | 35fd929b17d6c3532d04aa66e3d6ab7e                     |
| container_format | bare                                                 |
| created_at       | 2016-12-06T18:46:55Z                                 |
| disk_format      | qcow2                                                |
| file             | /v2/images/ceaf26e9-edc6-4048-980f-3a0d25202b85/file |
| id               | ceaf26e9-edc6-4048-980f-3a0d25202b85                 |
| min_disk         | 0                                                    |
| min_ram          | 0                                                    |
| name             | Ubuntu-16.04                                         |
| owner            | 26c2a062b4e84ad7bd81b7efc1974527                     |
| protected        | False                                                |
| schema           | /v2/schemas/image                                    |
| size             | 315228160                                            |
| status           | active                                               |
| tags             |                                                      |
| updated_at       | 2016-12-06T18:47:03Z                                 |
| virtual_size     | None                                                 |
| visibility       | public                                               |
+------------------+------------------------------------------------------+
```

# Lancer l'instance
```
$ nova --debug boot --flavor m1.small --image Ubuntu-16.04 --nic net-name=GENERAL_NETWORK --key-name testkey  instancetest1
```

# verifier l'instance
```
$ nova show  instancetest1
```
Retourne:
```
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| GENERAL_NETWORK network              | 172.24.220.5                               |
| OS-DCF:diskConfig                    | MANUAL                                                   |
| OS-EXT-AZ:availability_zone          | nova                                                     |
| OS-EXT-STS:power_state               | 1                                                        |
| OS-EXT-STS:task_state                | -                                                        |
| OS-EXT-STS:vm_state                  | active                                                   |
| OS-SRV-USG:launched_at               | 2016-12-06T19:55:49.000000                               |
| OS-SRV-USG:terminated_at             | -                                                        |
| accessIPv4                           |                                                          |
| accessIPv6                           |                                                          |
| config_drive                         |                                                          |
| created                              | 2016-12-06T19:55:42Z                                     |
| description                          | -                                                        |
| flavor                               | m1.small (2)                                             |
| hostId                               | f132e1514e81cbbeb4df94a6779f2732fb47ee4b634a35c843803ba9 |
| id                                   | 69e475aa-f3ec-4dd9-bc04-28c52d515583                     |
| image                                | Ubuntu-16.04 (ceaf26e9-edc6-4048-980f-3a0d25202b85)      |
| key_name                             | testkey                                                  |
| locked                               | False                                                    |
| metadata                             | {}                                                       |
| name                                 | instancetest1                                            |
| os-extended-volumes:volumes_attached | []                                                       |
| progress                             | 0                                                        |
| security_groups                      | default                                                  |
| status                               | ACTIVE                                                   |
| tags                                 | []                                                       |
| tenant_id                            | bb39b2d8b3b2468a8fb06f5572568956                         |
| updated                              | 2016-12-06T19:55:49Z                                     |
| user_id                              | fc6f210ea633406a978e83010af6b351                         |
+--------------------------------------+----------------------------------------------------------+
```

# Associer une PI flottante
```
$ nova floating-ip-associate instancetest1 10.13.237.91
```

# entrer dans l'instance
```
$ ssh -i <KEY_PAIR> ubuntu@<INSTANCE_FLOATING_IP>
```

# Acceder a une instance par son address local de namespace
```
$ sudo ip netns exec qdhcp-db8714ed-ac3e-49a7-aec8-3b7e68cf33a5 ssh -i testkey.pem ubuntu@172.24.220.5
```

```
$ sudo ip netns exec qdhcp-db8714ed-ac3e-49a7-aec8-3b7e68cf33a5 ssh cirros@172.24.220.12
```

# Determiner l'IP externe du bridge externe
```
$ sudo ip netns exec qrouter-19fe12e6-5bfe-4136-95ad-50ca3d4167ef ip r
default via 10.13.237.81 dev qg-d4455c51-c5 
10.13.237.80/28 dev qg-d4455c51-c5  proto kernel  scope link  src 10.13.237.92 
172.24.220.0/24 dev qr-6a5ca1ea-74  proto kernel  scope link  src 172.24.220.1 
```

# Allouer une adresse au bridge externe et le rendre disponible
```
$ sudo ip addr add 10.13.237.81/28 dev br-ex
$ sudo ip link set br-ex up
$ sudo ip link set br-int up
$ sudo ip link set br-tun up
```
# Verifier la route
```
$ ip route
default via 10.13.237.1 dev enp9s0 onlink 
10.13.237.0/25 dev enp9s0  proto kernel  scope link  src 10.13.237.4 
10.13.237.80/28 dev br-ex  proto kernel  scope link  src 10.13.237.81 
10.252.0.0/24 dev lab0  proto kernel  scope link  src 10.252.0.254 
192.168.122.0/24 dev virbr0  proto kernel  scope link  src 192.168.122.1 linkdown 
```
# Ouvrir le chemin
```
$ sudo iptables -t nat -A POSTROUTING -s 10.13.237.80/28 -j MASQUERADE
```
