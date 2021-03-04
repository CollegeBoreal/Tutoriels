

Drain a node (from `ursa` to `canis`)

```
$ kubectl drain ursa --ignore-daemonsets --delete-local-data
```

Check the transioniin of the pods to the remaining node

```
$ kubectl get pods --output=wide
NAME                                READY   STATUS              RESTARTS   AGE     IP               NODE    NOMINATED NODE   READINESS GATES
kuron-deployment-55878fd4cd-4tl9v   0/1     ContainerCreating   0          49s     <none>           canis   <none>           <none>
kuron-deployment-55878fd4cd-89dhb   0/1     Terminating         0          43h     172.16.183.139   ursa    <none>           <none>
kuron-deployment-55878fd4cd-dshg8   0/1     ContainerCreating   0          49s     <none>           canis   <none>           <none>
kuron-deployment-55878fd4cd-mhr5n   1/1     Running             0          49s     172.16.108.2     canis   <none>           <none>
kuron-deployment-55878fd4cd-z2frn   0/1     ContainerCreating   0          49s     <none>           canis   <none>           <none>
porter-manager-98cc6c799-t7twm      0/1     ContainerCreating   0          49s     10.13.15.201     canis   <none>           <none>
porter-manager-98cc6c799-wztpd      0/1     Terminating         0          3d16h   10.13.15.202     ursa    <none>           <none>
```


https://stackoverflow.com/questions/35757620/how-to-gracefully-remove-a-node-from-kubernetes

https://docs.mirantis.com/mcp/q4-18/mcp-operations-guide/kubernetes-operations/k8s-node-ops/k8s-node-remove.html
