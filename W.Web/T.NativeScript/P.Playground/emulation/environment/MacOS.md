


# MacOS

:bookmark: Ouvrir le terminal

* Installer l'emulateur, les differents outils, la derniere version de la SDK Android et le simulateur iOS

## :o: Ajouter les Variables d'environemment

* En fonction du shell, ouvrir le fichier `~/.zshrc` **(zsh)** ou `~/.bashrc` **(bash)** avec `[nano]`

```bash
$ nano ~/.zshrc
```


* Ajouter (ou Vérifier) les variables d'environemments suivantes:

- [x] Pour acceder a l'emulateur Android

```
## Android Specific
export ANDROID_HOME=/usr/local/share/android-sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$PATH
```

- [x] Pour acceder au Simulateur Mac

```
## iOS Specific
alias simulator='open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app'
```

### :bulb: Exit

Quitter et revenir dans `git bash` pour que les variables soient prises en compte


