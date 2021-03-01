# k8s :wheel_of_dharma: 

| Plane Type                        | Comments |
|-----------------------------------|----------|
| [Control Plane](control-plane.md) |          | 
| [Data Plane](data-plane.md)       |          | 
| [Expose IP](expose-eip)           | Expose External IP Address         | 
| [Storage Class](storage-class)         |          |
| [Dashboard](dashboard.md)         |          |


- [ ] run a pod

```
$ kubectl apply -f https://k8s.io/examples/pods/commands.yaml
pod/command-demo created
```

- [ ] Check its status


```
$ kubectl get pods
NAME           READY   STATUS              RESTARTS   AGE
command-demo   0/1     ContainerCreating   0          16s
```

- [ ] When completed

```
$ kubectl get pods      
NAME                                READY   STATUS      RESTARTS   AGE
command-demo                        0/1     Completed   0          16h
```

- [ ] [Delete a completed pod](https://stackoverflow.com/questions/55072235/how-to-delete-completed-kubernetes-pod)

```
% kubectl get pod --field-selector=status.phase==Succeeded
NAME                            READY   STATUS      RESTARTS   AGE
command-demo                    0/1     Completed   0          16h
```

Apply a filter

```
$ kubectl delete pod --field-selector=status.phase==Succeeded
pod "command-demo" deleted
```

:x: Troubleshooting

[stuck-on-containercreating](https://serverfault.com/questions/728727/kubernetes-stuck-on-containercreating)

```
$ kubectl describe pods
```

