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
python@3.8 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have python@3.8 first in your PATH run:
  echo 'export PATH="/usr/local/opt/python@3.8/bin:$PATH"' >> ~/.zshrc

For compilers to find python@3.8 you may need to set:
  export LDFLAGS="-L/usr/local/opt/python@3.8/lib"
```

:round_pushpin: Forcer la version 3 pour Python

```
% echo 'export PATH="/usr/local/opt/python@3.8/bin:$PATH"' >> ~/.zshrc
% echo 'alias python=python3' >> ~/.zshrc
% echo 'alias pip=pip3' >> ~/.zshrc
```

Pour switcher de version

```
$ brew switch python@3.8 3.8.1
```

:pushpin: Manuellement

* Python 3.8.1 :  https://www.python.org/downloads/

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

Creer son environemment virtuel


:computer: Sous PowerShell

```
$ python -m venv $Env:USERPROFILE\.env\python 
```

:apple: Sous bash ou Zsh

```
$ python -m venv ~/.env/python
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
