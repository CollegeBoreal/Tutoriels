# Volumes


https://docs.docker.com/storage/volumes/

```
$ docker plugin install --grant-all-permissions vieux/sshfs
```


```
$ docker volume create --driver vieux/sshfs  -o sshcmd=1and1.com:/kunden/homepages/2/d92706092/htdocs/volumes  sshvolume
```


```
$ docker plugin ls
```


```
$ MOUNT="type=volume,volume-driver=vieux/sshfs,src=sshvolume,dst=/app"
$ docker run --interactive --tty --rm --mount $MOUNT busybox
```
