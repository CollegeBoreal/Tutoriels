# Volumes


Visualiser le contenu des volumes

```
% for i in `docker volume ls -q`; do echo "volume: ${i}"; docker run --rm -it -v ${i}:/vol alpine:latest ls /vol; echo; done;
```


https://docs.docker.com/storage/volumes/

```
$ docker plugin install --grant-all-permissions vieux/sshfs
```


```
$ docker volume create --driver vieux/sshfs  -o sshcmd=1and1.com:/path-to/volumes  sshvolume
```


```
$ docker plugin ls
```


```
$ MOUNT="type=volume,volume-driver=vieux/sshfs,src=sshvolume,dst=/app"
$ docker run --interactive --tty --rm --mount $MOUNT busybox
```
