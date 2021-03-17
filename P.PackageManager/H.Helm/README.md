# Helm

https://helm.sh/docs/intro/install/

## :gear: Install

#### :a: :penguin: Debian

https://helm.sh/docs/intro/install/#from-apt-debianubuntu

:bulb: Make sure downloading tools are installed

```
$ sudo apt-get install curl apt-transport-https --yes
```

:one: Add the `apt` key :key:

```
$ curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
```

:two: put the repository `drop-in` file in the the appropriate `source` folder

```
$ echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
```

:three: Install the package (along with updating the repos)

```
$ sudo apt-get update && sudo apt-get install helm
```

#### :b: :apple: Mac OS

```
$ brew install helm
```

#### :ab: :computer: Windows

```
PS > choco install kubernetes-helm
```

## :star: Usage

```
$ helm version        
version.BuildInfo{Version:"v3.5.3", GitCommit:"041ce5a2c17a58be0fcd5f5e16fb3e7e95fea622", GitTreeState:"dirty", GoVersion:"go1.16"}
```

https://helm.sh/docs/intro/using_helm/

```
$ helm search hub moodle
URL                                               	CHART VERSION	APP VERSION	DESCRIPTION                                       
https://artifacthub.io/packages/helm/bitnami/mo...	11.0.3       	3.10.1     	Moodle(TM) is a learning platform designed to p...
```

- [ ] List packages

```
$ helm ls
NAME  	NAMESPACE	REVISION	UPDATED                                	STATUS  	CHART       	APP VERSION
porter	default  	1       	2021-02-21 02:16:33.823649987 +0000 UTC	deployed	porter-0.2.1	0.4.1      
```
