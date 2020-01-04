### Docker

https://hub.docker.com/r/mysql/mysql-server/

* Créer le conteneur

```
$ % docker container run \
         --name some-mysqlds \     
         --env MYSQL_ROOT_PASSWORD=password \
         --publish 3306:3306 \
         --detach \
         mysql/mysql-server:latest
```

* Accéder au conteneur

```
$ docker container exec --interactive --tty some-mysqlds bash
```

### SGBD:

https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-commands.html

. lancer le CLI (Command Level Interface) de MySQL Shell

```
# mysqlsh --user root --socket=/var/run/mysqld/mysqlx.sock
```


. Dans le CLI

.. créer une base de données


