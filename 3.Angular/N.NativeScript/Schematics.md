# Schematics

[Documentation](https://github.com/NativeScript/nativescript-schematics)

## :m: NativeScript Schematics

```
$ npm install @nativescript/schematics --global 
```

```
$ ng generate module browse
An unhandled exception occurred: Could not find module "@nativescript/schematics"
```

https://github.com/NativeScript/nativescript-schematics/issues/130

```
$ npm install --save-dev @schematics/angular
$ npm install --save-dev @nativescript/schematics
```

Note: MacOS, Linux add `--unsafe-perm`


## :m: Web + Mobile Code Sharing project

```
$ ng new --collection=@nativescript/schematics my-shared-app --shared
```


