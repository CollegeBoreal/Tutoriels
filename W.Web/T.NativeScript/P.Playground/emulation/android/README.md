# Android

### :a: Gestion de la SDK `Android`

Sous `git bash`

:zero: Installer l'émulateur, les outils pour les plateformes et les référentiels

```bash
$ sdkmanager "emulator" \
             "platform-tools" \
             "extras;android;m2repository" "extras;google;m2repository"
```

:one: Installer l'émulateur Android [Pie](https://www.android.com/versions/pie-9-0) version 28

- [x] Installer l'émulateur, la plateforme android et les outils version 28

```bash
$ sdkmanager "platforms;android-28" "build-tools;28.0.3"
```

- [x] Vérifier l'installation

```bash
$ sdkmanager --list
Installed packages:=====================] 100% Computing updates...
  Path                                        | Version | Description                                | Location
  -------                                     | ------- | -------                                    | -------
  build-tools;28.0.3                          | 28.0.3  | Android SDK Build-Tools 28.0.3             | build-tools\28.0.3\
  emulator                                    | 29.2.2  | Android Emulator                           | emulator\
  extras;android;m2repository                 | 47.0.0  | Android Support Repository                 | extras\android\m2repository\
  extras;google;m2repository                  | 58      | Google Repository                          | extras\google\m2repository\
  platform-tools                              | 29.0.4  | Android SDK Platform-Tools                 | platform-tools\
  platforms;android-28                        | 6       | Android SDK Platform 28                    | platforms\android-28\
  system-images;android-28;google_apis;x86_64 | 9       | Google APIs Intel x86 Atom_64 System Image | system-images\android-28\google_apis\x86_64\
  tools                                       | 26.1.1  | Android SDK Tools 26.1.1                   | tools\
```

:two: Installer l'image Android version 28

- [x] Installer les images, les APIs de l'Android SDK version 28 sur l'émulateur X86_64

```bash
$ sdkmanager --install "system-images;android-28;google_apis;x86_64"
```

- [x] Vérifier l'installation

```bash
$ sdkmanager --list
Installed packages:=====================] 100% Computing updates...
  Path                                        | Version | Description                                | Location
  -------                                     | ------- | -------                                    | -------
...
  system-images;android-28;google_apis;x86_64 | 9       | Google APIs Intel x86 Atom_64 System Image | system-images\android-28\google_apis\x86_64\
...
```

### :b: Pour créer un nouveau mobile

- [x] Créer le AVD (Android Virtual Device) avec l'utilitaire `avdmanager`

```bash
$ echo no | avdmanager create avd --name test --package "system-images;android-28;google_apis;x86_64" --device "pixel"
```

- [x] Embellir l'émulateur pour qu'il ressemble à un smartphone

```bash
$ cat << EOF >> ~/.android/avd/test.avd/config.ini
showDeviceFrame=yes
skin.dynamic=yes
skin.name=pixel_3a
skin.path=$ANDROID_HOME/skins/pixel_3a
hw.gpu.enabled=yes
hw.gpu.mode=auto
hw.ramSize=1536
EOF
```

- [x] Vérifier


```bash
$ avdmanager list avd
Available Android Virtual Devices:
    Name: test
    Path: C:\Users\300098957\.android\avd\test.avd
  Target: Google APIs (Google Inc.)
          Based on: Android API 28 Tag/ABI: google_apis/x86_64
```

* Lancer l'appareil virtuel Android

```bash
$ emulator -avd test &
```

* Jouer avec l'AVD

<!--img src="../images/emulator.png" width="197" height="276"></img-->
<img src="../../images/Test_Pixel.png" width="234" height="426"></img>


:x: Supprimer

```
$ avdmanager delete avd --name test
```

## :ab: Utiliser l'Android CLI

[ADB CLI](ADB.md)
