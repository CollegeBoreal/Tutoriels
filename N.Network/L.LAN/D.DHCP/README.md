# D.DHCP

https://www.howtoforge.com/dhcp_server_linux_debian_sarge

## :o: Preliminary Note

This is the current situation:

```
I'm using the network `10.13.237.0`, subnetmask `255.255.255.0`, broadcast address `10.13.237.255`.
My gateway to the internet is `10.13.237.1`; on the gateway there's no DHCP server..
My ISP told me the DNS servers I can use are `149.112.121.20` and `149.112.122.20`.
I have a pool of 64 IP addresses (`10.13.237.128` - `10.13.237.192`) that can be dynamically assigned to client PCs and that are not already in use.
I have an unused Ubuntu 20.04 server with the hostname server1.example.com on the IP address `10.13.237.9` which will act as my DHCP server.
```

```
$ lsb_release --all
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.1 LTS
Release:	20.04
Codename:	focal
```


:bulb: CIRA DNS
```
En passant, j’utilise maintenant les deux adresses CIRA (gratuite) comme DNS externe en labo.
Ils offrent une protection supplémentaire de « malware & phishing » : 149.112.121.20, 149.112.122.20
 
https://www.cira.ca/cybersecurity-services/canadian-shield/configure
```

## :b: Docker


```
$ cat /etc/dhcp3/dhcpd.conf
ddns-update-style none;

option domain-name-servers 149.112.121.20, 149.112.122.20;

default-lease-time 86400;
max-lease-time 604800;

authoritative;

subnet 10.13.237.0 netmask 255.255.255.0 {
        range 10.13.237.128 192.168.0.192;
        option subnet-mask 255.255.255.0;
        option broadcast-address 10.13.237.255;
        option routers 10.13.237.1;
}
```

https://hub.docker.com/r/networkboot/dhcpd/

1. Create `dhcp` folder.

1. Create `dhcp/dhcpd.conf` with a subnet clause for the specified network interface. If you need assistance, you can run `docker run -it --rm networkboot/dhcpd man dhcpd.conf` for a description of the configuration file syntax.

1. Run `docker run --interactive --tty --rm --init --net host -v "$(pwd)/dhcp":/data networkboot/dhcpd enp2s0f0`. dhcpd will automatically start and display its logs on the console. You can press Ctrl-C to terminate the server.
