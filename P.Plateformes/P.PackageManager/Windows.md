# :a: Windows

[chocolatey.org](http://chocolatey.org/) [Installation](https://chocolatey.org/install)

:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```


:two: Politique d'éxécution

Éxécuter la commande ci-dessous, 

```
PS> Get-ExecutionPolicy
```

:bang: Si ça retourne `Restricted`

Alors Éxécuter 

```
PS> Set-ExecutionPolicy AllSigned
```

OU

```
PS> Set-ExecutionPolicy Bypass -Scope Process
``` 

:three: Copier et Coller les instructions suivantes et taper `entrer`

```
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; 
     [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
     iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:four: Verifier l'installation

```
PS > choco list --local-only
Chocolatey v0.10.15
chocolatey 0.10.15
1 packages installed.
```

## :x:  [Troubleshooting](https://chocolatey.org/docs/troubleshooting)

```
PS > Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Bypass
  CurrentUser       Undefined
 LocalMachine       Undefined
```


```
PS > Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope MachinePolicy
```


:bulb: Entreprise

```
PS > $env:chocolateyUseWindowsCompression = 'true'
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

https://stackoverflow.com/questions/27753917/how-do-you-successfully-change-execution-policy-and-enable-execution-of-powershe

