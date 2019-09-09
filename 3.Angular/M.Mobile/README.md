# NativeScript

## Site

https://www.nativescript.org/

## Documentation

   ### Book :closed_book:

https://www.nativescript.org/get-the-nativescript-book

   ### Video :movie:
   
https://www.nativescript.org/books-and-videos

## Installation

### NativeScript

```
$ npm install nativescript@next --global 
```


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

## Creating Apps with Templates

https://docs.nativescript.org/angular/start/quick-setup

https://github.com/NativeScript/nativescript-app-templates

```
$ tns create my-tab-ng --template tns-template-tab-navigation-ng
```

## [Reference: ]NativeScript Schematics

```
$ npm install @nativescript/schematics --global 
```

Note: MacOS, Linux add `--unsafe-perm`


### Web + Mobile Code Sharing project

```
$ ng new --collection=@nativescript/schematics my-shared-app --shared
```

