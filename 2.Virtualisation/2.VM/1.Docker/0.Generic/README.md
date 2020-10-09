## :b: Sur le client 

:bookmark: i.e. de `git bash` Windows ou de votre Terminal Mac

### :three: Installer la clé publique de la machine client à utiliser (d'où les commandes docker seront lancées) 

* generer votre cle privee/publique (~/.ssh/id_rsa)

```
$ ssh-keygen
```

* Copier la clé publique vers le Serveur ou est installé Docker Engine 

  :warning: substituer `ubuntu` et l'adresse IP `10.13.237.16` par vos informations

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@10.13.237.16  
```

### 3) Creer votre `pseudo` machine virtuelle

https://docs.docker.com/v17.09/machine/drivers/generic

:warning: substituer l'utilisateur ubuntu, l'adresse IP 10.13.237.16 et le nom `nom_de_ma_machine`

```
$ docker-machine create --driver generic \
                        --generic-ip-address=10.13.237.16 \
                        --generic-ssh-user=ubuntu \
                        --generic-ssh-key ~/.ssh/id_rsa \
                        nom_de_ma_machine
```

* Si erreur 
```
Error creating machine: Error detecting OS: OS type not recognized
```

voir [Error :strawberry:](RaspberryPi.md) 

### enlever la clé pour recommencer l'operation si erreur il y a

```
$ rm -rf ~/.docker/machine/machines/nom_de_ma_machine
```

:warning: Changement d'adresse IP, generant une erreur de certificat `x509` 

```
Unknown   Unable to query docker version: Get https://192.168.1.10:2376/v1.15/version: x509: certificate is valid for 10.13.237.16, not 192.168.1.10
```

:pushpin: regénérer le certificat

```
$ docker-machine regenerate-certs nom_de_ma_machine
```
