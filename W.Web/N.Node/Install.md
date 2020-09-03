# Installation


## Téléchargement manuel (non recommandé)

:pushpin: Suivre les instructions pour installer manuellement 

https://nodejs.org/en/download/ 

## À travers un `Package Manager` ( [`nvm`](ttp://nvm.sh) recommandé)

:pushpin: Windows

```
PS > choco install nvm
```

:pushpin: MacOS

En fonction de ton environnement soit `bash` soit `zsh`

```
% curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh
```

## node

:pushpin: Liste des versions installées localement

```
$ nvm list
```

:pushpin: Liste des versions disponibles

```
$ nvm ls-remote
```

:pushpin: Installer La version LTS (Long Term Support)

```
$ nvm install --lts 
Installing latest LTS version.
v12.16.3 is already installed.
Now using node v12.16.3 (npm v6.14.4)
```

:pushpin: Utiliser La version LTS

```
$ nvm use --lts
Now using node v12.16.3 (npm v6.14.4)
```

:pushpin: Installer La version 14

```
$ nvm install 14       
Downloading and installing node v14.1.0...
Downloading https://nodejs.org/dist/v14.1.0/node-v14.1.0-darwin-x64.tar.xz...
############################################################################################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v14.1.0 (npm v6.14.4)
```

:pushpin: Utiliser La version 14

```
$ nvm use 14
Now using node v14.1.0 (npm v6.14.4)
```

:pushpin: Revenir à La version LTS

```
$ nvm use --lts
Now using node v12.16.3 (npm v6.14.4)
```

### :gear: .zshrc


```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

# References

https://medium.com/@tertiumnon/install-nvm-on-windows-fd5008ab5a71

https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/

http://broken-by.me/lazy-load-nvm/
