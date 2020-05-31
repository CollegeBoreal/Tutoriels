# Scala native on RaspberryPi


https://scala-native.readthedocs.io/en/v0.3.9-docs/user/setup.html#installing-clang-and-runtime-dependencies

```
$ sudo apt install clang libunwind-dev
$ sudo apt install libgc-dev libre2-dev # optional
```


Install Java

```
$ sudo apt --fix-broken install
$ sudo apt-get update
$ sudo apt install default-jdk
```

Install sbt

```
$ echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
$ curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add
$ sudo apt-get update
$ sudo apt-get install sbt
```

Install scala

```
$ curl --insecure https://downloads.lightbend.com/scala/2.13.2/scala-2.13.2.deb --output scala-2.13.2.deb
$ sudo dpkg -i scala-2.13.2.deb 
```
