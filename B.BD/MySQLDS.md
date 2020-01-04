### Docker

https://hub.docker.com/r/mysql/mysql-server/

* Créer le conteneur

```
$ docker container run \
         --name some-mysqlds \
         --env MYSQL_ALLOW_EMPTY_PASSWORD=yes \
         --publish 3306:3306 \
         --detach \
         mysql/mysql-server:latest
```

* Accéder au conteneur

```
$ docker container exec --interactive --tty some-mysqlds mysqlsh
```


### SGBD:

. lancer le CLI (Command Level Interface) de MySQL

```
#  mysql --user root --password
```


. Dans le CLI

.. créer une base de données


