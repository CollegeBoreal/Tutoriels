# Hyper-V


:one: - [Boot Configuration Data](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/bcdedit-command-line-options) Set Hyper-V Auto

Utiliser `PowerShell` pour mettre à jour le type d'Hypervisor à démarrer (i.e. Auto/Off)

```
PS > bcdedit /set HypervisorLaunchType Auto
```

![image](images/bcedit-auto.png)

:two: - S'assurer que le service HyperV est démarré 

![image](images/docker-desktop-vm.png)
