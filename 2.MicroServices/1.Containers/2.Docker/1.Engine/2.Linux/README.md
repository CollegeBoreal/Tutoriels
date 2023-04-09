## Docker Engine

```
  Ce tutoriel explique comment installer une machine Docker sur une machine physique (métal)

  Le 'Driver' Docker à utilser est le generique `generic`
```

## :bangbang: Sur le serveur :penguin: `Linux` 

### :one: Installer Docker Engine sur la machine physique (i.e. Ubuntu)

** dans le cas échéant, installer `curl` si non présent (suivre les instructions du serveur)

* Installer `Docker` avec le [`convenient script`](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) dans un environnement de  développement

```
$ sudo curl -sSL https://get.docker.com | sh
```
> Retourne :
```yaml
sudo curl -sSL https://get.docker.com | sh
# Executing docker install script, commit: a8a6b338bdfedd7ddefb96fe3e7fe7d4036d945a
+ sudo -E sh -c apt-get update -qq >/dev/null
+ sudo -E sh -c DEBIAN_FRONTEND=noninteractive apt-get install -y -qq apt-transport-https ca-certificates curl >/dev/null
+ sudo -E sh -c mkdir -p /etc/apt/keyrings && chmod -R 0755 /etc/apt/keyrings
+ sudo -E sh -c curl -fsSL "https://download.docker.com/linux/ubuntu/gpg" | gpg --dearmor --yes -o /etc/apt/keyrings/docker.gpg
+ sudo -E sh -c chmod a+r /etc/apt/keyrings/docker.gpg
+ sudo -E sh -c echo "deb [arch=arm64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu jammy stable" > /etc/apt/sources.list.d/docker.list
+ sudo -E sh -c apt-get update -qq >/dev/null
+ sudo -E sh -c DEBIAN_FRONTEND=noninteractive apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-ce-rootless-extras docker-buildx-plugin >/dev/null
+ sudo -E sh -c docker version
Client: Docker Engine - Community
 Version:           23.0.3
 API version:       1.42
 Go version:        go1.19.7
 Git commit:        3e7cbfd
 Built:             Tue Apr  4 22:06:00 2023
 OS/Arch:           linux/arm64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          23.0.3
  API version:      1.42 (minimum version 1.12)
  Go version:       go1.19.7
  Git commit:       59118bf
  Built:            Tue Apr  4 22:06:00 2023
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.20
  GitCommit:        2806fc1057397dbaeefbea0e4e17bddfbd388f38
 runc:
  Version:          1.1.5
  GitCommit:        v1.1.5-0-gf19387a
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

================================================================================

To run Docker as a non-privileged user, consider setting up the
Docker daemon in rootless mode for your user:

    dockerd-rootless-setuptool.sh install

Visit https://docs.docker.com/go/rootless/ to learn about rootless mode.


To run the Docker daemon as a fully privileged service, but granting non-root
users access, refer to https://docs.docker.com/go/daemon-access/

WARNING: Access to the remote API on a privileged Docker daemon is equivalent
         to root access on the host. Refer to the 'Docker daemon attack surface'
         documentation for details: https://docs.docker.com/go/attack-surface/

================================================================================

```

* Verifier que le service fonctionne

```
$ systemctl status docker # doit être actif - Active (running)
```

* Permettre l'accès au service au démarrage de la machine

```
$ sudo systemctl enable docker
```


### :two: Permissions

* Lister les conteneurs donne une erreur de permission quand à l'accès des [socket-files](https://askubuntu.com/questions/372725/what-are-socket-files)

Les [socket-files](https://askubuntu.com/questions/372725/what-are-socket-files) sont utilisé pour communiquer entre applications gràce aux [IPC](https://en.wikipedia.org/wiki/Inter-process_communication)

```
docker container ls
```
> Outputs :
<pre>
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: 
Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: 
dial unix /var/run/docker.sock: connect: permission denied
</pre>

* Permettre l'accès au `socket file` en rajoutant votre utilisateur au groupe `docker`

```
sudo usermod --append --groups docker $USER
```

* Pour verifier, sortir du terminal et lancer la commande `groups`, `docker` doit apparaitre

:warning: pour forcer le group il faut sortir de la session avec `exit` et revenir dans le serveur

```
groups
```
> ubuntu adm cdrom sudo dip plugdev lxd docker

