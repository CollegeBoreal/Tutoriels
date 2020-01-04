### Docker

https://hub.docker.com/r/mysql/mysql-server/

* Créer le conteneur

```
$ docker container run \
         --name some-mysqlds \
         --env MYSQL_ROOT_PASSWORD=password \
         --publish 3306:3306 \
         --publish 33060:33060 \
         --detach \
         mysql/mysql-server:latest
```

```
$ docker container run \
         --name some-mysqlds \
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

:warning: this is not working use the socket file

```
# mysqlsh --mysqlx --host localhost --user root --password=password 
```

socke access

```
# mysqlsh --user root --socket=/var/run/mysqld/mysqlx.sock
```


. Dans le Shell CLI

https://dev.mysql.com/doc/refman/8.0/en/mysql-shell-tutorial-javascript-documents-collections.html

Se connecter a une DB

```
 MySQL localhost+ ssl world_x  JS >\use world_x
```

.. liste des collections

```
 MySQL  localhost+ ssl  world_x  JS > db.getCollections()
[
    <Collection:countryinfo>
]
```


.. liste des collections

```
 MySQL  localhost+ ssl  world_x  JS > db.countryinfo.find()
```
