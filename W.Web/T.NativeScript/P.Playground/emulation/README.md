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
$ sdkmanager --install "ndk;20.1.5948944" 
```




