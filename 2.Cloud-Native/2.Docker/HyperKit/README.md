# HyperKit


[moby/HyperKit](https://github.com/moby/hyperkit)

https://stackoverflow.com/questions/39739560/how-to-access-the-vm-created-by-dockers-hyperkit


Stored in the sandBox app directory `~/Library/Containers/`

```
$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty
```

https://stackoverflow.com/questions/1509677/kill-detached-screen-session

* List the screen sessions

```
$ screen -ls
```
>  There is a screen on:
>   
>    `19352`.ttys003.tsihombe	(Attached)
>  
>  1 Socket in /var/folders/92/whngrwp13hbd_n84tksq9vk80000gr/T/.screen.

* Quit the session

```
$ screen -X -S [session # you want to qui] quit
```

Example

```
$ screen -X -S 19352 quit
```

# References:

### Apple Hypervisor

https://developer.apple.com/documentation/hypervisor

```
$ sysctl kern.hv_support
```


