# :two: Python

## Installation de la machine virtuelle java

* Python 3.7.4 :  https://www.python.org/downloads/

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

## Installation de l'environnement intégré de développement (IDE)

* Intellij Idea : https://www.jetbrains.com/idea/download
* Enregistrement: https://www.jetbrains.com/student/

## Installation de Scala Interface en Ligne de Commandes (CLI)

* Scala CLI: https://www.scala-lang.org/download/

Télécharger et extraire le fichier dans le répertoire ~/bin

Ajuster son fichier de démarrage ~/.bashrc ou variable d'environnement 
```
export SCALA_HOME=~/bin/scala-2.12.1
export PATH=$SCALA_HOME/bin:$PATH
```


# References:

:bangbang: https://www.toptal.com/scala/scala-bytecode-and-the-jvm


