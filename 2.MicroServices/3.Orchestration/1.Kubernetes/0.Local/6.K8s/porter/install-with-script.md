# Porter Load Balancer

https://porterlb.io/docs/getting-started/installation/install-porter-on-kubernetes/

```
$ kubectl apply -f https://raw.githubusercontent.com/kubesphere/porter/master/deploy/porter.yaml
namespace/porter-system created
customresourcedefinition.apiextensions.k8s.io/bgpconfs.network.kubesphere.io created
customresourcedefinition.apiextensions.k8s.io/bgppeers.network.kubesphere.io created
customresourcedefinition.apiextensions.k8s.io/eips.network.kubesphere.io created
serviceaccount/porter-admission created
role.rbac.authorization.k8s.io/leader-election-role created
role.rbac.authorization.k8s.io/porter-admission created
clusterrole.rbac.authorization.k8s.io/porter-admission created
clusterrole.rbac.authorization.k8s.io/porter-manager-role created
rolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created
rolebinding.rbac.authorization.k8s.io/porter-admission created
clusterrolebinding.rbac.authorization.k8s.io/manager-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/porter-admission created
service/porter-admission created
deployment.apps/porter-manager created
job.batch/porter-admission-create created
job.batch/porter-admission-patch created
validatingwebhookconfiguration.admissionregistration.k8s.io/porter-admission created
```

```
$ kubectl get po -n porter-system
NAME                              READY   STATUS              RESTARTS   AGE
porter-admission-create-smww9     0/1     ContainerCreating   0          8s
porter-admission-patch-j5wmx      0/1     ContainerCreating   0          8s
porter-manager-77cdf446fc-489wp   0/1     ContainerCreating   0          8s
```

```
$ kubectl delete -f https://raw.githubusercontent.com/kubesphere/porter/master/deploy/porter.yaml
namespace "porter-system" deleted
customresourcedefinition.apiextensions.k8s.io "bgpconfs.network.kubesphere.io" deleted
customresourcedefinition.apiextensions.k8s.io "bgppeers.network.kubesphere.io" deleted
customresourcedefinition.apiextensions.k8s.io "eips.network.kubesphere.io" deleted
serviceaccount "porter-admission" deleted
role.rbac.authorization.k8s.io "leader-election-role" deleted
role.rbac.authorization.k8s.io "porter-admission" deleted
clusterrole.rbac.authorization.k8s.io "porter-admission" deleted
clusterrole.rbac.authorization.k8s.io "porter-manager-role" deleted
rolebinding.rbac.authorization.k8s.io "leader-election-rolebinding" deleted
rolebinding.rbac.authorization.k8s.io "porter-admission" deleted
clusterrolebinding.rbac.authorization.k8s.io "manager-rolebinding" deleted
clusterrolebinding.rbac.authorization.k8s.io "porter-admission" deleted
service "porter-admission" deleted
deployment.apps "porter-manager" deleted
job.batch "porter-admission-create" deleted
job.batch "porter-admission-patch" deleted
validatingwebhookconfiguration.admissionregistration.k8s.io "porter-admission" deleted
```


:x: Troubleshooting

:round_pushpin: Terminating Issue

https://github.com/kubernetes/kubernetes/issues/19317

```
$ kubectl get po -n porter-system
NAME                            READY   STATUS        RESTARTS   AGE
porter-admission-create-smww9   0/1     Terminating   0          9h
porter-admission-patch-j5wmx    0/1     Terminating   0          9h
```


Apply the script 

```
$ bash kill-kube-ns porter-system
```
