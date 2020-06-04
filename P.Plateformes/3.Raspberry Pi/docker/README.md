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


:a: Start the Docker (local) installer

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


:b: Start the Docker (remote) installer with `docker-machine`


```
$ docker-machine create --driver generic \
                        --generic-ip-address=192.168.1.110 \
                        --generic-ssh-user=pi \
                        --generic-ssh-key ~/.ssh/ramena.pk \
                        --engine-storage-driver overlay2 \
                      ambohibao
```


References: 

https://blog.alexellis.io/getting-started-with-docker-on-raspberry-pi/
