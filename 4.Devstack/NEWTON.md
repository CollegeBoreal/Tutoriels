# INSTALLER OPENSTACK - DEVSTACK 

`Autheur: Gary Uppiah`

Pour commencer, l’utilisateur a besoin de mettre à jour les ‘packages’.

```
$ sudo apt-get -y update
```

L’utilisateur aura besoin d’installer git car c’est grâce a un répertoire git qu’on installera OpenStack et DevStack.

```
$ sudo apt-get -y install git
```

Il faut maintenant télécharger le répertoire sur GitHub. La commande suivante clone le répertoire dans le répertoire `/opt/devstack/`.

```
$ sudo git clone http://github.com/openstack-dev/devstack.git /opt/devstack/
```

Maintenant l’utilisateur doit entrer dans le répertoire, se donner les droits de faire des changements et créer un utilisateur.

```
$ cd /opt/devstack/
$ git checkout stable/newton
$ sudo chmod u+x tools/create-stack-user.sh
$ sudo ./tools/create-stack-user.sh
```

L’utilisateur doit maintenant mettre l’utilisateur ‘stack’ en tant que propriétaire de tous les fichiers dans le répertoire.

```
$ sudo chown -R stack:stack /opt/devstack/ 
```

Si l’utilisateur n’a pas vim, il peut l’installer avec la commande

```
$ sudo apt-get install vim 
```

Il doit copier le fichier `local.conf` dans `/opt/devstack/` et changer son adresse IP et enlever le commentaire devant `HOST-IP`.

```
$  sudo cp /opt/devstack/samples/local.conf /opt/devstack/
$ cd /opt/devstack 
$ vi local.conf
```

Editer le fichier `local.conf` et ajouter le code suivant. Il faut mettre tous le reste en commentaire.

```
 [[local|localrc]]
FLOATING_RANGE=10.13.237.48/28
FIXED_RANGE=172.16.0.0/24
FIXED_NETWORK_SIZE=256
FLAT_INTERFACE=enp9s0

ADMIN_PASSWORD=supersecret
DATABASE_PASSWORD=iheartdatabases
RABBIT_PASSWORD=flopsymopsy
SERVICE_PASSWORD=iheartksl 
```

Créer le répertoire ‘stack’.

```
$ sudo mkdir /opt/stack/
```

Donner les droits.

```
$ sudo chown -R stack:stack /opt/stack/
```

L’utilisateur doit maintenant se mettre en utilisateur stack.

```
$ sudo -i -u stack 
```

Maintenant il doit ‘stacker’. Les services s’installeront et se configureront, cela peut prendre quelques minutes.

```
$ cd /opt/devstack/
$ ./stack.sh
```

Je suggère de faire quelques tests pour voir si tout est installé proprement.

```
$ ./exercise.sh
```

S'il y a des erreurs ou des étapes furent omisses, je conseille de défaire le 'stack' et reprendre les étapes.

```
$ ./unstack
$ ./clean
$ sudo rm -rf /opt/stack/
$ sudo reboot 
```
