# Container D

### :a: Architecture

<img src="https://containerd.io/img/architecture.png" width="891" height="540"></img>


### :open_book: Docker-CLI, dockerd, containerd, runc, containerd-shim, ... WTH

:star: [=> docker components explained](http://alexander.holbreich.org/docker-components-explained)


## :b: ContainerD Commands

:closed_book: https://www.mankier.com/package/containerd

```
$ ctr
NAME:
   ctr - 
        __
  _____/ /______
 / ___/ __/ ___/
/ /__/ /_/ /
\___/\__/_/

containerd CLI


USAGE:
   ctr [global options] command [command options] [arguments...]

VERSION:
   1.3.7

DESCRIPTION:
   
ctr is an unsupported debug and administrative client for interacting
with the containerd daemon. Because it is unsupported, the commands,
options, and operations are not guaranteed to be backward compatible or
stable from release to release of the containerd project.

COMMANDS:
   plugins, plugin            provides information about containerd plugins
   version                    print the client and server versions
   containers, c, container   manage containers
   content                    manage content
   events, event              display containerd events
   images, image, i           manage images
   leases                     manage leases
   namespaces, namespace, ns  manage namespaces
   pprof                      provide golang pprof outputs for containerd
   run                        run a container
   snapshots, snapshot        manage snapshots
   tasks, t, task             manage tasks
   install                    install a new package
   shim                       interact with a shim directly
   help, h                    Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --debug                      enable debug output in logs
   --address value, -a value    address for containerd's GRPC server (default: "/run/containerd/containerd.sock")
   --timeout value              total timeout for ctr commands (default: 0s)
   --connect-timeout value      timeout for connecting to containerd (default: 0s)
   --namespace value, -n value  namespace to use with commands (default: "default") [$CONTAINERD_NAMESPACE]
   --help, -h                   show help
   --version, -v                print the version
```

### :zero: From LinuxKit/Darwin

https://sweetcode.io/getting-started-with-containerd/

```
docker-desktop:~# ctr --namespace services.linuxkit container ls
CONTAINER                IMAGE    RUNTIME                           
acpid                    -        io.containerd.runtime.v1.linux    
diagnose                 -        io.containerd.runtime.v1.linux    
docker                   -        io.containerd.runtime.v1.linux    
host-timesync-daemon     -        io.containerd.runtime.v1.linux    
kmsg                     -        io.containerd.runtime.v1.linux    
sntpc                    -        io.containerd.runtime.v1.linux    
socks                    -        io.containerd.runtime.v1.linux    
trim-after-delete        -        io.containerd.runtime.v1.linux    
vpnkit-forwarder         -        io.containerd.runtime.v1.linux    
write-and-rotate-logs    -        io.containerd.runtime.v1.linux    
```

```
docker-desktop:~# ctr --namespace services.linuxkit container info docker | more
{
    "ID": "docker",
    "Labels": null,
    "Image": "",
    "Runtime": {
        "Name": "io.containerd.runtime.v1.linux",
        "Options": null
    },
    "SnapshotKey": "",
    "Snapshotter": "",
    "CreatedAt": "2020-01-15T14:16:08.816898999Z",
    "UpdatedAt": "2020-01-15T14:16:08.816898999Z",
    "Extensions": null,
    "Spec": {
        "ociVersion": "1.0.1",
        "process": {
            "user": {
                "uid": 0,
                "gid": 0
            },
            "args": [
                "/usr/local/bin/docker-init",
                "/usr/bin/entrypoint.sh"
```



### :one: From docker-machine ssh/HyperV
   
```
docker@CB-HYPERV:~$ sudo ctr --address /var/run/docker/containerd/containerd.sock container ls
CONTAINER    IMAGE    RUNTIME
```

```
docker@CB-HYPERV:~$ sudo ctr --address /var/run/docker/containerd/containerd.sock image ls
REF TYPE DIGEST SIZE PLATFORMS LABELS
```

# Références 


## Container RunTime

https://www.ianlewis.org/en/container-runtimes-part-1-introduction-container-r

https://medium.com/@alenkacz/whats-the-difference-between-runc-containerd-docker-3fc8f79d4d6e
