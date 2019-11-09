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
