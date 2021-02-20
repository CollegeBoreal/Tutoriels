# Package Manager


## :a: Windows

Installer ([C.Chocolatey])

## :b: MacOS

Avec [brew.sh](http://brew.sh/)

:one: Suivre le lien --v--

  Installer sous [MacOS](MacOS.md)

:two: Installer des `packages`

* Docker

```
$ brew cask install docker-desktop
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

ou

```
$ brew gist-logs mp4box
```

:five: Fix tap

```
$ brew untap caskroom/cask caskroom/versions
```


:ab: Linux - Debian

https://doc.ubuntu-fr.org/dpkg
