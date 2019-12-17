# Moodle Box



https://moodlebox.net


```
$ wget -c https://github.com/moodlebox/moodlebox/releases/download/v3.5.1/moodlebox-3.5.1.img.gz \
          ~/Downloads/moodlebox-3.5.1.img.gz
```

    List all Flash Devices

```
$ lsblk
```

    UnMount the devices

```
$ umount /dev/mmcblk0p1 /dev/mmcblk0p2
```


```
$ gzip -d ~/Downloads/moodlebox-3.5.1.img.gz | \
         sudo dd of=/dev/mmcblk0 bs=4M conv=fsync
```
