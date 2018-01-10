# Documentation
http://docs.openstack.org/admin-guide/networking-use.html   
http://docs.openstack.org/user-guide/cli-create-and-manage-networks.html  
http://blogs.igalia.com/dpino/2016/04/10/network-namespaces/  


# Créer son propre projet

## établir son environnement (admin)
```
$ sudo su - stack
$ source admin-openrc.sh # recuperer le fichier openrc pour l'utilisateur admin de Dashboard Horizon
```

## Créer son projet
* Créer le projet General
```
$ openstack project create General
+-------------+----------------------------------+
| Field       | Value                            |
+-------------+----------------------------------+
| description |                                  |
| domain_id   | default                          |
| enabled     | True                             |
| id          | 69b2b3a3e5af414ebc7ad250163e47ad |
| is_domain   | False                            |
| name        | General                          |
| parent_id   | default                          |
| tags        | []                               |
+-------------+----------------------------------+
```

* Lister les projets
```
$ openstack project list
+----------------------------------+--------------------+
| ID                               | Name               |
+----------------------------------+--------------------+
| 11dbd32de6a4421b8f973e8b59699aea | demo               |
| 3ca6ef6b89c9412494269bd70ffcf517 | admin              |
| 5207c2752a654738a5f609f671ba8040 | invisible_to_admin |
| 69b2b3a3e5af414ebc7ad250163e47ad | General            |
| db6ed7e01b1d4d4b9249a30c7706a7f8 | alt_demo           |
| f2e0004fe488461585addc3e8ce517c4 | service            |
+----------------------------------+--------------------+
```

## Créer un utilisateur
```
$ openstack user create --password openstack1 --project General --email=johndoe@testco.com johndoe
+---------------------+----------------------------------+
| Field               | Value                            |
+---------------------+----------------------------------+
| default_project_id  | 69b2b3a3e5af414ebc7ad250163e47ad |
| domain_id           | default                          |
| email               | johndoe@testco.com               |
| enabled             | True                             |
| id                  | d133d8d6242e4c098aaf9736359483f7 |
| name                | johndoe                          |
| options             | {}                               |
| password_expires_at | None                             |
+---------------------+----------------------------------+
```
Vérification:
```
$ openstack user list
+----------------------------------+-----------+
| ID                               | Name      |
+----------------------------------+-----------+
| 2080efcd64434f55b3159733792db31c | neutron   |
| 21dfa46b9655450abb476873f450112a | alt_demo  |
| 2c96f1467d20415794ac04017a97d512 | admin     |
| 47f471a1eecd4cbd889c2691e0e0f8b5 | nova      |
| 947f6a03bbfe43e2a7359ac7bc340ede | cinder    |
| a4ec9663c99b4103953263c0745cf714 | demo      |
| c133a333c8594657acce97cbd774a6cd | glance    |
| c77c308c59604d37aec69edc28ad63be | placement |
| d133d8d6242e4c098aaf9736359483f7 | johndoe   |
+----------------------------------+-----------+
```

## Assigner un role à l'utilisateur

* Lister les roles

```
$ openstack role list
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

* Donner un role

```
$ openstack role add --project General --user johndoe Member
$ openstack role add --project General --user admin Admin
```
Retourne:
```
(none)
```

* Lister par projet

```
$ openstack user list --project General
+----------------------------------+---------+
| ID                               | Name    |
+----------------------------------+---------+
| 2c96f1467d20415794ac04017a97d512 | admin   |
| d133d8d6242e4c098aaf9736359483f7 | johndoe |
+----------------------------------+---------+
```
## établir son environnement (General openrc)
```
$ source General-openrc.sh # recuperer le fichier openrc pour l'utilisateur de Dashboard Horizon
```

## Créer un réseau interne
```
$ openstack network create GENERAL_NETWORK
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2018-01-10T23:00:19Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | 2028e5d9-ba98-4886-91b2-de5fab424468 |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1450                                 |
| name                      | GENERAL_NETWORK                      |
| port_security_enabled     | True                                 |
| project_id                | 69b2b3a3e5af414ebc7ad250163e47ad     |
| provider:network_type     | None                                 |
| provider:physical_network | None                                 |
| provider:segmentation_id  | None                                 |
| qos_policy_id             | None                                 |
| revision_number           | 2                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2018-01-10T23:00:19Z                 |
+---------------------------+--------------------------------------+
```
Vérification:
```
$ openstack network list
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
| ID                                   | Name            | Subnets                                                                    |
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
| 2028e5d9-ba98-4886-91b2-de5fab424468 | GENERAL_NETWORK |                                                                            |
| 2f03bb6a-ac09-4ff3-beaa-eea56dec1d52 | public          | 8271eec6-064e-4476-aeff-d9652d03180a, cd309e31-f191-44bf-a0b7-1cbc34071add |
+--------------------------------------+-----------------+----------------------------------------------------------------------------+
```

## Créer un sous-réseau interne
```
$ openstack subnet create GENERAL_SUBNETWORK \
            --subnet-range 172.24.220.0/24 \
            --network GENERAL_NETWORK
