


ERROR: (gcloud.container.clusters.create) ResponseError: code=403, message=Kubernetes Engine API is not enabled for this project. Please ensure it is enabled in Google Cloud Console and try again: visit https://console.cloud.google.com/apis/api/container.googleapis.com/overview?project=b300098957 to do so.



```
% gcloud container clusters create kubia --num-nodes 3 --machine-type f1-micro --zone "us-central1-a"
WARNING: Currently VPC-native is not the default mode during cluster creation. In the future, this will become the default mode and can be disabled using `--no-enable-ip-alias` flag. Use `--[no-]enable-ip-alias` flag to suppress this warning.
WARNING: Newly created clusters and node-pools will have node auto-upgrade enabled by default. This can be disabled using the `--no-enable-autoupgrade` flag.
WARNING: Starting with version 1.18, clusters will have shielded GKE nodes by default.
WARNING: Your Pod address range (`--cluster-ipv4-cidr`) can accommodate at most 1008 node(s). 
This will enable the autorepair feature for nodes. Please see https://cloud.google.com/kubernetes-engine/docs/node-auto-repair for more information on node autorepairs.
Creating cluster kubia in us-central1-a... Cluster is being health-checked (master is healthy)...done.                                                                        
Created [https://container.googleapis.com/v1/projects/b300098957/zones/us-central1-a/clusters/kubia].
To inspect the contents of your cluster, go to: https://console.cloud.google.com/kubernetes/workload_/gcloud/us-central1-a/kubia?project=b300098957
kubeconfig entry generated for kubia.
NAME   LOCATION       MASTER_VERSION  MASTER_IP     MACHINE_TYPE  NODE_VERSION    NUM_NODES  STATUS
kubia  us-central1-a  1.14.10-gke.27  34.66.86.157  f1-micro      1.14.10-gke.27  3          RUNNING
```

```
% kubectl get nodes
NAME                                   STATUS     ROLES    AGE   VERSION
gke-kubia-default-pool-d41cef64-8pm5   NotReady   <none>   11m   v1.14.10-gke.27
gke-kubia-default-pool-d41cef64-bzc9   Ready      <none>   11m   v1.14.10-gke.27
gke-kubia-default-pool-d41cef64-hrv2   NotReady   <none>   11m   v1.14.10-gke.27
```

```
% kubectl describe node gke-kubia-default-pool-d41cef64-bzc9
Name:               gke-kubia-default-pool-d41cef64-bzc9
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/fluentd-ds-ready=true
                    beta.kubernetes.io/instance-type=f1-micro
                    beta.kubernetes.io/os=linux
                    cloud.google.com/gke-nodepool=default-pool
                    cloud.google.com/gke-os-distribution=cos
                    failure-domain.beta.kubernetes.io/region=us-central1
                    failure-domain.beta.kubernetes.io/zone=us-central1-a
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=gke-kubia-default-pool-d41cef64-bzc9
                    kubernetes.io/os=linux
Annotations:        container.googleapis.com/instance_id: 8238278855390515765
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Wed, 01 Apr 2020 06:30:25 -0400
Taints:             <none>
Unschedulable:      false
Conditions:
  Type                          Status  LastHeartbeatTime                 LastTransitionTime                Reason                          Message
  ----                          ------  -----------------                 ------------------                ------                          -------
  FrequentDockerRestart         False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   NoFrequentDockerRestart         docker is functioning properly
  FrequentContainerdRestart     False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   NoFrequentContainerdRestart     containerd is functioning properly
  KernelDeadlock                False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   KernelHasNoDeadlock             kernel has no deadlock
  ReadonlyFilesystem            False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   FilesystemIsNotReadOnly         Filesystem is not read-only
  CorruptDockerOverlay2         False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   NoCorruptDockerOverlay2         docker overlay2 is functioning properly
  FrequentUnregisterNetDevice   False   Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:30:27 -0400   NoFrequentUnregisterNetDevice   node is functioning properly
  FrequentKubeletRestart        True    Wed, 01 Apr 2020 06:48:33 -0400   Wed, 01 Apr 2020 06:40:28 -0400   FrequentKubeletRestart          Found 5 matching logs, which meets the threshold of 5
  NetworkUnavailable            False   Wed, 01 Apr 2020 06:30:35 -0400   Wed, 01 Apr 2020 06:30:35 -0400   RouteCreated                    RouteController created a route
  MemoryPressure                False   Wed, 01 Apr 2020 06:48:48 -0400   Wed, 01 Apr 2020 06:48:14 -0400   KubeletHasSufficientMemory      kubelet has sufficient memory available
  DiskPressure                  False   Wed, 01 Apr 2020 06:48:48 -0400   Wed, 01 Apr 2020 06:48:14 -0400   KubeletHasNoDiskPressure        kubelet has no disk pressure
  PIDPressure                   False   Wed, 01 Apr 2020 06:48:48 -0400   Wed, 01 Apr 2020 06:48:14 -0400   KubeletHasSufficientPID         kubelet has sufficient PID available
  Ready                         True    Wed, 01 Apr 2020 06:48:48 -0400   Wed, 01 Apr 2020 06:48:16 -0400   KubeletReady                    kubelet is posting ready status. AppArmor enabled
Addresses:
  InternalIP:   10.128.0.4
  ExternalIP:   35.222.44.234
  InternalDNS:  gke-kubia-default-pool-d41cef64-bzc9.us-central1-a.c.b300098957.internal
  Hostname:     gke-kubia-default-pool-d41cef64-bzc9.us-central1-a.c.b300098957.internal
....
```

:x: Delete a cluster

```
% gcloud container clusters delete kubia --zone "us-central1-a"
```


# References 

https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair
