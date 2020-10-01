# NativeScript 


## Installation de Playground 

### sur Windows

[Emulateur sur Windows](Windows.md)

### sur MacOS

[Emulateur sur MacOS](MacOS.md)

## Test de l'Emulateur Android

```
$ ANDROID_DEVICE=`adb devices | awk 'NR==2 {print $1}'`
```

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




