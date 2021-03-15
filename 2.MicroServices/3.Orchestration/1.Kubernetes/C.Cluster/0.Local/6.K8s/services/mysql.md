
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

# References

https://github.com/bitnami/charts/issues/1126
