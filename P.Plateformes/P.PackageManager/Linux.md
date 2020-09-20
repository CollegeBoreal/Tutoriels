

# Linux Package Manager



### :tada: [Cheat Sheet](http://wiki.tinycorelinux.net/wiki:package_management_cheat_sheet)

| Task | apt (deb) | yum (rpm) | tce-load (tcz)|
|------|-----------|-----------|---------------|
|**Install a package from the repo**|apt-get install ''pkg''|yum install ''pkg''|tce-load -wi ''pkg''|
|**Install from a local file**|dpkg -i ''pkg''|yum localinstall ''pkg''|tce-load -i ''pkg''|
|**Search**|apt-cache search ''pattern''|yum search ''pattern''|tce-ab |
|**List installed packages**|dpkg -l|rpm -qa|ls /usr/local/tce.installed|
|**List installed files**|$ dpkg-query  -L ''pkg''|||


## Distribution

## :computer: [Tiny Core Linux](tinycorelinux.net) **tcz**

[tce load](http://wiki.tinycorelinux.net/wiki:install_apps)

* [Tiny Core Linux](tinycorelinux.net)


## :computer: [Debian](https://doc.ubuntu-fr.org/dpkg)

[deb](https://doc.ubuntu-fr.org/dpkg)

* Ubuntu

## :computer: [RPM]()

* Red Hat


## :computer: [Snap]()


