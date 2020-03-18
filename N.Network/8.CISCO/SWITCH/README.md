# Switch Tips


### :pushpin: Convert Switch Into Hub

https://community.cisco.com/t5/other-network-architecture/convert-a-switch-into-a-hub/td-p/443718

```
interface VLAN2
 no ip directed-broadcast
 no ip route-cache
 shutdown
!


interface range Fa0/1-3
 switchport access vlan 2
 switchport trunk encapsulation dot1q
 switchport mode trunk
!

