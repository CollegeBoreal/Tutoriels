# :a: Windows

[chocolatey.org](http://chocolatey.org/)

:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```

:two: Copier et Coller l'instruction suivante et taper `entrer`

```
PS > $env:chocolateyUseWindowsCompression = 'true'
PS > Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope LocalMachine
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:three: Verifier l'installation

```
PS > choco list --local-only
Chocolatey v0.10.15
chocolatey 0.10.15
1 packages installed.
```


