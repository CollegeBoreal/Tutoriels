* Creer un fichier .openrc

```
$ vi .openrc 
export OS_AUTH_URL=http://10.13.237.4/identity
export OS_IDENTITY_API_VERSION=3
export OS_PROJECT_NAME=admin
export OS_USERNAME=admin
export OS_PASSWORD=supersecret
```

* `sourcer` le fichier .openrc

```
$ source .openrc
```
