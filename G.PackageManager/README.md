# Package Manager


## :a: Windows


Avec [chocolatey.org](http://chocolatey.org/)

:one: Suivre le lien --v--

   Installer sous [Windows](Windows.md)

:two: Installer des `packages`

:bulb: Rajouter `-not-silent` pour debugger avec le UI

* Docker

```
$ choco install docker
```

* Docker

```
$ choco install google-chrome
```

:three: Chercher des packages [choco](https://chocolatey.org/packages)

```
$ choco search musescore
```

## :b: MacOS

Avec [brew.sh](http://brew.sh/)

:one: Suivre le lien --v--

  Installer sous [MacOS](MacOS.md)

:two: Installer des `packages`

* Docker

```
$ brew cask install docker
```

* Google Chrome

```
$ brew cask install chrome
```

:three: Chercher des packages [cask](https://formulae.brew.sh/cask/)

```
$ brew search --desc 'musescore' 
```

:four: Debug
 
```
$ brew install -v --debug mp4box # will give you everything. Likewise, brew gist-logs mp4box
```

:ab: Linux - Debian

https://doc.ubuntu-fr.org/dpkg
