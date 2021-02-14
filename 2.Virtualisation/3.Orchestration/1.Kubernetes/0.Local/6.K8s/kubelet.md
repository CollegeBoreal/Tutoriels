# kubelet


## :gear: kubelet [drop-in file](https://stackoverflow.com/questions/59842743/what-is-a-drop-in-file-what-is-a-drop-in-directory-how-to-edit-systemd-service)

```
$ cat /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

## :zero: Just after package management install

:+1: Test that the `kubelet` service is just loaded

```
$ systemctl status kubelet
● kubelet.service - kubelet: The Kubernetes Node Agent
     Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
    Drop-In: /etc/systemd/system/kubelet.service.d
             └─10-kubeadm.conf
     Active: activating (auto-restart) (Result: exit-code) since Sun 2021-02-14 11:30:15 UTC; 2s ago
       Docs: https://kubernetes.io/docs/home/
    Process: 315103 ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EX>
   Main PID: 315103 (code=exited, status=255/EXCEPTION)
```




# References

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/kubelet-integration/
