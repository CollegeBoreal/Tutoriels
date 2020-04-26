# :four: Orchestration

https://www.coursera.org/learn/google-kubernetes-engine

https://codelabs.developers.google.com/codelabs/cloud-orchestrate-with-kubernetes

```
PS > gcloud config set compute/zone us-central1-a
```

```
PS > gcloud container clusters create bootcamp `
                                --num-nodes 5 `
                                --scopes "https://www.googleapis.com/auth/projecthosting,storage-rw"
```

* Gérer son cluster avec `gcloud` CLI

```
PS > gcloud container clusters list
NAME   LOCATION       MASTER_VERSION  MASTER_IP      MACHINE_TYPE  NODE_VERSION  NUM_NODES  STATUS
kuron  us-central1-a  1.16.8-gke.8    104.197.255.8  g1-small      1.16.8-gke.8  3          RUNNING
```

* Générer une entrée dans `kubeconfig`

https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#generate_kubeconfig_entry

```
$ gcloud container clusters get-credentials [cluster-name]
```


* Creer un pod

```
$ kubectl run nginx --image=nginx:1.10.0 --generator=run-pod/v1
```

```
$ kubectl expose deployment nginx --port 80 --type LoadBalancer
```

```
$ kubectl get services
```

```
$ kubectl get pods
NAME                    READY   STATUS    RESTARTS   AGE
nginx-fb9c7b94d-j9x4g   1/1     Running   0          6m32s
```

```
$ kubectl scale deployment nginx --replicas 3
deployment.extensions/nginx scaled
```

```
$ kubectl get pods
NAME                    READY   STATUS    RESTARTS   AGE
nginx-fb9c7b94d-j9x4g   1/1     Running   0          8m14s
nginx-fb9c7b94d-nkggs   1/1     Running   0          32s
nginx-fb9c7b94d-vlk2b   1/1     Running   0          32s
```

```
$ kubectl get services
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
kubernetes   ClusterIP      10.51.240.1     <none>          443/TCP        14m
nginx        LoadBalancer   10.51.247.153   34.69.156.133   80:31578/TCP   3m48s
```

```
$ curl http://34.69.156.133:80
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>
<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>
<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```


### Clean Up

```
$ kubectl delete deployment nginx
```

```
$ kubectl delete service nginx
```


### Port Forward (no service)

:warning: No tested needs more

```
$ kubectl port-forward nginx 80:80
Forwarding from 127.0.0.1:80 -> 80
Handling connection for 10080
Handling connection for 10080
Handling connection for 10080
Handling connection for 10080
Handling connection for 10080
```

# Documentation

```
$ kubectl explain pods
```

```
$ cat pods/my-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    app: my-pod
spec:
  containers:
    - name: my-pod
...
```

```
$ kubectl explain pods.spec.containers
```
