# kubelet :droplet:

| Service | Usage                                                   |
|---------|---------------------------------------------------------|
| kubelet | responsible for maintaining a set of pods, which are composed of one or more containers, on a local system |

- [ ] Let's install a specific version

```
export KUBEVERSION=1.18.6
``` 

## :zero: Install the packages 

[< previous page](Control-Plane.md) to find the Google PGP Key :key: and Repository Artifact. (if not already installed)

:round_pushpin: Install the `kubelet` service package

```
$ sudo apt update && sudo apt -y install kubelet=${KUBEVERSION}-00
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

## :three: Start Kubernetes Cluster

| :control_knobs: Control Plane | :abascus: Data Plane |
|---------------|------------|
| Follow > [`kubeadm init`](control-plane.md#seven-start-the-control-plane-service)  | Follow > [`kubeadm join`](data-plane.md#seven-start-the-data-plane-service) |



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


## :five: Install the CNI Plugin

[Cluster Networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/)

- [ ] Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:

https://kubernetes.io/docs/concepts/cluster-administration/addons/

- [ ] Let's use [Calico](projectcalico.org) CNI

```
$ kubectl apply --filename=https://docs.projectcalico.org/manifests/calico.yaml
configmap/calico-config created
customresourcedefinition.apiextensions.k8s.io/bgpconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/bgppeers.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/blockaffinities.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/clusterinformations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/felixconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworksets.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/hostendpoints.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamblocks.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamconfigs.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamhandles.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ippools.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/kubecontrollersconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/networkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/networksets.crd.projectcalico.org created
clusterrole.rbac.authorization.k8s.io/calico-kube-controllers created
clusterrolebinding.rbac.authorization.k8s.io/calico-kube-controllers created
clusterrole.rbac.authorization.k8s.io/calico-node created
clusterrolebinding.rbac.authorization.k8s.io/calico-node created
daemonset.apps/calico-node created
serviceaccount/calico-node created
deployment.apps/calico-kube-controllers created
serviceaccount/calico-kube-controllers created
poddisruptionbudget.policy/calico-kube-controllers created
```

- [ ] Check the :droplet: `Kubelet` service after installing the CNI

```
$ sudo systemctl status kubelet
[sudo] password for ubuntu: 
● kubelet.service - kubelet: The Kubernetes Node Agent
     Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
    Drop-In: /etc/systemd/system/kubelet.service.d
             └─10-kubeadm.conf
     Active: active (running) since Wed 2021-02-17 22:52:11 UTC; 3h 45min ago
       Docs: https://kubernetes.io/docs/home/
   Main PID: 1130554 (kubelet)
      Tasks: 27 (limit: 77183)
     Memory: 59.2M
     CGroup: /system.slice/kubelet.service
             └─1130554 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet>

Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.422 [INFO][1182279] ipam.go 970: Writing block in order to claim IPs block=192>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.426 [INFO][1182279] ipam.go 983: Successfully claimed IPs: [192.168.46.3/26] b>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.426 [INFO][1182279] ipam.go 706: Auto-assigned 1 out of 1 IPv4s: [192.168.46.3>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.427 [INFO][1182279] ipam_plugin.go 255: Calico CNI IPAM assigned addresses IPv>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.428 [INFO][1182250] k8s.go 372: Populated endpoint ContainerID="f947f87d7d0bdd>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.429 [INFO][1182250] k8s.go 373: Calico CNI using IPs: [192.168.46.3/32] Contai>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.429 [INFO][1182250] dataplane_linux.go 66: Setting the host side veth name to >
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.434 [INFO][1182250] dataplane_linux.go 420: Disabling IPv4 forwarding Containe>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.472 [INFO][1182250] k8s.go 400: Added Mac, interface name, and active containe>
Feb 18 02:36:35 orion kubelet[1130554]: 2021-02-18 02:36:35.483 [INFO][1182250] k8s.go 474: Wrote updated endpoint to datastore ContainerI>
lines 1-22/22 (END)
```

## :ab: On the data plane 

- [ ] After Joining

```
$ systemctl status kubelet
● kubelet.service - kubelet: The Kubernetes Node Agent
     Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
    Drop-In: /etc/systemd/system/kubelet.service.d
             └─10-kubeadm.conf
     Active: active (running) since Thu 2021-02-18 03:32:25 UTC; 3min 3s ago
       Docs: https://kubernetes.io/docs/home/
   Main PID: 7812 (kubelet)
      Tasks: 26 (limit: 38476)
     Memory: 54.5M
     CGroup: /system.slice/kubelet.service
             └─7812 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.co>

Feb 18 03:33:09 ursa kubelet[7812]: W0218 03:33:09.931497    7812 driver-call.go:149] FlexVolume: driver call failed: executable: /usr/lib>
Feb 18 03:33:09 ursa kubelet[7812]: E0218 03:33:09.931520    7812 plugins.go:738] Error dynamically probing plugins: Error creating Flexvo>
Feb 18 03:33:09 ursa kubelet[7812]: E0218 03:33:09.931793    7812 driver-call.go:266] Failed to unmarshal output for command: init, output>
Feb 18 03:33:09 ursa kubelet[7812]: W0218 03:33:09.931807    7812 driver-call.go:149] FlexVolume: driver call failed: executable: /usr/lib>
Feb 18 03:33:09 ursa kubelet[7812]: E0218 03:33:09.931823    7812 plugins.go:738] Error dynamically probing plugins: Error creating Flexvo>
Feb 18 03:33:09 ursa kubelet[7812]: E0218 03:33:09.932033    7812 driver-call.go:266] Failed to unmarshal output for command: init, output>
Feb 18 03:33:09 ursa kubelet[7812]: W0218 03:33:09.932047    7812 driver-call.go:149] FlexVolume: driver call failed: executable: /usr/lib>
Feb 18 03:33:09 ursa kubelet[7812]: E0218 03:33:09.932061    7812 plugins.go:738] Error dynamically probing plugins: Error creating Flexvo>
Feb 18 03:33:28 ursa kubelet[7812]: E0218 03:33:28.168698    7812 remote_runtime.go:332] ContainerStatus "ed0f52a1a69f6cc8f03905a03424afed>
Feb 18 03:33:28 ursa kubelet[7812]: E0218 03:33:28.168744    7812 kuberuntime_manager.go:980] getPodContainerStatuses for pod "calico-node>
lines 1-22/22 (END)
```

## :bangbang: Expired Token

[kubernetes-unable-to-join-a-remote-master-node](https://stackoverflow.com/questions/61352209/kubernetes-unable-to-join-a-remote-master-node)

* Generate a new token on the control plane

```
$ kubeadm token create --print-join-command
```

# References

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/kubelet-integration/
