# :beer: HomeBrew

Avec [brew.sh](http://brew.sh/)

## :o: Installation

:round_pushpin: Executer la commande suivante dans le `Terminal`

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

:round_pushpin: Verifier l'installation

```
% brew list --cask --versions
% brew list --versions # Version originale avec package plus petits
```

:round_pushpin: Desinstaller brew (seulement si voulu)

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
```

<hr/>


## :a: Installer des `packages`

* Docker

```
$ brew install --cask docker-desktop
```

* Google Chrome

```
$ brew install --cask chrome
```

## :ab: Chercher des packages [cask](https://formulae.brew.sh/cask/)

```
$ brew search --desc 'musescore' 
```

 
## :x: Troubleshooting

```
$ brew doctor
```

* Debug

```
$ brew install -v --debug mp4box # will give you everything. Likewise, brew gist-logs mp4box
```

ou

```
$ brew gist-logs mp4box
```

:round_pushpin: Fix tap

```
$ brew untap caskroom/cask caskroom/versions
```

<hr/>


## :busts_in_silhouette: Multiple Users (only)

https://stackoverflow.com/questions/41840479/how-to-use-homebrew-on-a-multi-user-macos-sierra-setup

- [ ]  Add the current user to the `admin` group

```
$ sudo dseditgroup -o edit -a $(whoami) -t user admin
```

- [ ] Check the result

```
$ groups | grep admin
```

As root, tweak the `HomeBrew` Directories

```
$ sudo -i
# cd `brew --prefix`
# chmod -R +a "group:admin allow list,add_file,search,add_subdirectory,delete_child,readattr,writeattr,readextattr,writeextattr,readsecurity,file_inherit,directory_inherit" Homebrew Caskroom Cellar bin
# chgrp -R admin Homebrew Caskroom Cellar bin etc share
# chmod -R g+rwX Homebrew Caskroom Cellar bin etc share
# ls -lae .
```

Same treatment for `var/HomeBrew` Directories

```
# chgrp -R admin var/Homebrew
# chmod -R g+rwX var/Homebrew
```


# References:

https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x
