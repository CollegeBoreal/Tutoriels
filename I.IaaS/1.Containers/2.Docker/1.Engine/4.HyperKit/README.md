# HyperKit


[moby/HyperKit](https://github.com/moby/hyperkit)


### Stored in the sandBox app directory `~/Library/Containers/`

https://stackoverflow.com/questions/39739560/how-to-access-the-vm-created-by-dockers-hyperkit


## :m: Accessing the Docker-Desktop LinuxKit VM

:pushpin: use [screen](https://linuxize.com/post/how-to-use-linux-screen/)

* Listing all the VMs

```
$ ls ~/Library/Containers/com.docker.docker/Data/vms
```

:one: Open the `TTY` of VM `#` 0 unsing `screen`

```
$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty
```

then type Enter to get to the prompt

```
docker-desktop:~# 
```

:bulb: To get the namespace name type `CTRL-D`

```
docker-desktop:~# __  __

Welcome to LinuxKit

                        ##         .
                  ## ## ##        ==
               ## ## ## ## ##    ===
           /"""""""""""""""""__/ ===
          {                       /  ===-
           _____ O           __/
                        __/
              _________/

docker-desktop login: root (automatic login)

Welcome to LinuxKit!

NOTE: This system is namespaced.
The namespace you are currently in may not be the root.
System services are namespaced; to access, use `ctr -n services.linuxkit ...`
login[2334]: root login on 'ttyS0'
docker-desktop:~# 
```

:two: To exit the session, type `Ctrl-A k` (then y to confirm).


## :m: killing detached screen session

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
$ screen -S <session#> -X quit # <session#> you want to quit .ie 19352, -X execute <cmd>  
```

Example

```
$ screen -S 19352 -X quit
```

# References:

### Apple Hypervisor

https://developer.apple.com/documentation/hypervisor

```
$ sysctl kern.hv_support
```


