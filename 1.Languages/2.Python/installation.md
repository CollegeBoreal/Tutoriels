# :snake: Installation de Python

## :a: Installation de la machine virtuelle Python

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

## :b: Environemment Virtuel

https://docs.python.org/3/tutorial/venv.html

:a: Creer son environemment virtuel


:computer: Sous PowerShell

```
$ python -m venv $Env:USERPROFILE\.env\python 
```

:apple: Sous bash ou Zsh

```
$ python -m venv ~/.env/python
```


:b: [dot sourcing](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-7#script-scope-and-dot-sourcing) Activer son environnement

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

:ab: Desactiver son environemment

```
(python) user@computer ~ $ deactivate
```
