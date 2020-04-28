# :m: Python

## :one: Installation de la machine virtuelle Python

:pushpin: Par un Package Manager

:computer: Sous PowerShell

```
PS > choco install python3 --pre
```

:apple: MacOS 

```
$ brew install python@3.8
```

* Set the ENV Variables

```
$ echo 'export PATH="/usr/local/Cellar/python@3.8/3.8.1/libexec/bin:$PATH"' >> ~/.zshrc
# or for Bash
$ echo 'export PATH="/usr/local/Cellar/python@3.8/3.8.1/libexec/bin:$PATH"' >> ~/.bashrc
```

```
$ brew switch python@3.8 3.8.1
```

:pushpin: Manuellement

* Python 3.7.4 :  https://www.python.org/downloads/

### Pour tester l'installation du package

:computer: Sous PowerShell

```
PS > choco list --local-only python
```

:apple: Sous Mac


```
$ brew list python
```

### Pour tester la version

```
$ python --version
Python 3.7.4
```

## :two: Environemment Virtuel

https://docs.python.org/3/tutorial/venv.html

```
$ python -m venv $Env:USERPROFILE\.env\python 
```

:round_pushpin: [dot sourcing](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-7#script-scope-and-dot-sourcing)

:computer: Sous PowerShell

```
PS > . $Env:USERPROFILE\.env\python\Scripts\Activate.ps1
```

:apple: Sous bash ou Zsh

```
$ source ~/.env/python/bin/activate
```

Le prompt devrait changer comme ci-dessous (à peu près)

:computer: Sous PowerShell

```
(python) PS /Users/user >
```

:apple: Sous bash ou Zsh


```
(python) user@computer ~ $ 
```

## :two: Installation des outils d'édition

[Anaconda](Anaconda.md)

[IDE](IDE.md)



# References:

https://www.python.org/about/gettingstarted/

https://kite.com/blog/python/functional-programming/ (Programmation Fonctionelle)

https://stackoverflow.com/questions/37117571/where-does-anaconda-python-install-on-windows (Uninstall manually installed Anaconda)

https://opensource.com/article/19/5/python-3-default-mac

:x: Pygame on MAc

https://github.com/deepmind/pysc2/issues/20#issuecomment-321967886


```
% brew install sdl sdl_image sdl_mixer sdl_ttf portmidi
```

```
 % python3 -m pip install -U pygame --user  
```
