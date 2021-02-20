# Chocolatey


## :gear: Installation


[chocolatey.org](http://chocolatey.org/) [Installation](https://chocolatey.org/install)

:one: Executer la commande suivante dans `PowerShell` en tant qu'Administrateur

```
(Touche Windows > taper "Windows PowerShell" > right click > Run as Administrator)
```


:round_pushpin: Politique d'éxécution

Éxécuter la commande ci-dessous, 

```
PS> Get-ExecutionPolicy
```

:bangbang: Si ça retourne `Restricted`

Alors Éxécuter 

```
PS> Set-ExecutionPolicy AllSigned
```

OU

```
PS> Set-ExecutionPolicy Bypass -Scope Process
``` 

:round_pushpin: Copier et Coller les instructions suivantes et taper `entrer`

```
PS > Set-ExecutionPolicy Bypass -Scope Process -Force; 
     [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
     iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:a: Verifier l'installation

```
PS > choco list --local-only
Chocolatey v0.10.15
chocolatey 0.10.15
1 packages installed.
```

## :b: Installer des `packages`

:bulb: Rajouter `-not-silent` pour debugger avec le UI

* Docker

```
$ choco install docker-desktop
```

* Google Chrome

```
$ choco install google-chrome
```

## :ab: Chercher des packages [choco](https://chocolatey.org/packages)

```
$ choco search musescore
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

