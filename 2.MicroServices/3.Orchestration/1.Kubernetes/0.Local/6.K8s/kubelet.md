# kubelet

## :zero: Install the packages 

[< previous page](../)

## :gear: Where is the `kubelet` [drop-in file](https://stackoverflow.com/questions/59842743/what-is-a-drop-in-file-what-is-a-drop-in-directory-how-to-edit-systemd-service) (i.e. systemd .conf file)

```
$ sudo cat /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

## :one: Just after package management install

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

## :two: Booting up the `kubelet` service

``` 
$ sudo systemctl enable kubelet && sudo systemctl start kubelet
```







# References

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/kubelet-integration/
