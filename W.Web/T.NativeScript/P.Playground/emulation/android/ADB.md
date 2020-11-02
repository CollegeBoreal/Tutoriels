# ADB (Android Debug Bus)

## :o: Établi la connection avec Android

https://stackoverflow.com/questions/21170392/android-device-does-not-show-up-in-adb-list

1. turn on developer options on the android device.
1. enable check box for stay awake.
1. enable check box for USB debugging.
1. open cmd
1. got to platform tools adt tools here https://developer.android.com/studio.
1. adb kill-server
1. adb start-server
1. adb devices

## :a: Utilisation de l'ADB CLI



```
$ ANDROID_DEVICE=`adb devices | awk 'NR==2 {print $1}'`
```

:warning: Sous `git bash` rajouter `winpty` pour utiliser le shell

```
$ adb -s $ANDROID_DEVICE shell
```

```
% adb -s $ANDROID_DEVICE tcpip 5555
restarting in TCP mode port: 5555
```

```
$ ANDROID_DEVICE_IP=`adb -s $ANDROID_DEVICE shell ifconfig wlan0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}'`
$ adb connect $ANDROID_DEVICE_IP:5555   
```


```
$ sdkmanager --install "ndk;20.1.5948944" 
```


https://medium.com/@amanshuraikwar.in/connecting-to-android-device-with-adb-over-wifi-made-a-little-easy-39439d69b86b



https://stackoverflow.com/questions/4032960/how-do-i-get-an-apk-file-from-an-android-device


## References

https://gist.github.com/mrk-han/66ac1a724456cadf1c93f4218c6060ae
