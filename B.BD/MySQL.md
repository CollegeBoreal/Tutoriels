### Docker

https://hub.docker.com/_/mysql/

* Créer le conteneur

```
$ docker container run --name some-mysql --env MYSQL_ROOT_PASSWORD=password --publish 3306:3306 --detach mysql:latest
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

```
mysql> CREATE DATABASE etudiants;
```

### .. créer les utilisateurs

- Version Longue

```
mysql> CREATE USER 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';
```

- création d'un utilsateur pour l'utilisation à distance

#### :one: tous les IP

:bulb: Le caractère `%` indiquant un client (IP address) quelconque

```
mysql> CREATE USER 'etudiants'@'%' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'%';
```

#### :two: Un host spécifique par son nom ou son IP

```
mysql> CREATE USER 'etudiants'@'tsihombe.boralc.on.ca' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'tsihombe.boralc.on.ca';
```


- activer immédiatemment

```
mysql> flush privileges;
```


## References

Raspberry Pi image:  `hypriot/rpi-mysql:latest`
