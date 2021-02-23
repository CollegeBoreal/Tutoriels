# NativeScript :iphone:

## :zero: Site

https://www.nativescript.org/

## Documentation

   ### Book :closed_book:

https://www.nativescript.org/get-the-nativescript-book

   ### Video :movie_camera:
   
https://www.nativescript.org/books-and-videos

## :one: Playground

| Type    | Installation                   |
|---------|--------------------------------|
| Preview | https://play.nativescript.org/ |
| Local   | [Playground](P.Playground)     |

## :two: Utilisation

### NativeScript CLI

- [ ] Installer la dernière version

```
$ npm install nativescript --global 
```

- [ ] Vérifier l'installation

```
$ ns --version
7.2.0
```

##### :x: Autres versions 

- [ ] Installer une version spécifique

```
$ npm install nativescript@6.5.1 --global 
```

- [ ] Vérifier l'installation

```
$ tns --version
6.5.1
```

## :three: IDE

[Installer les IDEs](IDE.md)


## :four: Projet


To create a new project, you use:

```
$ ns create <app name>
```

To build your project locally you use:
```
$ ns build <platform>
```

NOTE: Local builds require additional setup of your environment. You can find more information here: https://docs.nativescript.org/start/quick-setup


To build your project in the cloud you can use:
```
$ ns cloud build <platform>
```

NOTE: Cloud builds require Telerik account. You can find more information here: https://docs.nativescript.org/sidekick/intro/requirements


If you want to experiment with NativeScript in your browser, try the Playground: https://play.nativescript.org


If you have any questions, check Stack Overflow: https://stackoverflow.com/questions/tagged/nativescript and our public Slack channel: https://nativescriptcommunity.slack.com/


##### Check if the emulator can run correctly

```
$  ns doctor                       
Error while loading nativescript-cloud is: Default commands should be required before child commands
✔ Getting environment information 

No issues were detected.
✔ Your ANDROID_HOME environment variable is set and points to correct directory.
✔ Your adb from the Android SDK is correctly installed.
✔ The Android SDK is installed.
✔ A compatible Android SDK for compilation is found.
✔ Javac is installed and is configured properly.
✔ The Java Development Kit (JDK) is installed and is configured properly.
✔ Xcode is installed and is configured properly.
✔ xcodeproj is installed and is configured properly.
✔ CocoaPods are installed.
✔ CocoaPods update is not required.
✔ CocoaPods are configured properly.
✔ Your current CocoaPods version is newer than 1.0.0.
✔ Python installed and configured correctly.
✔ The Python 'six' package is found.
✔ Xcode version 12.0.1 satisfies minimum required version 10.
✔ Getting NativeScript components versions information...
✔ Component nativescript has 7.0.11 version and is up to date.
```

# References

| Type         | Installation                                                               |
|--------------|----------------------------------------------------------------------------|
| Templates    | [Templates](Templates.md)                                                  |
| Schematics   | [Schematics](Schematics.md)                                                |
| NS 7 imports | [Reference](https://nativescript.org/blog/nativescript-7-import-reference) |




