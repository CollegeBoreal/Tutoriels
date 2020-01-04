### Docker

https://hub.docker.com/r/mysql/mysql-server/

* Créer le conteneur

```
$ docker container run --name some-mysqlsh --env MYSQL_ROOT_PASSWORD=password --publish 3306:3306 --detach mysql/mysql-server:latest
```

* Accéder au conteneur

```
$ docker container exec --interactive --tty some-mysql bash
```


### SGBD:

. lancer le CLI (Command Level Interface) de MySQL

```
#  mysql --user root --password
```


. Dans le CLI

.. créer une base de données


