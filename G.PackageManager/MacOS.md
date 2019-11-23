# :b: MacOS


:one: Executer la commande suivante dans le `Terminal`

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

:two: Verifier l'installation

```
$ brew cask list --versions
$ brew list --versions # Version originale avec package plus petits
```

:three: Desinstaller brew (seulement si desire)

```
$ sudo ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

<hr/>


:bookmark: Multiple Users (only)

https://stackoverflow.com/questions/41840479/how-to-use-homebrew-on-a-multi-user-macos-sierra-setup

* Add the current user to the `admin` group

```
$ sudo dseditgroup -o edit -a $(whoami) -t user admin
```

* Check the result

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
