# X11

### :a: Sur le serveur ubuntu

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

:three: Redémarer le serveur SSH

```
$ sudo systemctl restart ssh
```

### :b: Sur le client


:apple: XQuartz on Mac 

- [ ] Se connecter avec `-Y      Enables trusted X11 forwarding.` 

```
$ ssh -Y user@IP
```

- [ ] Installer [caja](https://ubuntu-mate.community/t/x11-forwarding-with-caja-in-18-04-1/18911)

ou tester avec xcalc

# VNC

tightvncserver

### :a: Sur le serveur

- [ ] Installation

```
$ sudo apt install tigervnc-standalone-server tigervnc-viewer
```

- [ ] Configuration

```
$ vncserver :1
```

:bookmark: Rentrer 

:two: Sur le client


```
$ xtigervncviewer -SecurityTypes VncAuth -passwd /home/ubuntu/.vnc/passwd :1
```

:apple: MacOS

```
% brew cask install vnc-viewer
```

:computer: Windows

```
PS > choco install vnc-viewer --version=6.18.625
```
