# Porter

https://porterlb.io/docs/getting-started/usage/use-porter-in-layer-2-mode/

## :one: Enable strictARP for kube-proxy

In Layer 2 mode, you need to enable strictARP for kube-proxy so that all NICs in the Kubernetes cluster stop answering ARP requests from other NICs and Porter handles ARP requests instead.

Log in to the Kubernetes cluster and run the following command to edit the `kube-proxy ConfigMap`:

```
$ kubectl edit configmap kube-proxy --namespace kube-system
```

In the `kube-proxy ConfigMap YAML` configuration, set `data.config.conf.ipvs.strictARP` to `true`.

```
ipvs:
  strictARP: true
```

Run the following command to restart kube-proxy:

```
$ kubectl rollout restart daemonset kube-proxy -n kube-system
```

## :two: Specify the NIC Used for Porter

If the node where Porter is installed has multiple `NICs`, you need to specify the `NIC` used for Porter in `Layer 2` mode. You can skip this step if the node has only one `NIC`.

In this example, the `orion` node, which is used as the `control plane`, where Porter is installed has two NICs (`enpf0s0 10.13.15.200` and `enpf0s1 <not defined>`), and `enpf0s0 10.13.15.200` will be used for Porter.

Run the following command to annotate `orion` (control plane) to specify the `NIC`:

```
$ kubectl annotate nodes orion \
          layer2.porter.kubesphere.io/v1alpha1="10.13.15.200"
```
