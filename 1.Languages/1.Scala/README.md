# :one: Scala


## :o: Installer la JVM

[J.JVM](../J.JVM)


## :a: Installation de l'environnement de projet SBT (Simple Build Tool)

* Installer dans le terminal

```
$ sdk install sbt
```


* Pour tester l'installation

```
$ sbt --version
[info] 1.2.8
sbt script version: 1.3.3
```

![alt tag](https://github.com/CollegeBoreal/INF1042-16E/blob/master/C.Installation/sbt.png)


## :b: Installation de Scala Interface en Ligne de Commandes (CLI)

* Installer dans le terminal

```
$ sdk install scala
```


* Pour tester l'installation

```
$ scala --version
Scala code runner version 2.13.1 -- Copyright 2002-2019, LAMP/EPFL and Lightbend, Inc.
```

## Play

### Debug Application:
```
1. $ sbt -jvm-debug 5005 or ./sbt
2. $ set SBT_OPTS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005" && sbt
3. ~ run
```

### Backend Test:
```
1. ./sbt test
```

# References:

:bulb: https://dzone.com/articles/sdkman-managing-sdks-were-never-so-smart

:bangbang: https://www.toptal.com/scala/scala-bytecode-and-the-jvm


:bangbang: [Scala Developer Suvey Results 2018]( https://typesafe.co1.qualtrics.com/results/public/dHlwZXNhZmUtVVJfNlB4cWNSMXdub0liVExmLTVhZjMwZDc4MjAzMGVkMDAxNDhkOTc4OA)
