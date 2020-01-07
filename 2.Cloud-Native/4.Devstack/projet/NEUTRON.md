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
