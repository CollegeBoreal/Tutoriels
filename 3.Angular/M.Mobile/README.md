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

```
$ npm install nativescript@next --global 
```

Vérifier l'installation

```
$ tns --version
5.0.0
```

### Projet


To create a new project, you use:

```
$ tns create <app name>
```

To build your project locally you use:
```
$ tns build <platform>
```

NOTE: Local builds require additional setup of your environment. You can find more information here: https://docs.nativescript.org/start/quick-setup


To build your project in the cloud you can use:
```
tns cloud build <platform>
```

NOTE: Cloud builds require Telerik account. You can find more information here: https://docs.nativescript.org/sidekick/intro/requirements


If you want to experiment with NativeScript in your browser, try the Playground: https://play.nativescript.org


If you have any questions, check Stack Overflow: https://stackoverflow.com/questions/tagged/nativescript and our public Slack channel: https://nativescriptcommunity.slack.com/


##### Check the installed version

```
$ tns --version
6.0.0-2019-06-14-134656-13407
```

##### Check if the emulator can run correctly

```
$ tns doctor
No issues were detected.
Your ANDROID_HOME environment variable is set and points to correct directory.
Your adb from the Android SDK is correctly installed.
The Android SDK is installed.
A compatible Android SDK for compilation is found.
Javac is installed and is configured properly.
The Java Development Kit (JDK) is installed and is configured properly.
Local builds for iOS can be executed only on a macOS system. To build for iOS on a different operating system, you can use the NativeScript cloud infrastructure.
Component nativescript has 6.2.0-2019-09-04-074603-13841 version and is up to date.
```

# References

| Type       | Installation                   |
|------------|--------------------------------|
| Templates  | [Templates](Templates.md)      |
| Schematics | [Schematics](Schematics.md)    |