+-------------------+--------------------------------------+
| Field             | Value                                |
+-------------------+--------------------------------------+
| allocation_pools  | 172.24.220.2-172.24.220.254          |
| cidr              | 172.24.220.0/24                      |
| created_at        | 2018-01-10T23:00:53Z                 |
| description       |                                      |
| dns_nameservers   |                                      |
| enable_dhcp       | True                                 |
| gateway_ip        | 172.24.220.1                         |
| host_routes       |                                      |
| id                | 017f72a4-3078-43ee-a527-b5698d0ee473 |
| ip_version        | 4                                    |
| ipv6_address_mode | None                                 |
| ipv6_ra_mode      | None                                 |
| name              | GENERAL_SUBNETWORK                   |
| network_id        | 2028e5d9-ba98-4886-91b2-de5fab424468 |
| project_id        | 69b2b3a3e5af414ebc7ad250163e47ad     |
| revision_number   | 0                                    |
| segment_id        | None                                 |
| service_types     |                                      |
| subnetpool_id     | None                                 |
| tags              |                                      |
| updated_at        | 2018-01-10T23:00:53Z                 |
+-------------------+--------------------------------------+
```

Vérification:
```
$ openstack subnet list
+--------------------------------------+--------------------+--------------------------------------+-----------------+
| ID                                   | Name               | Network                              | Subnet          |
+--------------------------------------+--------------------+--------------------------------------+-----------------+
| 017f72a4-3078-43ee-a527-b5698d0ee473 | GENERAL_SUBNETWORK | 2028e5d9-ba98-4886-91b2-de5fab424468 | 172.24.220.0/24 |
+--------------------------------------+--------------------+--------------------------------------+-----------------+
```

## Créer un router
```
$ openstack router create GENERAL_ROUTER
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| admin_state_up          | UP                                   |
| availability_zone_hints |                                      |
| availability_zones      |                                      |
| created_at              | 2018-01-10T23:01:21Z                 |
| description             |                                      |
| distributed             | False                                |
| external_gateway_info   | None                                 |
| flavor_id               | None                                 |
| ha                      | False                                |
| id                      | e76b4749-ba7c-45de-abf8-113f826da610 |
| name                    | GENERAL_ROUTER                       |
| project_id              | 69b2b3a3e5af414ebc7ad250163e47ad     |
| revision_number         | None                                 |
| routes                  |                                      |
| status                  | ACTIVE                               |
| tags                    |                                      |
| updated_at              | 2018-01-10T23:01:21Z                 |
+-------------------------+--------------------------------------+
```

* Vérification:

```
$  openstack router list
+--------------------------------------+----------------+--------+-------+-------------+-------+----------------------------------+
| ID                                   | Name           | Status | State | Distributed | HA    | Project                          |
+--------------------------------------+----------------+--------+-------+-------------+-------+----------------------------------+
| e76b4749-ba7c-45de-abf8-113f826da610 | GENERAL_ROUTER | ACTIVE | UP    | False       | False | 69b2b3a3e5af414ebc7ad250163e47ad |
+--------------------------------------+----------------+--------+-------+-------------+-------+----------------------------------+
```

## Rajout du sous-réseau au routeur
```
$ openstack router add subnet GENERAL_ROUTER GENERAL_SUBNETWORK
```
Retourne:
```
(null)
```

<hr/>

## établir son environnement (admin)
```
$ source admin-openrc.sh # recuperer le fichier openrc pour l'utilisateur admin de Dashboard Horizon
```


## Rattacher le routeur au réseau externe

* Prendre la liste des réseaux externes

```
$ openstack network list --external
+--------------------------------------+--------+----------------------------------------------------------------------------+
| ID                                   | Name   | Subnets                                                                    |
+--------------------------------------+--------+----------------------------------------------------------------------------+
| 2f03bb6a-ac09-4ff3-beaa-eea56dec1d52 | public | 8271eec6-064e-4476-aeff-d9652d03180a, cd309e31-f191-44bf-a0b7-1cbc34071add |
+--------------------------------------+--------+----------------------------------------------------------------------------+
```
* Prendre la liste des sous-réseaux externes du reseau public

```
$ openstack subnet list --network public
+--------------------------------------+--------------------+--------------------------------------+-----------------+
| ID                                   | Name               | Network                              | Subnet          |
+--------------------------------------+--------------------+--------------------------------------+-----------------+
| 8271eec6-064e-4476-aeff-d9652d03180a | ipv6-public-subnet | 2f03bb6a-ac09-4ff3-beaa-eea56dec1d52 | 2001:db8::/64   |
| cd309e31-f191-44bf-a0b7-1cbc34071add | public-subnet      | 2f03bb6a-ac09-4ff3-beaa-eea56dec1d52 | 10.13.237.48/28 |
+--------------------------------------+--------------------+--------------------------------------+-----------------+
```
* Joindre la passerelle du routeur au sous-réseau externe

```
$ openstack router add subnet GENERAL_ROUTER public-subnet
```
Retourne:
```
(null)
```
Vérification:
```
$ openstack router show GENERAL_ROUTER
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                   | Value                                                                                                                                                                                                                                                                            |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| admin_state_up          | UP                                                                                                                                                                                                                                                                               |
| availability_zone_hints |                                                                                                                                                                                                                                                                                  |
| availability_zones      | nova                                                                                                                                                                                                                                                                             |
| created_at              | 2018-01-10T23:01:21Z                                                                                                                                                                                                                                                             |
| description             |                                                                                                                                                                                                                                                                                  |
| distributed             | False                                                                                                                                                                                                                                                                            |
| external_gateway_info   | None                                                                                                                                                                                                                                                                             |
| flavor_id               | None                                                                                                                                                                                                                                                                             |
| ha                      | False                                                                                                                                                                                                                                                                            |
| id                      | e76b4749-ba7c-45de-abf8-113f826da610                                                                                                                                                                                                                                             |
| interfaces_info         | [{"subnet_id": "cd309e31-f191-44bf-a0b7-1cbc34071add", "ip_address": "10.13.237.49", "port_id": "025ea849-69aa-4d82-b45f-7eed384f8f12"}, {"subnet_id": "017f72a4-3078-43ee-a527-b5698d0ee473", "ip_address": "172.24.220.1", "port_id": "92c68723-b2cb-4326-858e-90ea5d2cc1b5"}] |
| name                    | GENERAL_ROUTER                                                                                                                                                                                                                                                                   |
| project_id              | 69b2b3a3e5af414ebc7ad250163e47ad                                                                                                                                                                                                                                                 |
| revision_number         | 2                                                                                                                                                                                                                                                                                |
| routes                  |                                                                                                                                                                                                                                                                                  |
| status                  | ACTIVE                                                                                                                                                                                                                                                                           |
| tags                    |                                                                                                                                                                                                                                                                                  |
| updated_at              | 2018-01-10T23:18:24Z                                                                                                                                                                                                                                                             |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

