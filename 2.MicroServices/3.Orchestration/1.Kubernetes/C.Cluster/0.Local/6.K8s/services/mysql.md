
https://bitnami.com/stack/mysql/helm

```
$ helm repo add bitnami https://charts.bitnami.com/bitnami
``` 
```
$ helm install kube-mysql --set persistence.storageClass=openebs-sc-statefulset bitnami/mysql
NAME: kube-mysql
LAST DEPLOYED: Mon Mar 15 12:43:21 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **

Tip:

  Watch the deployment status using the command: kubectl get pods -w --namespace default

Services:

  echo Primary: kube-mysql.default.svc.cluster.local:3306

Administrator credentials:

  echo Username: root
  echo Password : $(kubectl get secret --namespace default kube-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode)

To connect to your database:

  1. Run a pod that you can use as a client:

      kubectl run kube-mysql-client --rm --tty -i --restart='Never' --image  docker.io/bitnami/mysql:8.0.23-debian-10-r28 --namespace default --command -- bash

  2. To connect to primary service (read/write):

      mysql -h kube-mysql.default.svc.cluster.local -uroot -p my_database

To upgrade this helm chart:

  1. Obtain the password as described on the 'Administrator credentials' section and set the 'root.password' parameter as shown below:

      ROOT_PASSWORD=$(kubectl get secret --namespace default kube-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
      helm upgrade kube-mysql bitnami/mysql --set auth.rootPassword=$ROOT_PASSWORD
```

```
$ kubectl describe pods kube-mysql-0
Name:         kube-mysql-0
Namespace:    default
Priority:     0
Node:         saiph/10.13.15.203
Start Time:   Mon, 15 Mar 2021 12:43:24 -0400
Labels:       app.kubernetes.io/component=primary
              app.kubernetes.io/instance=kube-mysql
              app.kubernetes.io/managed-by=Helm
              app.kubernetes.io/name=mysql
              controller-revision-hash=kube-mysql-6f99595f46
              helm.sh/chart=mysql-8.4.4
              statefulset.kubernetes.io/pod-name=kube-mysql-0
Annotations:  checksum/configuration: c1cdd7199cecb490cc3c76739172c12b5ebcfad6ed213fe006b09bb259f8d6d7
              cni.projectcalico.org/podIP: 172.16.214.8/32
              cni.projectcalico.org/podIPs: 172.16.214.8/32
Status:       Running
IP:           172.16.214.8
IPs:
  IP:           172.16.214.8
Controlled By:  StatefulSet/kube-mysql
Containers:
  mysql:
    Container ID:   docker://2b1decf2536dd8ee9c118c75a805b5a5c193ead64f3f8a9ed37fcfe1b8dfd797
    Image:          docker.io/bitnami/mysql:8.0.23-debian-10-r28
    Image ID:       docker-pullable://bitnami/mysql@sha256:c5ec9133b2173ceab7b845f39dd32a5118ca2ad77dc5e32990ebbd16145de6f3
    Port:           3306/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 15 Mar 2021 16:27:26 -0400
    Last State:     Terminated
      Reason:       Error
      Exit Code:    137
      Started:      Mon, 15 Mar 2021 16:24:31 -0400
      Finished:     Mon, 15 Mar 2021 16:27:25 -0400
    Ready:          False
    Restart Count:  45
    Liveness:       exec [/bin/bash -ec password_aux="${MYSQL_ROOT_PASSWORD:-}"
if [[ -f "${MYSQL_ROOT_PASSWORD_FILE:-}" ]]; then
    password_aux=$(cat "$MYSQL_ROOT_PASSWORD_FILE")
fi
mysqladmin status -uroot -p"${password_aux}"
] delay=120s timeout=1s period=10s #success=1 #failure=3
    Readiness:  exec [/bin/bash -ec password_aux="${MYSQL_ROOT_PASSWORD:-}"
if [[ -f "${MYSQL_ROOT_PASSWORD_FILE:-}" ]]; then
    password_aux=$(cat "$MYSQL_ROOT_PASSWORD_FILE")
fi
mysqladmin status -uroot -p"${password_aux}"
] delay=30s timeout=1s period=10s #success=1 #failure=3
    Environment:
      BITNAMI_DEBUG:        false
      MYSQL_ROOT_PASSWORD:  <set to the key 'mysql-root-password' in secret 'kube-mysql'>  Optional: false
      MYSQL_DATABASE:       my_database
    Mounts:
      /bitnami/mysql from data (rw)
      /opt/bitnami/mysql/conf/my.cnf from config (rw,path="my.cnf")
      /var/run/secrets/kubernetes.io/serviceaccount from kube-mysql-token-wr6nc (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             False 
  ContainersReady   False 
  PodScheduled      True 
Volumes:
  data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  data-kube-mysql-0
    ReadOnly:   false
  config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      kube-mysql
    Optional:  false
  kube-mysql-token-wr6nc:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  kube-mysql-token-wr6nc
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                    From     Message
  ----     ------     ----                   ----     -------
  Warning  Unhealthy  14m (x564 over 3h43m)  kubelet  Readiness probe failed: mysqladmin: [Warning] Using a password on the command line interface can be insecure.
mysqladmin: connect to server at 'localhost' failed
error: 'Can't connect to local MySQL server through socket '/opt/bitnami/mysql/tmp/mysql.sock' (2)'
Check that mysqld is running and that the socket: '/opt/bitnami/mysql/tmp/mysql.sock' exists!
  Warning  BackOff  9m11s (x445 over 3h20m)  kubelet  Back-off restarting failed container
  Normal   Pulled   4m20s (x44 over 3h40m)   kubelet  Container image "docker.io/bitnami/mysql:8.0.23-debian-10-r28" already present on machine
```


# References

https://github.com/bitnami/charts/issues/1126
