# Headless


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

```
pi@raspberrypi:~ $ sudo vi /boot/config.txt
gpu_mem=16
```


https://www.raspberrypi.org/forums/viewtopic.php?t=44429
