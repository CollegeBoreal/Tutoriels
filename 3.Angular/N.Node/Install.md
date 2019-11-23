# Installation


## Téléchargement manuel (non recommandé)

:pushpin: Suivre les instructions pour installer manuellement 

https://nodejs.org/en/download/

## Par un `Package Manager`

:pushpin: Windows

```
> choco install nvm
```

:pushpin: MacOS


```
$ brew cask install nvm
```

## node

:pushpin: Installer La version 12

```
$ nvm install 12
```

:pushpin: Utiliser La version 12

```
$ nvm use 12
```

:pushpin: Liste des versions installées


```
$ nvm list
```

## node with LTS (Long Term Support)

```
$ nvm install --lts        
Installing latest LTS version.
v12.13.1 is already installed.
Now using node v12.13.1 (npm v6.12.1)
```

```
$ nvm use --lts    
Now using node v12.13.1 (npm v6.12.1)
```

```
$  nvm use 13
Now using node v13.2.0 (npm v6.13.1)
```

```
$ nvm use --lts
Now using node v12.13.1 (npm v6.12.1)
```

# References

https://medium.com/@tertiumnon/install-nvm-on-windows-fd5008ab5a71
