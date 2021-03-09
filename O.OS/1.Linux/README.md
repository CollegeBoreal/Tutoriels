# Linux


## Shortcut Keys

https://www.tecmint.com/linux-command-line-bash-shortcut-keys/

https://ostechnix.com/list-useful-bash-keyboard-shortcuts/

## Create your own custom Linux Distro

https://www.maketecheasier.com/6-tools-to-easily-create-your-own-custom-linux-distro/

## Unix Toolbox

http://cb.vu/unixtoolbox.xhtml

:bulb: This Linux pipeline forces the CPU to work on compressing a continuous stream of random data.

```
$ dd if=/dev/urandom | gzip -9 >> /dev/null &
```

## HardWare Info

To see information about unused and used memory and swap space on your custom VM, run the following command:

```
$ free
```

To see details about the RAM installed on your VM, run the following command:

```
$ sudo dmidecode -t 17
```

To verify the number of processors, run the following command:

```
$ nproc
```

To see details about the CPUs installed on your VM, run the following command:

```
$ lscpu
```

