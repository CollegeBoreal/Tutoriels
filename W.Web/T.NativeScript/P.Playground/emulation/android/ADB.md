# ADB (Android Debug Bus)

## :bookmark: Developer Options

https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/

- [x] ON - Developer Options 

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

### :m: Connexion avec cable 

Pour se connecter à l'appareil mobile Android, connecter l'appareil avec son cable  `USB`

- [ ] Capturer l':id: de l'appareil dans la variable d'environnement `$ANDROID_DEVICE`

* Capture

```
$ ANDROID_DEVICE=`adb devices | awk 'NR==2 {print $1}'`
```

* Vérification

```
$ echo $ANDROID_DEVICE
```

Est-ce bien l'appareil voulu?

```
$ adb devices
```

- [ ] Se connecter à l'appareil avec ADB CLI

:warning: Sous `git bash` rajouter `winpty` pour utiliser le shell

```
$ adb -s $ANDROID_DEVICE shell
```


### :m: Connexion WIFI

```
% adb -s $ANDROID_DEVICE tcpip 5555
restarting in TCP mode port: 5555
```

```
$ ANDROID_DEVICE_IP=`adb -s $ANDROID_DEVICE shell \
                            ip --family inet addr show wlan0 | cut -d/ -f1 | awk 'NR%2==0 {print $2}' `
```

* Vérification

```
$ echo $ANDROID_DEVICE_IP
```

* Connexion

```
$ adb connect $ANDROID_DEVICE_IP:5555   
```

* Déconnexion

```
$ adb disconnect $ANDROID_DEVICE_IP:5555
```

# References

```
$ sdkmanager --install "ndk;20.1.5948944" 
```

https://stackoverflow.com/questions/2604727/how-can-i-connect-to-android-with-adb-over-tcp

https://medium.com/@amanshuraikwar.in/connecting-to-android-device-with-adb-over-wifi-made-a-little-easy-39439d69b86b

https://stackoverflow.com/questions/4032960/how-do-i-get-an-apk-file-from-an-android-device

https://gist.github.com/mrk-han/66ac1a724456cadf1c93f4218c6060ae
