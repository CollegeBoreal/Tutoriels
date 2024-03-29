# Starting Minikube

### :a: MacOS (Darwin)

```
$ minikube start 
```



<img src="images/minikube-start.png" width="2710" heigth="1462"></img>


### :b: Windows (powershell)

```
PS > minikube --cpus 2 --memory 4096 start
```


<img src="images/minikube-windows-ps-start.png" width="1181" heigth="470"></img>

### :ab: Connecting to the VM


:pushpin: Accessing minikube host with ssh key :key:

```
$ ssh -t -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip)
```

:pushpin: Accessing minikube host with ssh

```
$ minikube ssh
                         _             _            
            _         _ ( )           ( )           
  ___ ___  (_)  ___  (_)| |/')  _   _ | |_      __  
/' _ ` _ `\| |/' _ `\| || , <  ( ) ( )| '_`\  /'__`\
| ( ) ( ) || || ( ) || || |\`\ | (_) || |_) )(  ___/
(_) (_) (_)(_)(_) (_)(_)(_) (_)`\___/'(_,__/'`\____)

$ 
```

:pushpin: While accessing minikube via ssh, get docker's version

```
$ docker version
Client: Docker Engine - Community
 Version:           19.03.6
 API version:       1.40
 Go version:        go1.12.16
 Git commit:        369ce74a3c
 Built:             Thu Feb 13 01:24:49 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.6
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.16
  Git commit:       369ce74a3c
  Built:            Thu Feb 13 01:32:22 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.12
  GitCommit:        35bd7a5f69c13e1563af8a93431411cd9ecf5021
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
```

## :o: Kube Config

```
PS > kubectl config view
apiVersion: v1
clusters:
- cluster:
    certificate-authority: C:\Users\Administrator\.minikube\ca.crt
    server: https://10.13.5.51:8443
  name: minikube
contexts:
- context:
    cluster: minikube
    user: minikube
  name: minikube
current-context: minikube
kind: Config
preferences: {}
users:
- name: minikube
  user:
    client-certificate: C:\Users\Administrator\.minikube\client.crt
    client-key: C:\Users\Administrator\.minikube\client.key
```
