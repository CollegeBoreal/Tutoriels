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

## References


```
dockerd-rootless-setuptool.sh install
```
> Retourne :
```yaml
[ERROR] Missing system requirements. Run the following commands to
[ERROR] install the requirements and run this tool again.

########## BEGIN ##########
sudo sh -eux <<EOF
# Install newuidmap & newgidmap binaries
apt-get install -y uidmap
EOF
########## END ##########
```

```
dockerd-rootless-setuptool.sh install
```
> Retourne :
```yaml
[INFO] Creating /home/ubuntu/.config/systemd/user/docker.service
[INFO] starting systemd service docker.service
+ systemctl --user start docker.service
+ sleep 3
+ systemctl --user --no-pager --full status docker.service
● docker.service - Docker Application Container Engine (Rootless)
     Loaded: loaded (/home/ubuntu/.config/systemd/user/docker.service; disabled; vendor preset: enabled)
     Active: active (running) since Sun 2023-04-09 15:08:44 UTC; 3s ago
       Docs: https://docs.docker.com/go/rootless/
   Main PID: 3681 (rootlesskit)
      Tasks: 38
     Memory: 42.2M
        CPU: 1.426s
     CGroup: /user.slice/user-1000.slice/user@1000.service/app.slice/docker.service
             ├─3681 rootlesskit --net=slirp4netns --mtu=65520 --slirp4netns-sandbox=auto --slirp4netns-seccomp=auto --disable-host-loopback --port-driver=builtin --copy-up=/etc --copy-up=/run --propagation=rslave /usr/bin/dockerd-rootless.sh
             ├─3692 /proc/self/exe --net=slirp4netns --mtu=65520 --slirp4netns-sandbox=auto --slirp4netns-seccomp=auto --disable-host-loopback --port-driver=builtin --copy-up=/etc --copy-up=/run --propagation=rslave /usr/bin/dockerd-rootless.sh
             ├─3710 slirp4netns --mtu 65520 -r 3 --disable-host-loopback --enable-sandbox --enable-seccomp 3692 tap0
             ├─3717 dockerd
             └─3736 containerd --config /run/user/1000/docker/containerd/containerd.toml --log-level info

Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338797838Z" level=warning msg="WARNING: No io.weight (per device) support"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338829245Z" level=warning msg="WARNING: No io.max (rbps) support"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338856726Z" level=warning msg="WARNING: No io.max (wbps) support"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338883615Z" level=warning msg="WARNING: No io.max (riops) support"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338912540Z" level=warning msg="WARNING: No io.max (wiops) support"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.338998391Z" level=info msg="Docker daemon" commit=59118bf graphdriver=overlay2 version=23.0.3
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.339517181Z" level=info msg="Daemon has completed initialization"
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.446513731Z" level=info msg="[core] [Server #10] Server created" module=grpc
Apr 09 15:08:44 ubuntu systemd[1579]: Started Docker Application Container Engine (Rootless).
Apr 09 15:08:44 ubuntu dockerd-rootless.sh[3717]: time="2023-04-09T15:08:44.464193732Z" level=info msg="API listen on /run/user/1000/docker.sock"
+ DOCKER_HOST=unix:///run/user/1000/docker.sock /usr/bin/docker version
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
 rootlesskit:
  Version:          1.1.0
  ApiVersion:       1.1.1
  NetworkDriver:    slirp4netns
  PortDriver:       builtin
  StateDir:         /tmp/rootlesskit2331895727
 slirp4netns:
  Version:          1.0.1
  GitCommit:        6a7b16babc95b6a3056b33fb45b74a6f62262dd4
+ systemctl --user enable docker.service
Created symlink /home/ubuntu/.config/systemd/user/default.target.wants/docker.service → /home/ubuntu/.config/systemd/user/docker.service.
[INFO] Installed docker.service successfully.
[INFO] To control docker.service, run: `systemctl --user (start|stop|restart) docker.service`
[INFO] To run docker.service on system startup, run: `sudo loginctl enable-linger ubuntu`

[INFO] Creating CLI context "rootless"
Successfully created context "rootless"
[INFO] Use CLI context "rootless"
Current context is now "rootless"

[INFO] Make sure the following environment variables are set (or add them to ~/.bashrc):

export PATH=/usr/bin:$PATH
Some applications may require the following environment variable too:
export DOCKER_HOST=unix:///run/user/1000/docker.sock

```
