# Documentation
http://docs.openstack.org/admin-guide/networking-use.html   
http://docs.openstack.org/user-guide/cli-create-and-manage-networks.html  
http://blogs.igalia.com/dpino/2016/04/10/network-namespaces/  

## Physical related Config with Neutron

https://docs.openstack.org/devstack/latest/guides/neutron.html (Devstack : Using Neutron with a Single Interface¶)

https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/8/html/networking_guide/sec-physical-switch (avec CISCO Catalyst Switch)

http://docwiki.cisco.com/wiki/OpenStack/ML2NexusMechanismDriver (DEVSTACK ML2 Local Config)
https://wiki.openstack.org/wiki/Neutron/ML2 

https://www.youtube.com/watch?v=FX36sVv8BrY (Overlay Networking in Linux with OpenStack Neutron)


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

## Topologie 

![alt tag](./topologie.png)

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
| adminPass                   | 2MGKj5eKXUn3                                                    |
| config_drive                |                                                                 |
| created                     | 2018-01-24T20:39:45Z                                            |
| flavor                      | m1.tiny (1)                                                     |
| hostId                      |                                                                 |
| id                          | 5a71fa12-722e-4470-8764-7de154480c34                            |
| image                       | cirros-0.3.5-x86_64-disk (5fca81ba-d33c-4334-ac4a-f32bb62b4e97) |
| key_name                    | None                                                            |
| name                        | demo-instance1                                                  |
| progress                    | 0                                                               |
| project_id                  | 69b2b3a3e5af414ebc7ad250163e47ad                                |
| properties                  |                                                                 |
| security_groups             | name='default'                                                  |
| status                      | BUILD                                                           |
| updated                     | 2018-01-24T20:39:45Z                                            |
| user_id                     | d133d8d6242e4c098aaf9736359483f7                                |
| volumes_attached            |                                                                 |
+-----------------------------+-----------------------------------------------------------------+
```

* Verification

```
 $ openstack server list                                                                                      
+--------------------------------------+----------------+--------+------------------------------+--------------------------+---------+
| ID                                   | Name           | Status | Networks                     | Image                    | Flavor  |
+--------------------------------------+----------------+--------+------------------------------+--------------------------+---------+
| 5a71fa12-722e-4470-8764-7de154480c34 | demo-instance1 | ACTIVE | GENERAL_NETWORK=172.24.220.4 | cirros-0.3.5-x86_64-disk | m1.tiny |
+--------------------------------------+----------------+--------+------------------------------+--------------------------+---------+
```

```
$ openstack security group rule create default --protocol tcp --dst-port 22:22 --remote-ip 0.0.0.0/0
+-------------------+--------------------------------------+
| Field             | Value                                |
+-------------------+--------------------------------------+
| created_at        | 2018-01-26T22:05:43Z                 |
| description       |                                      |
| direction         | ingress                              |
| ether_type        | IPv4                                 |
| id                | eb6e7d39-4626-4919-88ed-dd7c3f747355 |
| name              | None                                 |
| port_range_max    | 22                                   |
| port_range_min    | 22                                   |
| project_id        | 8ca187f0013f4f2286f48198208ef5e0     |
| protocol          | tcp                                  |
| remote_group_id   | None                                 |
| remote_ip_prefix  | 0.0.0.0/0                            |
| revision_number   | 0                                    |
| security_group_id | 8756b639-981d-4b9a-abe2-b2a8cb46df4e |
| updated_at        | 2018-01-26T22:05:43Z                 |
+-------------------+--------------------------------------+
```
