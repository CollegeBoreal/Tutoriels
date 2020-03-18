



:pushpin: https://blogs.technet.microsoft.com/virtualization/2018/06/27/insider-preview-windows-container-image/

    # Query the registry for necessary build information
    $winver = Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\'
    $versiontag = "$($winver.CurrentMajorVersionNumber).$($winver.CurrentMinorVersionNumber).$($winver.CurrentBuildNumber).$($winver.UBR)"

    # Run the actual docker pull command to download the insider image matching the host OS
    docker pull mcr.microsoft.com/windows-insider:$versiontag


https://4sysops.com/archives/free-hyper-v-server-2019-new-features-and-limitations/

```
Microsoft Hyper-V Server 2019 (updated Sept 2019) Compute 64 bits
```
https://4sysops.com/archives/configure-windows-server-2019-container-host-with-powershell/

https://vmarena.com/installing-hyper-v-on-windows-server-2019/







https://docs.microsoft.com/fr-fr/virtualization/


https://social.technet.microsoft.com/Forums/ie/en-US/0c539ba8-ce17-4127-8190-914eac08d82a/microsoft-hyperv-server-2008-r2-administrator-password?forum=winserverhyperv

```
  Your password should must meet the following requirements:

  Passwords cannot contain the user’s account name or parts of the user’s full name that exceed two consecutive characters.
  Passwords must be at least six characters in length.
  Passwords must contain characters from three of the following four categories:
  English uppercase characters (A through Z).
  English lowercase characters (a through z).
  Base 10 digits (0 through 9).
  Non-alphabetic characters (for example, !, $, #, %).
```

:pushpin: Check if Hyper-V is installed

```
PS> Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V


FeatureName      : Microsoft-Hyper-V
DisplayName      : Hyper-V
Description      : Hyper-V
RestartRequired  : Possible
State            : Enabled
CustomProperties :
                   ServerComponent\Description : Hyper-V provides the services that you can use to create and manage virtual machines
                   and their resources. Each virtual machine is a virtualized computer system that operates in an isolated execution
                   environment. This allows you to run multiple operating systems simultaneously.
                   ServerComponent\DisplayName : Hyper-V
                   ServerComponent\EventQuery : Virtualization.Events.xml
                   ServerComponent\Id : 20
                   ServerComponent\Type : Role
                   ServerComponent\UniqueName : Hyper-V
                   ServerComponent\Version\Major : 1
                   ServerComponent\Version\Minor : 0
                   ServerComponent\BestPractices\Model\Id : Microsoft/Windows/Hyper-V
                   ServerComponent\Deploys\Update\Name : Microsoft-Hyper-V-Offline
                   ServerComponent\Deploys\Update\Name : Microsoft-Hyper-V-Online
                   ServerComponent\Deploys\Update\Name : Microsoft-Hyper-V-Management-PowerShell
                   ServerComponent\Configuration\RootClassMofDefinition :            class ServerComponent_HyperV           {
                       String VirtualSwitchNetworkAdapters[];               String DefaultVirtualMachinePath;               String
                   DefaultVirtualHardDiskPath;               BOOLEAN EnableVirtualMachineMigration;               String
                   VirtualMachineMigrationAuthenticationType;           };
                   ServerComponent\SystemServices\SystemService\DefaultMonitoring : true
                   ServerComponent\SystemServices\SystemService\Name : vmms
```


```
PS> Install-WindowsFeature -Name Hyper-V -IncludeManagementTools

Success Restart Needed Exit Code      Feature Result
------- -------------- ---------      --------------
False   Maybe          Failed         {}
Install-WindowsFeature : A prerequisite check for the Hyper-V feature failed.
1. Hyper-V cannot be installed because virtualization support is not enabled in the BIOS.
At line:1 char:1
+ Install-WindowsFeature -Name Hyper-V -IncludeManagementTools
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (Hyper-V:ServerComponentWrapper) [Install-WindowsFeature], Exception
    + FullyQualifiedErrorId : Alteration_PrerequisiteCheck_Failed,Microsoft.Windows.ServerManager.Commands.AddWindowsF
   eatureCommand

https://docs.microsoft.com/fr-fr/virtualization/hyper-v-on-windows/quick-start/quick-create-virtual-machine
```

----------------------


```
# Set VM Name, Switch Name, and Installation Media Path.
$VMName = 'TESTVM'
$Switch = 'External VM Switch'
$InstallMedia = 'C:\Users\Administrator\Desktop\en_windows_10_enterprise_x64_dvd_6851151.iso'
```

```
# Create New Virtual Machine
New-VM -Name $VMName -MemoryStartupBytes 2147483648 -Generation 2 -NewVHDPath "D:\Virtual Machines\$VMName\$VMName.vhdx" -NewVHDSizeBytes 53687091200 -Path "D:\Virtual Machines\$VMName" -SwitchName $Switch
```

```
# Add DVD Drive to Virtual Machine
Add-VMScsiController -VMName $VMName
Add-VMDvdDrive -VMName $VMName -ControllerNumber 1 -ControllerLocation 0 -Path $InstallMedia
```

```
# Mount Installation Media
$DVDDrive = Get-VMDvdDrive -VMName $VMName
```

```
# Configure Virtual Machine to Boot from DVD
Set-VMFirmware -VMName $VMName -FirstBootDevice $DVDDrive
```
