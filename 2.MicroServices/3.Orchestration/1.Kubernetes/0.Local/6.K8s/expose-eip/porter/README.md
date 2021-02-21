# Porter

https://porterlb.io/docs/getting-started/usage/use-porter-in-layer-2-mode/

## :one: Enable strictARP for kube-proxy

In Layer 2 mode, you need to enable strictARP for kube-proxy so that all NICs in the Kubernetes cluster stop answering ARP requests from other NICs and Porter handles ARP requests instead.

- [ ] Log in to the Kubernetes cluster and run the following command to edit the `kube-proxy ConfigMap`:

```
$ kubectl edit configmap kube-proxy --namespace kube-system
```

- [ ] In the `kube-proxy ConfigMap YAML` configuration, set `data.config.conf.ipvs.strictARP` to `true`.

```yaml
ipvs:
  strictARP: true
```

- [ ] Run the following command to restart `kube-proxy`:

```
$ kubectl rollout restart daemonset kube-proxy --namespace kube-system
```

## :two: Specify the NIC Used for Porter

If the node where Porter is installed has multiple `NICs`, you need to specify the `NIC` used for Porter in `Layer 2` mode. You can skip this step if the node has only one `NIC`.

```
$ ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp3s0f0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 3c:d9:2b:ec:fb:a4 brd ff:ff:ff:ff:ff:ff
3: enp3s0f1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000
    link/ether 3c:d9:2b:ec:fb:a6 brd ff:ff:ff:ff:ff:ff
4: enp4s0f0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000
    link/ether 3c:d9:2b:ec:fb:b0 brd ff:ff:ff:ff:ff:ff
5: enp4s0f1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000
    link/ether 3c:d9:2b:ec:fb:b2 brd ff:ff:ff:ff:ff:ff
6: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default 
    link/ether 02:42:a1:01:96:da brd ff:ff:ff:ff:ff:ff
7: tunl0@NONE: <NOARP,UP,LOWER_UP> mtu 1480 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
10: calicf6f6b1c134@if4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1480 qdisc noqueue state UP mode DEFAULT group default 
    link/ether ee:ee:ee:ee:ee:ee brd ff:ff:ff:ff:ff:ff link-netnsid 0
11: cali4911fcea19a@if4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1480 qdisc noqueue state UP mode DEFAULT group default 
    link/ether ee:ee:ee:ee:ee:ee brd ff:ff:ff:ff:ff:ff link-netnsid 1
```

Note that the `enp3s0f0` NIC (link/ether) has an `UP` state and has its own MAC address `3c:d9:2b:ec:fb:a4` 

```
2: enp3s0f0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 3c:d9:2b:ec:fb:a4 brd ff:ff:ff:ff:ff:ff
```

In this example, the `orion` node, which is used as the `control plane`, where `Porter` is installed has two NICs (`enp3s0f0 10.13.15.200` and `others <not defined>`), and `enpf0s0 10.13.15.200` will be used for Porter.

Run the following command on `orion` (control plane) to annotate the `NIC` at a specific IP address:

```
$ kubectl annotate nodes orion \
          layer2.porter.kubesphere.io/v1alpha1="10.13.15.200"
```

## :three: Create an Eip Object

The `Eip object functions` as an `IP address pool` for Porter.

Run the following command to create a YAML file for the Eip object:

- [ ] Create a [here document](https://en.wikipedia.org/wiki/Here_document) called `porter-layer2-eip.yaml` and add the following information `IP pool` to the YAML file:

```yaml
$ cat << EOF > porter-layer2-eip.yaml
apiVersion: network.kubesphere.io/v1alpha2
kind: Eip
metadata:
  name: porter-layer2-eip
spec:
  address: 10.13.15.200-10.13.15.202
  interface: enp3s0f0
  protocol: layer2
EOF
```

:bulb: NOTE

The IP addresses specified in `spec.address` must be on the same network segment as the Kubernetes cluster nodes.
For details about the fields in the `Eip YAML` configuration, see Configure `IP Address Pools` Using `Eip`.

Run the following command to create the Eip object:

```
$ kubectl apply -f porter-layer2-eip.yaml
```


## :x: Losing cluster access

At a certain point when installing the `Porter` L2 Load Balancer you will lose access to the cluster, including SSH access but it comes back
