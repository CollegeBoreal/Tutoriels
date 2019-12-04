


## Windows


:bookmark: Ouvrir git bash

* Installer l'emulateur, les differents outils et la derniere version de la SDK Android

:warning: Sous Windows ajouter l'extension `.bat` à `sdkmanager` Voir => [c.f.](Windows.md#variables-denvironemment)

### Gestion de la SDK `Android`

:one: Verifier que les `packages` de la SDK sont installés

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

:two: Sinon les `Installer` 

```bash
$ sdkmanager "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
```

* Installer le package Android SDK version 28

```bash
$ sdkmanager --install "system-images;android-28;google_apis;x86_64"
```

* Vérifier l'installation du package Android SDK version 28


```bash
$ sdkmanager --list
Installed packages:=====================] 100% Computing updates...
  Path                                        | Version | Description                                | Location
  -------                                     | ------- | -------                                    | -------
...
  system-images;android-28;google_apis;x86_64 | 9       | Google APIs Intel x86 Atom_64 System Image | system-images\android-28\google_apis\x86_64\
...
```

### Pour créer un nouveau mobile (autre que test)

* Creer le AVD (Android Virtual Device) avec un SDK

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
$ emulator -avd test &
```

* Jouer avec l'AVD

![image](../images/emulator.png)


# Variables d'environemment

* Ouvrir le fichier `~/.bashrc` avec `nano`

```bash
$ nano ~/.bashrc
```

* ajouter les alias suivants

```
alias sdkmanager=sdkmanager.bat
alias avdmanager=avdmanager.bat
```

* Problème de JDK

modifier votre JDK en "/c/Program Files/java/jdk1.8.0_221"

```
export JAVA_HOME="/c/Program Files/java/jdk1.8.0_221"
```

