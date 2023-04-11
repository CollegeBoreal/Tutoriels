

# orangehrm

Edit the `Service` to allow the use of a local `LoadBalancer`  `openelb` ELB

:warning: `{metadata.name}` must match the helm orangehrm service name

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: orangehrm-1617227462
  annotations:
    lb.kubesphere.io/v1alpha1: openelb
    protocol.openelb.kubesphere.io/v1alpha1: layer2
    eip.openelb.kubesphere.io/v1alpha2: layer2-eip
spec:
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: http
    - name: https
      protocol: TCP
      port: 443
      targetPort: https
  type: LoadBalancer
---
EOF
```

To connect to your database:

  1. Run a pod that you can use as a client:


* get the password

```
$ PASSWD=`kubectl get secrets orangehrm-1617227462-mariadb -o jsonpath='{.data.mariadb-root-password}' | base64 --decode && echo ""`
```

* run a sidecar container with the $PASSWD environment variable

```
$ kubectl run orangehrm-1617227462-mariadb-client \
          --rm --tty --stdin --restart='Never' \
          --image  docker.io/bitnami/mariadb:10.5.9-debian-10-r28 \
          --namespace default \
          --env PASSWD=$PASSWD \
          --command -- bash
```

  2. To connect to primary service (read/write):

```
$ mysql --host orangehrm-1617227462-mariadb.default.svc.cluster.local --user root --password=$PASSWD
```

```
$ kubectl run orangehrm-1617227462-mariadb-client \
          --rm --tty --stdin --restart='Never' \
          --image  docker.io/bitnami/mariadb:10.5.9-debian-10-r28 \
          --namespace default \
          --command -- mysqldump \
           --host orangehrm-1617227462-mariadb.default.svc.cluster.local \
           --user root --password=$PASSWD \
           bitnami_orangehrm > ~/Developer/orangehrm-1617227462-mariadb.sql
```

