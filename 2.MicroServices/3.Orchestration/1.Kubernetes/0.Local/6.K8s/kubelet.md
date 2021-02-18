# kubelet :droplet:

## :zero: Install the packages 

[< previous page](../) to find the Google PGP Key :key: and Repository Artifact. (if not already installed)

:round_pushpin: Install the `kubelet` service package

```
$ sudo apt update && sudo apt -y install kubelet
```

:round_pushpin: Prevent the `kubelet` service package from being altered (optional)

```
$ sudo apt-mark hold kubelet
```


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

## :two: Booting up the :droplet: `kubelet` service

``` 
$ sudo systemctl enable kubelet && sudo systemctl start kubelet
```

## :three: Start the Kubernetes Control Plane 

[< previous page](./#seven-start-the-control-plane-service) see `kubeadm init`



## :four: Check if the :droplet: `kubelet` service is on

```
$ sudo systemctl status kubelet
[sudo] password for ubuntu: 
● kubelet.service - kubelet: The Kubernetes Node Agent
     Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
    Drop-In: /etc/systemd/system/kubelet.service.d
             └─10-kubeadm.conf
     Active: active (running) since Wed 2021-02-17 22:52:11 UTC; 3h 26min ago
       Docs: https://kubernetes.io/docs/home/
   Main PID: 1130554 (kubelet)
      Tasks: 27 (limit: 77183)
     Memory: 56.6M
     CGroup: /system.slice/kubelet.service
             └─1130554 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet>

Feb 18 02:17:54 orion kubelet[1130554]: E0218 02:17:54.811986 1130554 kubelet.go:2163] Container runtime network not ready: NetworkReady=f>
Feb 18 02:17:57 orion kubelet[1130554]: W0218 02:17:57.663216 1130554 cni.go:239] Unable to update cni config: no networks found in /e
```

:bulb: Note that the log complains about the CNI (Container runtime network) not being ready 




# References

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/kubelet-integration/
