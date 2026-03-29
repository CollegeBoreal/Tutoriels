# 🖥️ cv4pve-cli

---

## 🍏 Installation sur macOS

### ✅ Méthode recommandée (Homebrew) :x:

Avec Homebrew :

```bash
brew tap corsinvest/cv4pve
brew install cv4pve-cli
```

---

### ✅ Alternative (binaire)

Télécharger depuis GitHub et installer manuellement :

```bash
curl -L  -o /tmp/cv4pve-cli.zip \
            https://github.com/Corsinvest/cv4pve-cli/releases/download/v2.1.0/cv4pve-cli-osx-arm64.zip \
&& unzip -o /tmp/cv4pve-cli.zip -d /tmp && chmod +x /tmp/cv4pve-cli && sudo mv /tmp/cv4pve-cli \
            /usr/local/bin/cv4pve-cli
```

Tester:

 ```bash
cv4pve-cli --version
```
> 2.1.0

---

## 🔗 Utilisation à distance (comme kubectl)

```bash
cv4pve-cli config add lab \
  --host https://IP-PROXMOX:8006 \
  --api-token root@pam!token=XXXX

cv4pve-cli config use lab

cv4pve-cli get vms
```

<details>

```
cv4pve-cli config add lab \
  --host https://10.7.237.16:8006 \
  --api-token tofu@pve!opentofu=4fa24fc3-bd8c-4916-ba6e-09a8aecc3b00
```

</details>


👉 Tu travailles depuis ton Mac, sans te connecter en SSH au serveur.

---

## 🔐 Bonnes pratiques

* ✅ Utiliser des **API tokens** (pas de mot de passe)
* ⚠️ Certificat auto-signé :

  ```bash
  --insecure
  ```
* 🔒 Accès via VPN recommandé (WireGuard, Tailscale…)

---

## 🧠 Conclusion

👉 Ton Mac devient un **poste de contrôle central**
👉 `cv4pve-cli` = équivalent de `kubectl` pour Proxmox
👉 Gestion simple de plusieurs clusters (contexts)
