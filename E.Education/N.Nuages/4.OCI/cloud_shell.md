# Cloud Shell

Interact with an OKE cluster from Cloud Shell
Follow the instructions in [Setting Up Cloud Shell Access to Clusters](https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contengdownloadkubeconfigfile.htm#cloudshelldownload) to:

1. Set up an OKE kubeconfig file for use with Cloud Shell:

a. Select a cluster.

b. Click the `Access Cluster` button.

c. Click `Cloud Shell Access`.

d. Click `Launch Cloud Shell` to display the Cloud Shell window.

e. In the Cloud Shell window, run the Oracle Cloud Infrastructure CLI command to set up the kubeconfig file and save it in a location accessible to kubectl. For example:

```
oci ce cluster create-kubeconfig --cluster-id ocid1.cluster.oc1.phx.aaaaaaaaae... \
                                 --file $HOME/.kube/config  \
                                 --region us-phoenix-1 \
                                 --token-version 2.0.0
```

Verify that kubectl is available and can connect to the cluster from the Cloud Shell window by entering the following command in the Cloud Shell window:

```
kubectl get nodes
```


# References

- [ ] [Getting Started with Cloud Shell](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cloudshellgettingstarted.htm)
