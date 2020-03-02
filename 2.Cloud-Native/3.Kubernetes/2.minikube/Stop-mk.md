# Stopping Minikube


## On Windows Server Powershell 

:pushpin: Stop minikube

```
PS > minikube stop
* Stopping "minikube" in hyperv ...
* Powering off "minikube" via SSH ...
* "minikube" stopped.
```

:pushpin: See if minikube VM is Off


```
PS > get-vm

Name      State   CPUUsage(%) MemoryAssigned(M) Uptime             Status             Version
----      -----   ----------- ----------------- ------             ------             -------
minikube  Off     0           0                 00:00:00           Operating normally 9.0```
```

:pushpin: Remove minikube VM

```
PS > remove-vm minikube

Confirm
Are you sure you want to remove virtual machine "minikube"?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): A
```
