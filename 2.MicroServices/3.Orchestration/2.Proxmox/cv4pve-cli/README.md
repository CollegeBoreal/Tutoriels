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
  --host IP-PROXMOX:8006 \
  --api-token root@pam!token=XXXX

cv4pve-cli config use lab

cv4pve-cli get vms
```

<details>

```bash
cv4pve-cli config add lab \
  --host 10.7.237.13:8006 \
  --api-token 'tofu@pve!opentofu=55dccf39-a3db-4bad-8a28-954addb13739' \
  --validate-certificate false
```
```
Context 'lab' saved.
Connected to 10.7.237.13:8006 — PVE version: 7.4-20
```

</details>


```bash
cv4pve-cli config use lab
```
> Switched to context 'lab'.

```bash
cv4pve-cli get nodes
``
```lua
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
| node    | status | cpu                 | level | maxcpu | maxmem      | mem         | ssl_fingerprint                                                                                 | uptime  |
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
| labinfo | online | 0.00378094889620685 |       | 16     | 67508559872 | 21202927616 | 94:63:49:B7:ED:77:C7:AD:33:DA:DC:B6:C4:E6:43:63:F7:C0:AC:38:5F:C3:9C:01:02:80:E5:D4:24:5E:B9:C2 | 5263188 |
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
```

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
