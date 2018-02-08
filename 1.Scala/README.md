# Scala

![alt tag](https://github.com/CollegeBoreal/INF1042-16E/blob/master/C.Installation/HelloWorld.png)

## Installation de la machine virtuelle java

* Java JDK 1.8: http://www.oracle.com/technetwork/java/javase/downloads

Ajuster son fichier de démarrage .bash_profile ou variable d'environnement 

MacOSX
```
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
export PATH=$JAVA_HOME/bin:$PATH
```

Windows
```
export JAVA_HOME="$(/c/Program Files (x86)/java/jdk.1.8.121)"
export PATH=$JAVA_HOME/bin:$PATH
```


## Installation de Scala Interface en Ligne de Commandes (CLI)

* Scala CLI: https://www.scala-lang.org/download/

Télécharger et extraire le fichier dans le répertoire ~/bin

Ajuster son fichier de démarrage .bash_profile ou variable d'environnement 
```
export SCALA_HOME=~/bin/scala-2.12.1

export PATH=$SCALA_HOME/bin:$PATH
```


## Installation de l'environnement intégré de développement (IDE)

* Intellij Idea : https://www.jetbrains.com/idea/download
* Enregistrement: https://www.jetbrains.com/student/

https://stackoverflow.com/questions/46381242/intellij-sbt-based-scala-project-does-not-build-with-java-9

## Installation de l'environnement de projet SBT (Simple Build Tool)

* Automatique:  

http://www.scala-sbt.org/download.html

* manuelle:  

http://www.scala-sbt.org/0.13/docs/Manual-Installation.html

![alt tag](https://github.com/CollegeBoreal/INF1042-16E/blob/master/C.Installation/sbt.png)

# LightBend Activator Home

  Outil permettant de créer des projets Java/Scala en utilisant des patrons (templates)

https://downloads.typesafe.com/typesafe-activator/1.3.12/typesafe-activator-1.3.12-minimal.zip

Télécharger et extraire le fichier dans le répertoire ~/bin

Ajuster son fichier de démarrage .bashrc ou variable d'environnement 
```
export ACTIVATOR_HOME=~/bin/activator-1.3.10-minimal

export PATH=$ACTIVATOR_HOME/bin:$PATH
```
