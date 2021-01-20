# :two: Hyper V 

## :a: Installer le role [Hyper V](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server) sur Windows Server

```
PS> Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart
```


- [ ] Tester le role Hyper V et les outils de gestion `RSAT`

```
PS> Get-WindowsFeature *Hyper*

Display Name                                            Name                       Install State
------------                                            ----                       -------------
[X] Hyper-V                                             Hyper-V                        Installed
        [X] Hyper-V Management Tools                    RSAT-Hyper-V-Tools             Installed
            [X] Hyper-V Module for Windows PowerShell   Hyper-V-PowerShell             Installed
```

:bulb: Si non installé par la commande globale

- [ ] Installer les modules individuellement

```
PS> Install-WindowsFeature -Name Hyper-V-PowerShell
 
PS> # Install Hyper-V Manager and the PowerShell module (HVM only available on GUI systems)
PS> Install-WindowsFeature -Name RSAT-Hyper-V-Tools
 
PS> # Install the Hyper-V hypervisor and all tools (method #1)
PS> Install-WindowsFeature -Name Hyper-V -IncludeManagementTools
 
PS> # Install the Hyper-V hypervisor and all tools (method #2)
PS> Install-WindowsFeature -Name Hyper-V, RSAT-Hyper-V-Tools
```

- [ ] Lister les modules Hyper-V

```
PS> Get-Module -ListAvailable *Hyper*


    Directory: C:\Windows\system32\WindowsPowerShell\v1.0\Modules


ModuleType Version    Name                                ExportedCommands
---------- -------    ----                                ----------------
Binary     2.0.0.0    Hyper-V                             {Add-VMAssignableDevice, Add-VMDvdDrive, Add-VMFibreChan...
Binary     1.1        Hyper-V                             {Add-VMDvdDrive, Add-VMFibreChannelHba, Add-VMHardDiskDr...

```

## :b: Voir les commandes Powershell pour le role Hyper V

```
PS> Get-Command -Module Hyper-V
```



# References

https://www.altaro.com/hyper-v/install-hyper-v-powershell-module/

https://techthoughts.info/home-lab-setup/
