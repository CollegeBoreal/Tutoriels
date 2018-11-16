# HyperKit

https://stackoverflow.com/questions/39739560/how-to-access-the-vm-created-by-dockers-hyperkit

```
$ screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty
```

https://stackoverflow.com/questions/1509677/kill-detached-screen-session

* List the screen sessions

```
$ screen -ls
```

  There is a screen on:
  `19352`.ttys003.tsihombe	(Attached)
  1 Socket in /var/folders/92/whngrwp13hbd_n84tksq9vk80000gr/T/.screen.


* Quit the session

```
$ screen -X -S [session # you want to qui] quit
```
