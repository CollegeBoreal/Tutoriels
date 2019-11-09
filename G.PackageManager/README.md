# Package Manager


## Windows


:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```

[chocolatey.org](http://chocolatey.org/)


```
> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```



```
$ choco list --local-only
```


* Rajouter `-not-silent` pour debugger avec le UI




## MacOS
