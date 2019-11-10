# :b: MacOS


:one: Executer la commande suivante dans le `Terminal`

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

:two: Verifier l'installation

```
$ brew list --versions
$ brew cask list --versions
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
# chgrp -R admin Homebrew Caskroom Cellar bin
# chmod -R g+rwX Homebrew Caskroom Cellar bin
# ls -lae .
```

Same treatment for `var/HomeBrew` Directories

```
# chgrp -R admin var/Homebrew
# chmod -R g+rwX var/Homebrew
```
