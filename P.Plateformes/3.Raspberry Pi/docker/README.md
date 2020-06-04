# Docker on the pi


Connect with SSH

```
$ ssh pi@raspberrypi.local
```

The password is raspberry.

* using the Pi for a headless application 

```
Edit /boot/config.txt and add this line:

gpu_mem=16
```

* boot without UI to save memory

```
$ sudo systemctl set-default multi-user.target
```

* check the new setup

```
$ sudo systemctl get-default
```

* reboot

```
$ sudo systemctl reboot
```


* Start the Docker installer

```
$ curl -sSL https://get.docker.com | sh
```

* Configure Docker

```
$ sudo systemctl enable docker
```

You can now reboot the Pi, or start the Docker daemon with:

```
$ sudo systemctl start docker
```

* Enable Docker client

```
$ sudo usermod -aG docker pi
```


References: 

https://blog.alexellis.io/getting-started-with-docker-on-raspberry-pi/
