% helm install some-mysql \
  --set auth.rootPassword=password,auth.database=some-mysql \
    bitnami/mysql
NAME: some-mysql
LAST DEPLOYED: Sat Mar 27 17:13:31 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **

Tip:

  Watch the deployment status using the command: kubectl get pods -w --namespace default

Services:

  echo Primary: some-mysql.default.svc.cluster.local:3306

Administrator credentials:

  echo Username: root
  echo Password : $(kubectl get secret --namespace default some-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode)

To connect to your database:

  1. Run a pod that you can use as a client:

      kubectl run some-mysql-client --rm --tty -i --restart='Never' --image  docker.io/bitnami/mysql:8.0.23-debian-10-r57 --namespace default --command -- bash

  2. To connect to primary service (read/write):

      mysql -h some-mysql.default.svc.cluster.local -uroot -p some-mysql

To upgrade this helm chart:

  1. Obtain the password as described on the 'Administrator credentials' section and set the 'root.password' parameter as shown below:

      ROOT_PASSWORD=$(kubectl get secret --namespace default some-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
      helm upgrade some-mysql bitnami/mysql --set auth.rootPassword=$ROOT_PASSWORD
