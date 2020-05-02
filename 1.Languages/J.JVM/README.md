# J.JVM (Java Virtual Machine)

![image](images/HelloWorld.png)

## :o: Installation de [sdkman](https://sdkman.io)

:round_pushpin: Installer dans le terminal

:computer: Sous Windows installer avec gitbash

```
$ curl -s "https://get.sdkman.io" | bash
```

:apple: Sous Apple installer avec zsh

```
% curl -s "https://get.sdkman.io" | zsh
```

:round_pushpin: ouvrir un autre terminal et verifier l'installation

```
$ sdk version  

SDKMAN 5.7.3+337
```


## :a: Installation de la machine virtuelle java

* Installer dans le terminal

```
$ sdk install java
```

* Pour tester l'installation

```
$ java --version
openjdk 11.0.5 2019-10-15
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.5+10)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.5+10, mixed mode)
```

## :x: Zip sous windows


I use choco as my Windows Package Manager.

I install 7zip with choco using PowerShell (you must be admin to use Choco)

```
PS > choco install 7zip.install
```

Open another gitbash Terminal and locate the 7z.exe executable

```
$ which 7z
/c/ProgramData/chocolatey/bin/7z
```

Do a straight copy of 7z.exe to zip.exe and voila

```
$ cp /c/ProgramData/chocolatey/bin/7z.exe /c/ProgramData/chocolatey/bin/zip.exe
```
