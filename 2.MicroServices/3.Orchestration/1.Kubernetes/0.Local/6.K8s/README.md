# k8s :wheel_of_dharma: 

| Plane Type | Comments |
|------------|----------|
| [Control Plane](control-plane.md) | | 
| [Data Plane](data-plane.md) | | 


Check if you can run a pod

```
$ kubectl apply -f https://k8s.io/examples/pods/commands.yaml
pod/command-demo created
```

```
$ kubectl get pods
NAME           READY   STATUS              RESTARTS   AGE
command-demo   0/1     ContainerCreating   0          16s
```