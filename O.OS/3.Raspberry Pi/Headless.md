# Headless

Changer la configuration pour diminuer l'utilisation de la mémoire pour le GPU


* Avant

```
pi@raspberrypi:~ $ vcgencmd get_mem gpu
gpu=64M
```

```
pi@raspberrypi:~ $ vcgencmd get_mem arl
arl=0M
```

```
pi@raspberrypi:~ $ vcgencmd get_mem arm
arm=448M
```

* Changer la configuration en éditant le fichier `/boot/config.txt` et rebooter

```
pi@raspberrypi:~ $ sudo vi /boot/config.txt
gpu_mem=16
```

* Après

```
pi@raspberrypi:~ $ vcgencmd get_mem gpu
gpu=16M
```


```
pi@raspberrypi:~ $ vcgencmd get_mem arm
arm=496M
```

# References:

https://www.raspberrypi.org/forums/viewtopic.php?t=44429

https://www.raspberrypi.org/documentation/raspbian/applications/vcgencmd.md
