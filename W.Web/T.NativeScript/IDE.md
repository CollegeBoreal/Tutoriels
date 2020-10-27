# IDE

## :o: Installation

### :pushpin: Android Studio

##### :computer: Windows

```
PS > choco install androidstudio
``` 

##### :apple: MacOS

```
% brew cask install android-studio
```

<img src="images/android-studio-preferences.png" alt="Preferences" width="521" height="377" >


:bulb: La présente installation du `Playground Local` utilise [`HomeBrew`](https://brew.sh/) qui installe la SDK Android sous:

```
% echo $ANDROID_HOME
/usr/local/share/android-sdk
```

Pour utiliser la SDK Android installée avec 'HomeBrew`, il faut renommer la SDK installée par `Android Studio` et fournir le lien symbolique de $ANDROID_HOME

```
$ mv ~/Library/Android/sdk ~/Library/Android/sdk-intellij
```

```
$ ln -s $ANDROID_HOME ~/Library/Android/sdk
```
