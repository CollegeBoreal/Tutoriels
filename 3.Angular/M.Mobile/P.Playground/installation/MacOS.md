# MacOS

* Ouvrir un terminal et executer la commande

```
$ ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
These scripts require sudo permissions
Password:
NativeScript requires Xcode.
If you do not have Xcode installed, download and install it from App Store and run it once to complete its setup.
Do you have Xcode installed? (y/n)
y
```
* Lire la License XCode Apple en appuyant :

    - plusieurs fois sur la touche `espace` 
    
    - et en finissant avec la touche `q`

```
By typing 'agree' you are agreeing to the terms of the software license agreements. Type 'print' to print them or anything else to cancel, [agree, print, cancel] agree

You can view the license agreements in Xcode's About Box, or at /Applications/Xcode.app/Contents/Resources/English.lproj/License.rtf
```

* Accepter la License en tapant :  `agree`



* Menu d'installation

```
This setup script will request to install the following on your machine:
1. Homebrew
2. Google Chrome
3. Open JDK 8
4. Android SDK
5. Android emulator system image
6. HAXM (Hardware accelerated Android emulator)
7. Android emulator
8. CocoaPods
9. CocoaPods setup
10. pip
11. six
12. xcodeproj

```

:warning: Installer par defaut en tapant `Y` soit le logiciel se mettra a jour soit ile ne sera pas installe

* Installer Homebrew

```
Step 1 of 12:
Allow the script to install Homebrew?
(Y)es/(N)o
Y
```

* Installer Google Chrome

```
Step 2 of 12:
Allow the script to install Google Chrome?
(Y)es/(N)o
Y
...
Error: It seems there is already an App at '/Applications/Google Chrome.app'.
WARNING: Google Chrome not installed
```

* Installer Open JDK 8

```
Step 3 of 12:
Allow the script to install Open JDK 8?
(Y)es/(N)o
Y
Set JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
...
Installing Open JDK 8 ... This might take some time, please, be patient.
Warning: Cask 'adoptopenjdk8' is already installed.
```

```
Step 4 of 12:
Allow the script to install Android SDK?
Note that if you type all you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll
Y
```

```
Step 5 of 12:
Do you want to install Android emulator system image? (y/n)
y
```

```
Step 6 of 12:
Do you want to install HAXM (Hardware accelerated Android emulator)? (y/n)
y
```

## :three: Verification

* Avec brew:

```
% brew cask list --versions
```

Verifier que les `artifacts` suivant sont presents

```
adoptopenjdk8 8,222:b10
android-ndk 16b
android-platform-tools 27.0.1
android-sdk 3859397
intel-haxm 7.1.0
```

* Avec gem : pour [cocoapods](https://cocoapods.org/) `dependency manager` pour `Swift` et `Objective C`

```
$ gem dependency cocoapods 
```


Verifier que les `artifacts` suivant sont presents

```
Gem cocoapods-1.8.4
  activesupport (>= 4.0.2, < 5)
  bacon (~> 1.1, development)
  bundler (~> 1.3, development)
  claide (>= 1.0.2, < 2.0)
  cocoapods-core (= 1.8.4)
  ...
```

## uninstall node and install nvm

:pushpin: remove old `node`

```
$ sudo rm -rf /usr/local/lib/node_modules
$ brew cleanup
```

:pushpin: install `nvm`

```
$ brew update
$ brew install nvm
```

:pushpin: install `node`

```
$ nvm install node
```

