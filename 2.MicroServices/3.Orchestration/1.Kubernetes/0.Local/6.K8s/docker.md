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
