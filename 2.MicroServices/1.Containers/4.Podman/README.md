# 🐳 Podman

## 🚀 1. Concepts de base

* Alternative à Docker (daemonless)
* Compatible CLI Docker (`alias docker=podman`)
* Rootless par défaut (plus sécurisé)

---

## 📦 2. Images

```bash
# Rechercher une image
podman search nginx

# Télécharger une image
podman pull nginx

# Lister les images
podman images

# Supprimer une image
podman rmi nginx
```

---

## 📦 3. Conteneurs

```bash
# Lancer un conteneur
podman run nginx

# Mode détaché
podman run -d nginx

# Nommer un conteneur
podman run -d --name web nginx

# Mapper un port
podman run -d -p 8080:80 nginx

# Variables d’environnement
podman run -e ENV=prod nginx
```

---

## 🔍 4. Gestion des conteneurs

```bash
# Lister les conteneurs actifs
podman ps

# Tous les conteneurs
podman ps -a

# Stopper un conteneur
podman stop web

# Démarrer
podman start web

# Supprimer
podman rm web

# Logs
podman logs web

# Exec dans un conteneur
podman exec -it web bash
```

---

## 🧠 5. Pods (spécifique Podman)

👉 Un **pod = groupe de conteneurs partageant réseau**

```bash
# Créer un pod
podman pod create --name monpod -p 8080:80

# Lancer un conteneur dans le pod
podman run -dt --pod monpod nginx

# Voir les pods
podman pod ps

# Stopper
podman pod stop monpod

# Supprimer
podman pod rm monpod
```

---

## 💾 6. Volumes

```bash
# Créer un volume
podman volume create data

# Lister
podman volume ls

# Monter un volume
podman run -v data:/data nginx

# Bind mount
podman run -v $(pwd):/app nginx
```

---

## 🌐 7. Réseau

```bash
# Lister réseaux
podman network ls

# Créer réseau
podman network create monreseau

# Utiliser réseau
podman run --network monreseau nginx
```

---

## 🔧 8. Build (comme Dockerfile)

```bash
# Build image
podman build -t monapp .

# Tag
podman tag monapp monrepo/monapp:v1

# Push
podman push monrepo/monapp:v1
```

---

## 🔐 9. Mode rootless vs root

```bash
# Vérifier mode
podman info | grep rootless

# Ports <1024 → sudo nécessaire
sudo podman run -p 80:80 nginx
```

---

## 🖥️ 10. Podman Machine (Mac / Windows)

```bash
# Créer VM
podman machine init
```

```
# Démarrer
podman machine start
```
<details>

```lua
Starting machine "podman-machine-default"

This machine is currently configured in rootless mode. If your containers
require root permissions (e.g. ports < 1024), or if you run into compatibility
issues with non-podman clients, you can switch using the following command:

	podman machine set --rootful

API forwarding listening on: /var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/podman/podman-machine-default-api.sock

The system helper service is not installed; the default Docker API socket
address can't be used by podman. If you would like to install it, run the following commands:

        sudo /opt/homebrew/Cellar/podman/5.1.2/bin/podman-mac-helper install
        podman machine stop; podman machine start

You can still connect Docker API clients by setting DOCKER_HOST using the
following command in your terminal session:

        export DOCKER_HOST='unix:///var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/podman/podman-machine-default-api.sock'

Machine "podman-machine-default" started successfully
```
</details>

```
# Stopper
podman machine stop
```

```
# SSH
podman machine ssh
```
```
Connecting to vm podman-machine-default. To close connection, use `~.` or `exit`
Fedora CoreOS 40.20240701.2.0
Tracker: https://github.com/coreos/fedora-coreos-tracker
Discuss: https://discussion.fedoraproject.org/tag/coreos

Last login: Thu Mar 26 20:11:31 2026 from 192.168.127.1
core@localhost:~$
```

---

## 🔁 11. Compatibilité Docker

```bash
# Alias utile
alias docker=podman

# Docker-compose alternatif
podman-compose up
```

---

## 🧹 12. Nettoyage

```bash
# Supprimer conteneurs stoppés
podman container prune

# Supprimer images inutilisées
podman image prune

# Tout nettoyer
podman system prune -a
```

---

## 📊 13. Debug & inspection

```bash
# Inspect
podman inspect web

# Stats
podman stats

# Top
podman top web
```

---

## ⚡ 14. Astuces utiles

```bash
# Lancer un shell temporaire
podman run -it --rm ubuntu bash

# Auto-remove
podman run --rm nginx

# Copier fichiers
podman cp fichier.txt web:/tmp/
```

---

## 🎯 Différences clés avec Docker

| Feature  | Podman ✅ | Docker ❌ |
| -------- | --------- | -------- |
| Daemon   | ❌        | ✅        |
| Rootless | ✅        | limité   |
| Pods     | ✅ natif  | ❌        |
| Sécurité | ++        | +        |

---

## 💡 Cas pratique rapide

```bash
podman run -d -p 8080:80 --name web nginx
```

➡️ Accès : [http://localhost:8080](http://localhost:8080)

---

