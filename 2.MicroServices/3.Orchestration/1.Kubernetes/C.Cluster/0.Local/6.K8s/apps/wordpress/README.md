

# wordpress

Edit the `Service` to allow the use of a local `LoadBalancer`  `openelb`

:warning: `{metadata.name}` must match the helm wordpress service name

```yaml
$ kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: wordpress-1617229377
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
$ PASSWD=`kubectl get secrets wordpress-1617229377-mariadb \
           --output jsonpath='{.data.mariadb-root-password}' | \
             base64 --decode && echo ""`
```

* run a sidecar container with the $PASSWD environment variable

```
$ kubectl run wordpress-1617229377-mariadb-client \
          --rm --tty --stdin --restart='Never' \
          --image  docker.io/bitnami/mariadb:10.5.9-debian-10-r28 \
          --namespace default \
          --env PASSWD=$PASSWD \
          --command -- bash
```

  2. To connect to primary service (read/write):

```
$ mysql --host wordpress-1617229377-mariadb.default.svc.cluster.local --user root --password=$PASSWD
```

Dump

```
$ kubectl run wordpress-1617229377-mariadb-client \
          --rm --tty --stdin --restart='Never' \
          --image  docker.io/bitnami/mariadb:10.5.9-debian-10-r28 \
          --namespace default \
          --command -- mysqldump \
           --host wordpress-1617229377-mariadb.default.svc.cluster.local \
           --user root --password=$PASSWD \
           bitnami_wordpress > ~/Developer/wordpress-1617229377-mariadb.sql
```

Restore

```
$ kubectl run wordpress-1617229377-mariadb-client \
          --rm --tty --stdin --restart='Never' \
          --image  docker.io/bitnami/mariadb:10.5.9-debian-10-r28 \
          --namespace default \
          --command -- mysql \
           --host wordpress-1617229377-mariadb.default.svc.cluster.local \
           --user root --password=$PASSWD \
           bitnami_wordpress < ~/Developer/wordpress-1617229377-mariadb.sql
```
