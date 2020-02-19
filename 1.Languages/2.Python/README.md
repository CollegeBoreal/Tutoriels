# :m: Python

## :one: Installation de la machine virtuelle Python

:pushpin: Par un Package Manager

:bulb: Windows

```
PS > choco install python3 --pre
```

:apple: MacOS 

```
$ brew install python
---------- $ echo 'export PATH="/usr/local/opt/python/libexec/bin:$PATH"' >> ~/.bashrc
```

* Python3

```
$ echo "alias python=/usr/local/bin/python3.7" >> ~/.zshrc
# or for Bash
$ echo "alias python=/usr/local/bin/python3.7" >> ~/.bashrc
```

* Pip3

```
$ echo "alias pip=/usr/local/bin/pip3" >> ~/.zshrc 
# or for Bash
$ echo "alias pip=/usr/local/bin/pip3" >> ~/.bashrc
```

:pushpin: Manuellement

* Python 3.7.4 :  https://www.python.org/downloads/

### Pour tester l'installation
```
$ python --version
Python 3.7.4
```

## :two: Installation des outils d'édition

[Anaconda](Anaconda.md)

[IDE](IDE.md)



# References:

https://www.python.org/about/gettingstarted/

https://kite.com/blog/python/functional-programming/ (Programmation Fonctionelle)

https://stackoverflow.com/questions/37117571/where-does-anaconda-python-install-on-windows (Uninstall manually installed Anaconda)

https://opensource.com/article/19/5/python-3-default-mac
