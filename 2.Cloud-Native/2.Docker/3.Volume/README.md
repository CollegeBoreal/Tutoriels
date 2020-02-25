# Volumes


https://docs.docker.com/storage/volumes/

```
$ docker plugin install --grant-all-permissions vieux/sshfs
```


```
$ docker volume create --driver vieux/sshfs  -o sshcmd=1and1.com:volumes  sshvolume
```


```
$ docker plugin ls
```
