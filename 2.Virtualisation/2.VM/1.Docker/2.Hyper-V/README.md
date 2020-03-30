# Hyper-V

https://docs.docker.com/machine/drivers/hyper-v/

```
PS > docker-machine create --driver hyperv vm
Creating CA: C:\Users\300098957\.docker\machine\certs\ca.pem
Creating client certificate: C:\Users\300098957\.docker\machine\certs\cert.pem
Running pre-create checks...
Error with pre-create check: "Hyper-v commands have to be run as an Administrator"
```

```
PS > docker-machine create --driver hyperv vm
Running pre-create checks...
Error with pre-create check: "no External vswitch found. A valid vswitch must be available for this command to run. 
Check https://docs.docker.com/machine/drivers/hyper-v/"
```

* Trouver la Switch Virtuelle


```
PS > Get-VMSwitch

Name                   SwitchType NetAdapterInterfaceDescription
----                   ---------- ------------------------------
Primary Virtual Switch External   QLogic BCM5709C Gigabit Ethernet (NDIS VBD Client) #4
nat                    Internal
```

* Creer la machine virtuelle avec la Switch Virtuelle

```
PS >  docker-machine create --driver hyperv --hyperv-virtual-switch "Primary Virtual Switch" vm
Creating CA: C:\Users\Brice\.docker\machine\certs\ca.pem
Creating client certificate: C:\Users\Brice\.docker\machine\certs\cert.pem
Running pre-create checks...
(vm) Image cache directory does not exist, creating it at C:\Users\Brice\.docker\machine\cache...
(vm) No default Boot2Docker ISO found locally, downloading the latest release...
(vm) Latest release for github.com/boot2docker/boot2docker is v19.03.5
(vm) Downloading C:\Users\Brice\.docker\machine\cache\boot2docker.iso from https://github.com/boot2docker/boot2docker/releases/download/v19.03.5/boot2docker.iso...
(vm) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%
Creating machine...
(vm) Copying C:\Users\Brice\.docker\machine\cache\boot2docker.iso to C:\Users\Brice\.docker\machine\machines\vm\boot2docker.iso...
(vm) Creating SSH key...
(vm) Creating VM...
(vm) Using switch "Primary Virtual Switch"
(vm) Creating VHD
(vm) Starting VM...
(vm) Waiting for host to start...
Waiting for machine to be running, this may take a few minutes...
Detecting operating system of created instance...
Waiting for SSH to be available...
Detecting the provisioner...
Provisioning with boot2docker...
Copying certs to the local machine directory...
Copying certs to the remote machine...
Setting Docker configuration on the remote daemon...
Checking connection to Docker...
Docker is up and running!
To see how to connect your Docker Client to the Docker Engine running on this virtual machine, run: C:\ProgramData\chocolatey\lib\docker-machine\bin\docker-machine.exe env vm
```

* Lister les machines virtuelles

```
PS > docker-machine ls
NAME   ACTIVE   DRIVER   STATE     URL                      SWARM   DOCKER     ERRORS
vm     -        hyperv   Running   tcp://10.13.4.242:2376           v19.03.5
```

```
PS > docker-machine ssh vm
   ( '>')
  /) TC (\   Core is distributed with ABSOLUTELY NO WARRANTY.
 (/-_--_-\)           www.tinycorelinux.net

docker@vm:~$
```


```
PS > docker-machine env vm
$Env:DOCKER_TLS_VERIFY = "1"
$Env:DOCKER_HOST = "tcp://10.13.4.242:2376"
$Env:DOCKER_CERT_PATH = "C:\Users\Brice\.docker\machine\machines\vm"
$Env:DOCKER_MACHINE_NAME = "vm"
$Env:COMPOSE_CONVERT_WINDOWS_PATHS = "true"
# Run this command to configure your shell:
# & "C:\ProgramData\chocolatey\lib\docker-machine\bin\docker-machine.exe" env vm | Invoke-Expression
```


