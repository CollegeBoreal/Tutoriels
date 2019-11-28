# :green_apple: Apple


## MacOS Mojave Final Version

L'operation peut prendre plusieurs minutes

```
$ sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia \
       --volume /Volumes/NO\ NAME && echo "Mojave Drive Created"
```

       Password:
       Ready to start.
       To continue we need to erase the volume at /Volumes/Installer OS X El Capitan.
       If you wish to continue type (Y) then press return: y
       Erasing disk: 0%... 10%... 20%... 30%... 100%
       Copying to disk: 0%... 10%... 20%... 30%... 40%... 50%... 60%... 70%... 80%... 90%... 100%
       Making disk bootable...
       Copying boot files...
       Install media now available at "/Volumes/Install macOS Mojave"
       Mojave Drive Created


## :m: Restore image with `dd`

https://www.cyberciti.biz/faq/how-to-create-disk-image-on-mac-os-x-with-dd-command/

<image src="images/WhichBay.png" width="200" height="300"></image>


```
$ diskutil list
```

```
$ diskutil unmountDisk /dev/disk3
```

```
$ sudo dd if=Macintosh\ HD.dmg of=/dev/disk3
```





# Development Tools

https://medium.com/xcblog/top-5-command-line-tools-for-ios-developer-91c0455247f0

:one: xcrun ([Xcode](https://developer.apple.com/xcode/) Run)

```
% xcrun simctl list
```

