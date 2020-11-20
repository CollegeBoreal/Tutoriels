# IDE

[Choose an editor](https://docs.nativescript.org/start/cli-basics#choosing-an-editor)

### :o: Visual Studio Code (VSC)

### :p: Installation

##### :computer: Windows

```
PS > choco install vscode
``` 

##### :apple: MacOS

```
% brew cask install visual-studio-code
```

### :p: Utilisation

[NativeScript pour VS Code](https://nativescript.org/nativescript-for-visual-studio-code)





### :a: Android Studio

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

Pour utiliser la SDK Android installée avec 'HomeBrew`, il faut renommer la SDK installée par `Android Studio` 

```
$ mv ~/Library/Android/sdk ~/Library/Android/sdk-intellij
```

et fournir le lien symbolique de $ANDROID_HOME

```
$ ln -s $ANDROID_HOME ~/Library/Android/sdk
```

### :b: XCode

##### :computer: Windows

:x: N'existe pas sur Windows

##### :apple: MacOS

:+1: Est installé par défaut pour faire du développement
