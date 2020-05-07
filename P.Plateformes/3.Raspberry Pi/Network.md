# :strawberry: Static IP Change using `DHCP` Method


# :a: Changer l'adresse IP statique

## :zero: Verifier son environnement

:pushpin: Récuperer l'adresse de la passerelle par défaut

```
$ ip route | grep default | awk '{print $3}'
```


## :one: Modifier le fichier `/etc/dhcpcd.conf`

:bookmark: En enlevant les commentaires devant les lignes de configurations suivantes

:pushpin: à la maison derrière son routeur

```
# Home configuration:
interface eth0
static ip_address=192.168.1.10/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1 8.8.8.8
```

:pushpin: au Collège avec les adresses IP fixes `10.13.237.0/25` DNS `10.10.99.2` et `10.10.99.3`

```
# Lab configuration:
#interface eth0
#static ip_address=10.13.237.16/25
#static routers=10.13.237.1
#static domain_name_servers=10.10.99.2 10.10.99.3 8.8.8.8
```

## :two: Redémarrer ou Éteindre la machine

:pushpin: Redémarrer

```
$ sudo reboot
```

**ou** 

:pushpin: Éteindre

```
$ sudo shutdown -h now
```

# :ab: Démarrer le service à distance `ssh`

:zero: Installation de `ssh`
 
:pushpin: installer le service

```
$ sudo systemctl enable ssh
```

:pushpin: démarrer le service

```
$ sudo systemctl start ssh
```

:one: Tester le service `ssh` 

:pushpin: localement au préalable

```
$ ssh pi@localhost
```

:pushpin: à distance

```
$ ssh pi@10.13.237.16
```

:warning: Alerte du au changement de machine donc d'adresse Ethernet

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:7ZfMNE9ibP4I8NbCdjoVYtaBuKzdG5Iqh4Z5mMSi/Ho.
Please contact your system administrator.
Add correct host key in /c/Users/300098957/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /c/Users/300098957/.ssh/known_hosts:13
ECDSA host key for 10.13.237.16 has changed and you have requested strict checking.
Host key verification failed.
```

Ouvrir le fichier `~/.ssh/known_hosts`et enlever la ligne ressemblant à celle ci-dessous avec l'adresse IP `10.13.237.19`
```
10.13.237.19 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBMrWaYXRK6bd7KGr+YlDkWVB/dqYyOv6mROS/b2M0EuAq3QT4n7Dc55z4ub4c2ZN+PEqVtLmJcqcs16dcisGUV0=
```

:pushpin: à distance avec une interface UI utiliser `-Y`

```
$ ssh -Y pi@10.13.237.16
```

# References

## Raspbian

https://raspberrypi.stackexchange.com/questions/37920/how-do-i-set-up-networking-wifi-static-ip-address

## Ubuntu Server

https://www.techrepublic.com/article/how-to-configure-a-static-ip-address-in-ubuntu-server-18-04/


# References:

## Access Point

https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md
