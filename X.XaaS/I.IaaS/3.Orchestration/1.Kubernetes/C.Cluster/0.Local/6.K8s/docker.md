# Docker :whale:

:round_pushpin: Adding the `Docker` package repository to the package manager registry  

- [ ] Add the Docker official `pgp` key :key: that will go to the `/etc/apt/trusted.gpg` binary file

* add the PGP key

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

* Verify that you now have the key with the fingerprint `9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88`, by searching for the last 8 characters of the fingerprint.

```
$ sudo apt-key fingerprint 0EBFCD88
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

- [ ] Create the docker debian repository file

```
$ sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release --codename --short) stable"
```

:round_pushpin: Install the :whale: `Docker` engine

```
$ sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

:round_pushpin: Check [Docker Networking](https://stackoverflow.com/a/60897412)

Docker uses `iptables` and a kernel module called `br_netfilter` to manage inter-container networking. When the Docker daemon starts, it creates a variety of IPTables rules it required to operate.

- [ ] br_netfilter

```
$ sudo lsmod | grep br_netfilter
br_netfilter           28672  0
bridge                176128  1 br_netfilter
```

- [ ] iptables

```
$ sudo iptables --list | grep DOCKER
DOCKER-USER  all  --  anywhere             anywhere            
DOCKER-ISOLATION-STAGE-1  all  --  anywhere             anywhere            
DOCKER     all  --  anywhere             anywhere            
Chain DOCKER (1 references)
Chain DOCKER-ISOLATION-STAGE-1 (1 references)
DOCKER-ISOLATION-STAGE-2  all  --  anywhere             anywhere            
Chain DOCKER-ISOLATION-STAGE-2 (1 references)
Chain DOCKER-USER (1 references)
```

- [ ] Check that the service is enabled

```
$ systemctl list-unit-files | grep docker
docker.service                         enabled         enabled      
docker.socket                          enabled         enabled  
```

- [ ] Check that the service is active

```
$ systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2021-03-04 19:35:11 UTC; 40s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 5014 (dockerd)
      Tasks: 24
     Memory: 45.0M
     CGroup: /system.slice/docker.service
             └─5014 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

Mar 04 19:35:09 lepus dockerd[5014]: time="2021-03-04T19:35:09.401552372Z" level=warning msg="Your kernel d>
Mar 04 19:35:09 lepus dockerd[5014]: time="2021-03-04T19:35:09.401571865Z" level=warning msg="Your kernel d>
Mar 04 19:35:09 lepus dockerd[5014]: time="2021-03-04T19:35:09.401582174Z" level=warning msg="Your kernel d>
Mar 04 19:35:09 lepus dockerd[5014]: time="2021-03-04T19:35:09.401769185Z" level=info msg="Loading containe>
Mar 04 19:35:10 lepus dockerd[5014]: time="2021-03-04T19:35:10.247296387Z" level=info msg="Default bridge (>
Mar 04 19:35:10 lepus dockerd[5014]: time="2021-03-04T19:35:10.779249707Z" level=info msg="Loading containe>
Mar 04 19:35:11 lepus dockerd[5014]: time="2021-03-04T19:35:11.254944437Z" level=info msg="Docker daemon" c>
Mar 04 19:35:11 lepus dockerd[5014]: time="2021-03-04T19:35:11.255105264Z" level=info msg="Daemon has compl>
Mar 04 19:35:11 lepus systemd[1]: Started Docker Application Container Engine.
Mar 04 19:35:11 lepus dockerd[5014]: time="2021-03-04T19:35:11.425829313Z" level=info msg="API listen on /r>
```
