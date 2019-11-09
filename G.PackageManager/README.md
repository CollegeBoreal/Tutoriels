# Package Manager


## :a: Windows


[chocolatey.org](http://chocolatey.org/)

:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```

:two: Copier et Coller l'instruction suivante et taper `entrer`

```
> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:three: Verifier l'installation

```
> choco list --local-only
Chocolatey v0.10.15
chocolatey 0.10.15
chocolatey-core.extension 1.3.4
3 packages installed.
```


* Rajouter `-not-silent` pour debugger avec le UI




## :b: MacOS


:one: Executer la commande suivante dans le `Terminal`

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

:two: Verifier l'installation

```
$ brew list --versions
```


:three: Multiple Users (only)

https://stackoverflow.com/questions/41840479/how-to-use-homebrew-on-a-multi-user-macos-sierra-setup

* Add the current user to the `admin` group

```
$ sudo dseditgroup -o edit -a $(whoami) -t user admin
```

* Check the result

```
$ groups | grep admin
```

As root, tweak the HomeBrew Directories

```
$ sudo -i
# cd `brew --prefix`
# chmod -R +a "group:admin allow list,add_file,search,add_subdirectory,delete_child,readattr,writeattr,readextattr,writeextattr,readsecurity,file_inherit,directory_inherit" Homebrew Caskroom Cellar bin
# chgrp -R admin Homebrew Caskroom Cellar bin
# chmod -R g+rwX Homebrew Caskroom Cellar bin
# ls -lae .
# exit
```
