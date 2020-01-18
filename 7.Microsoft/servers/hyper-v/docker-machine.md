


```
PS> # Install Docker:
PS> Install-Module DockerMsftProvider -Force
PS> Install-Package Docker -ProviderName DockerMsftProvider -Force
```

```
PS> # Enable features required (HNS Service)
PS> Enable-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform
PS> Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

https://docs.docker.com/v17.09/machine/drivers/hyper-v/


https://docs.microsoft.com/en-us/virtualization/windowscontainers/management/manage_remotehost



```
PS> # Open port 2376 
PS> New-NetFirewallRule -DisplayName 'Docker SSL Inbound' -Profile @('Domain', 'Public', 'Private') -Direction Inbound -Action Allow -Protocol TCP -LocalPort 2376
```


