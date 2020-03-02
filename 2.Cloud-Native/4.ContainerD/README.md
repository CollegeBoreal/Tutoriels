# Container D

<img src="https://containerd.io/img/architecture.png" width="1782" height="1080"></img>

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
# ctr -n services.linuxkit container info docker | more
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
