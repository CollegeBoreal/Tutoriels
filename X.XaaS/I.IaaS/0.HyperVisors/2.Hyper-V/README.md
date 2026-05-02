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

## :ab: Virtual Switch

- [ ] Create Virtual Switch


:round_pushpin: Visualiser vos Switch Virtuels

```
PS> Get-VMSwitch  * | Format-Table Name
```

:round_pushpin: Visualiser vos cartes ethernets

```
PS> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  QLogic BCM5709C Gigabit Ethernet ...#47      10 Up           1C-C1-DE-F3-0D-44        10 Mbps
vEthernet (nat)           Hyper-V Virtual Ethernet Adapter             12 Up           00-15-5D-DB-3C-DE        10 Gbps
...
```

:round_pushpin: Creer la Switch Virtuelle pour le driver HyperV

:bulb: Le nom doit être `Primary Virtual Switch` par défaut

```
PS> $net = Get-NetAdapter -Name 'Ethernet'
PS> New-VMSwitch -Name "Primary Virtual Switch" -AllowManagementOS $True -NetAdapterName $net.Name
```


# References

https://www.altaro.com/hyper-v/install-hyper-v-powershell-module/

https://techthoughts.info/home-lab-setup/
