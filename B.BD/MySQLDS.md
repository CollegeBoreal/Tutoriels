### Docker

https://hub.docker.com/r/mysql/mysql-server/

* Créer le conteneur

```
$ docker container run --name some-mysqlds --publish 3306:3306 --detach mysql/mysql-server:latest
```

* Récupérer le mot de pass de `root`


```
$ docker logs some-mysqlds 2>&1 | grep GENERATED
[Entrypoint] GENERATED ROOT PASSWORD: uj0MnYkaM=uSYGuBAGEs#oD@H[uc
```


* Accéder au conteneur

```
$ docker container exec --interactive --tty some-mysqlds mysqlsh
```


### SGBD:

. lancer le CLI (Command Level Interface) de MySQL Shell

```
# mysqlsh --user root --socket=/var/run/mysqld/mysqlx.sock
```


. Dans le CLI

.. créer une base de données