## établir son environnement (johndoe)
```
$ source General-openrc.sh # recuperer le fichier openrc pour l'utilisateur johndoe de Dashboard Horizon
```

## Creer une machine virtuelle

```
openstack server create demo-instance1 \
                 --flavor m1.tiny \
                 --image cirros-0.3.5-x86_64-disk \
                 --network GENERAL_NETWORK
+-----------------------------+-----------------------------------------------------------------+
| Field                       | Value                                                           |
+-----------------------------+-----------------------------------------------------------------+
| OS-DCF:diskConfig           | MANUAL                                                          |
| OS-EXT-AZ:availability_zone |                                                                 |
| OS-EXT-STS:power_state      | NOSTATE                                                         |
| OS-EXT-STS:task_state       | scheduling                                                      |
| OS-EXT-STS:vm_state         | building                                                        |
| OS-SRV-USG:launched_at      | None                                                            |
| OS-SRV-USG:terminated_at    | None                                                            |
| accessIPv4                  |                                                                 |
| accessIPv6                  |                                                                 |
| addresses                   |                                                                 |
| adminPass                   | gz2YiqAxqWjb                                                    |
| config_drive                |                                                                 |
| created                     | 2018-01-10T23:34:42Z                                            |
| flavor                      | m1.tiny (1)                                                     |
| hostId                      |                                                                 |
| id                          | 2e264292-bdfe-4696-a403-3bdcf6f7b8d0                            |
| image                       | cirros-0.3.5-x86_64-disk (5fca81ba-d33c-4334-ac4a-f32bb62b4e97) |
| key_name                    | None                                                            |
| name                        | demo-instance1                                                  |
| progress                    | 0                                                               |
| project_id                  | 69b2b3a3e5af414ebc7ad250163e47ad                                |
| properties                  |                                                                 |
| security_groups             | name='default'                                                  |
| status                      | BUILD                                                           |
| updated                     | 2018-01-10T23:34:42Z                                            |
| user_id                     | d133d8d6242e4c098aaf9736359483f7                                |
| volumes_attached            |                                                                 |
+-----------------------------+-----------------------------------------------------------------+
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
