# :one: Scala

![alt tag](https://github.com/CollegeBoreal/INF1042-16E/blob/master/C.Installation/HelloWorld.png)

## Installation de la machine virtuelle java

* Java JDK 11 : http://www.oracle.com/technetwork/java/javase/downloads

Ajuster son fichier de démarrage ~/.bashrc ou variable d'environnement 

MacOSX
```
export JAVA_HOME="$(/usr/libexec/java_home --version 11)"
export PATH=$JAVA_HOME/bin:$PATH
```

Windows
```
export JAVA_HOME="/c/Program Files/java/jdk-11.0.2"
export PATH=$JAVA_HOME/bin:$PATH
```

### Pour tester l'installation
```
$ java -version
java version "11.0.1" 2018-10-16 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
```

## Installation de l'environnement de projet SBT (Simple Build Tool)

* Automatique:  

http://www.scala-sbt.org/download.html

* manuelle:  

http://www.scala-sbt.org/0.13/docs/Manual-Installation.html

Windows
```
export SBT_HOME="/c/Program Files/sbt"
export PATH=$SBT_HOME/bin:$PATH
```

Mac
```
export SBT_HOME="/Applications/sbt"
export PATH=$SBT_HOME/bin:$PATH
```

![alt tag](https://github.com/CollegeBoreal/INF1042-16E/blob/master/C.Installation/sbt.png)


## Installation de l'environnement intégré de développement (IDE)

* Intellij Idea : https://www.jetbrains.com/idea/download
* Enregistrement: https://www.jetbrains.com/student/

* Configuration Scala/Sbt/IntelliJ

https://stackoverflow.com/questions/46381242/intellij-sbt-based-scala-project-does-not-build-with-java-9

![alt tag](https://i.stack.imgur.com/vcBkX.png)

## Installation de Scala Interface en Ligne de Commandes (CLI)

* Scala CLI: https://www.scala-lang.org/download/

Télécharger et extraire le fichier dans le répertoire ~/bin

Ajuster son fichier de démarrage ~/.bashrc ou variable d'environnement 
```
export SCALA_HOME=~/bin/scala-2.12.1
export PATH=$SCALA_HOME/bin:$PATH
```


