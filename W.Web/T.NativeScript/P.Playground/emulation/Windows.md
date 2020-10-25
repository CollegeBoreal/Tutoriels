


## Windows


:bookmark: Ouvrir git bash

* Installer l'emulateur, les differents outils et la derniere version de la SDK Android

### :o: Ajouter les Variables d'environemment

* Ouvrir le fichier `~/.bashrc` avec `nano`

```bash
$ nano ~/.bashrc
```

* ajouter les alias suivants

```
alias sdkmanager=sdkmanager.bat
alias avdmanager=avdmanager.bat
```

### :a: Gestion de la SDK `Android`

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

* Creer le AVD (Android Virtual Device) avec l'utilitaire `avdmanager`

```bash
$ avdmanager create avd --name test --package "system-images;android-28;google_apis;x86_64"
Auto-selecting single ABI x86===========] 100% Fetch remote repository...
Do you wish to create a custom hardware profile? [no] no
```

* Vérifier


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
$ emulator -avd test -skin 768x1280 &
```

* Jouer avec l'AVD

<img src="../images/emulator.png" width="197" height="276"></img>

## References

https://gist.github.com/mrk-han/66ac1a724456cadf1c93f4218c6060ae
