# X11

### Sur le serveur ubuntu

:one: Installer `ubuntu-desktop`

```
$ sudo apt update
$ sudo apt install ubuntu-desktop
```

:two: Permettre X11 Forwarding à travers SSH

- [ ] en modifiant le parametre `X11Forwarding` à `yes`

```
$ sudo vi /etc/sshd_config
```

- [ ] Résultat escompté

```
$ cat /etc/ssh/sshd_config | grep X11Forwarding | awk 'NR==1 {print $0}'
X11Forwarding yes
```

[caja](https://ubuntu-mate.community/t/x11-forwarding-with-caja-in-18-04-1/18911)


XQuartz on Mac `-Y      Enables trusted X11 forwarding.`

```
$ ssh -Y user@IP
```

