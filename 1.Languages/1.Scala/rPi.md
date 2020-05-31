# Scala native on RaspberryPi


https://scala-native.readthedocs.io/en/v0.3.9-docs/user/setup.html#installing-clang-and-runtime-dependencies

```
$ sudo apt install clang libunwind-dev
$ sudo apt install libgc-dev libre2-dev # optional
```


Install Java

```
$ sudo apt --fix-broken install
```

```
$ sudo apt install default-jdk
```


```
$ curl --insecure https://downloads.lightbend.com/scala/2.13.2/scala-2.13.2.deb --output scala-2.13.2.deb
$ sudo dpkg -i scala-2.13.2.deb 
```