```
PS > docker-machine active
vm
```

## :b: Primary Virtual Switch

:pushpin: Chercher les interfaces reseaux 

```
PS > Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress
----                      --------------------                    ------- ------       ----------
vEthernet (nat)           Hyper-V Virtual Ethernet Adapter             12 Up           00-15-5D-51-F8-66
Ethernet                  QLogic BCM5709C Gigabit Ethernet ...#47      11 Up           1C-C1-DE-F3-0D-44
vEthernet (Ethernet) 2
Ethernet 4                QLogic BCM5709C Gigabit Ethernet ...#49       7 Disconnected 1C-C1-DE-F3-FC-AC
vEthernet (Ethernet)
Ethernet 2                QLogic BCM5709C Gigabit Ethernet ...#50       5 Disconnected 1C-C1-DE-F3-FC-AE
Ethernet 3                QLogic BCM5709C Gigabit Ethernet ...#48       3 Disconnected 1C-C1-DE-F3-0D-46
```

:pushpin: Assigner la carte Ethenet choisie à la variable `$net`

```
PS> $net = Get-NetAdapter -Name 'Ethernet'
```

:pushpin: Créer une interface reseau virtuelle `Primary Virtual Switch`

```
PS> New-VMSwitch -Name "Primary Virtual Switch" -AllowManagementOS $True -NetAdapterName $net.Name

Name                   SwitchType NetAdapterInterfaceDescription
----                   ---------- ------------------------------
Primary Virtual Switch External   QLogic BCM5709C Gigabit Ethernet (NDIS VBD Client)
```

:pushpin: Ouvrir le firewall pour `2376`

```
PS> New-NetFirewallRule `
       -DisplayName 'Docker SSL Inbound' -Profile @('Domain', 'Public', 'Private') `
       -Direction Inbound -Action Allow -Protocol TCP `
       -LocalPort 2376
```

:pushpin: Redemarrer

```
PS > Restart-Computer -Force
```

## :m: DHCP Setup

https://github.com/docker/for-win/issues/1378#issuecomment-502380490

Do not connect the docker host directly to the external network. That's a major security hole since your docker containers will be directly accessible from outside.

Instead create an internal switch with a NAT.

```
PS > New-VMSwitch -SwitchName docker -SwitchType Internal
PS > Get-NetAdapter
PS > New-NetIPAddress -IPAddress 172.16.0.1 -PrefixLength 16 -InterfaceAlias "vEthernet (docker)"
PS > New-NetNat -Name nat1 -InternalIPInterfaceAddressPrefix 172.16.0.0/16
```

Since Hyper-V comes with no DHCP server, install a free DHCP server, for example [TFTPD64](http://www.tftpd64.com/). Configure DHCP on interface 172.16.0.1 to issue IP addresses in the range 172.16.0.2 ... 172.16.0.99.

# Hyper-V

```
PS >  Get-Command -Module Hyper-V
```

Lire le disk virtuel utilise

```
PS > Get-VHD $Env:USERPROFILE\.docker\machine\machines\vm\disk.vhd
```

## :o: Docker Machine Generique 

:bulb: Pour commande a distance 

:one: Copier les cles sur la machine distante sur la machine cliente 

* Source: $Env:USERPROFILE\.docker\machine\machines\<machine virtuelle>\{id_rsa,id_rsa.pub}

* Destination: ~/.ssh/<machine virtuelle> 

```
% docker-machine create --driver generic \
                        --generic-ip-address=10.13.2.45 \
                        --generic-ssh-user=docker \
                        --generic-ssh-key ~/.ssh/<machine virtuelle> \   
                        <machine virtuelle>
```




# Références 


https://docs.docker.com/v17.09/machine/drivers/hyper-v/

https://docs.microsoft.com/fr-fr/virtualization/hyper-v-on-windows/quick-start/connect-to-network

https://docs.microsoft.com/en-us/virtualization/windowscontainers/management/manage_remotehost
