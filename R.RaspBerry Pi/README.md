# Raspberry Pi

| Date | Serie   | Model                                                                              | Memory | Core | Clock | Bits | Specific Signs    | Power Supply | Videos                                       |
|------|---------|------------------------------------------------------------------------------------|--------|------|-------|------|-------------------|--------------|----------------------------------------------|
| 2013 | :one:   | [B](https://raspberry-projects.com/pi/category/pi-hardware/raspberry-pi-model-b)  | 512Mb  | :one: | 700Mhz |  32 | StdSD, RCA Audio/Video | 1A       | [:tv:](https://www.youtube.com/watch?v=U7Dj7R8bu4k)       |
| 2014 | [:two:](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)   | [B](https://raspberry-projects.com/pi/category/pi-hardware/raspberry-pi-2-model-b)| 1Gb  | :four: | 900Mhz | 32 |  μSD, HDMI  | 1A       | [:tv:](https://www.youtube.com/watch?v=jmPgdcec53s)       |
| 2015 | [:three:](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)  | [B](https://raspberry-projects.com/pi/category/pi-hardware/raspberry-pi-3-model-b)| 1Gb  | :four: | 1.2Ghz | 64 | GigaBit Ethernet |2.1A       | [:tv:](https://www.youtube.com/watch?v=T_WlF9I5EGw)       |
| 2017 | [:three:](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) | [B+](https://raspberry-projects.com/pi/category/pi-hardware/raspberry-pi-3-model-b-pi-hardware)| 1Gb  | :four: | 1.4Ghz | 64 | GigaBit Ethernet |2.5A       | [:tv:](https://www.youtube.com/watch?v=izceGfkUtZU)       |


## Installation 

https://www.raspberrypi.org/documentation/installation/installing-images/

Dexter Industries Images

https://sourceforge.net/projects/dexterindustriesraspbianflavor/files/latest/download


** On Linux Terminal

- List all Flash Devices

```
$ lsblk
```

- UnMount the devices

```
$ umount /dev/mmcblk0p1 /dev/mmcblk0p2
```

- burn the zip

```
$ unzip -p ~/Downloads/2019-09-26-raspbian-buster-full.zip | \
         sudo dd of=/dev/mmcblk0 bs=4M conv=fsync
```
## LCD Display

https://www.raspberrypi-spy.co.uk/2017/11/how-to-rotate-the-raspberry-pi-display-output/

```
sudo nano /boot/config.txt
```

add lcd_rotate=2
