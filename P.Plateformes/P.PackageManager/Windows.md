# :a: Windows

[chocolatey.org](http://chocolatey.org/) [Installation](https://chocolatey.org/install)

:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```

:two: Copier et Coller l'instruction suivante et taper `entrer`

```
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; 
     [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
     iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:three: Verifier l'installation

```
PS > choco list --local-only
Chocolatey v0.10.15
chocolatey 0.10.15
1 packages installed.
```

## :x: Troubleshooting

```
PS > Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine       Undefined
```

:bulb: Entreprise

```
PS > $env:chocolateyUseWindowsCompression = 'true'
PS > Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope LocalMachine
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

https://stackoverflow.com/questions/27753917/how-do-you-successfully-change-execution-policy-and-enable-execution-of-powershe

