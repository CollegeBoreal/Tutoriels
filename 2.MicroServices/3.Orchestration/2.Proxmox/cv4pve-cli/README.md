# 🖥️ cv4pve-cli

## 🔗 Utilisation à distance (comme kubectl)

```bash
cv4pve-cli config add INF1102-201-26H-03:GROUP_3 \
  --host IP-PROXMOX \
  --api-token root@pam!token=XXXX

cv4pve-cli config use INF1102-201-26H-03:GROUP_3

cv4pve-cli get vms
```

<details>

```bash
cv4pve-cli config add INF1102-201-26H-03:GROUP_3 \
  --host 10.7.237.13 \
  --api-token 'tofu@pve!opentofu=55dccf39-a3db-4bad-8a28-954addb13739' \
  --validate-certificate false
```
```
Context 'INF1102-201-26H-03:GROUP_3' saved.
Connected to 10.7.237.13 — PVE version: 7.4-20
```

</details>


```bash
cv4pve-cli config use INF1102-201-26H-03:GROUP_3
```
> Switched to context 'INF1102-201-26H-03:GROUP_3'.

```bash
cv4pve-cli get nodes
```
```lua
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
| node    | status | cpu                 | level | maxcpu | maxmem      | mem         | ssl_fingerprint                                                                                 | uptime  |
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
| labinfo | online | 0.00378094889620685 |       | 16     | 67508559872 | 21202927616 | 94:63:49:B7:ED:77:C7:AD:33:DA:DC:B6:C4:E6:43:63:F7:C0:AC:38:5F:C3:9C:01:02:80:E5:D4:24:5E:B9:C2 | 5263188 |
+---------+--------+---------------------+-------+--------+-------------+-------------+-------------------------------------------------------------------------------------------------+---------+
```

```bash
cv4pve-cli get vms -o=json | jq .
```
<details>

```json
[
  {
    "id": "qemu/100",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00194838342698081,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1731690496,
    "name": "vm300147629",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 4487984,
    "vmid": 100
  },
  {
    "id": "qemu/101",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00243547928372601,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1727791104,
    "name": "vm300143951",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 4203684,
    "vmid": 101
  },
  {
    "id": "qemu/102",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00194838342698081,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1679826944,
    "name": "vm300141858",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 4042281,
    "vmid": 102
  },
  {
    "id": "qemu/103",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00243547928372601,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 21474836480,
    "maxmem": 4294967296,
    "mem": 2663849984,
    "name": "vm300144176",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 4043340,
    "vmid": 103
  },
  {
    "id": "qemu/104",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00243547928372601,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1652064256,
    "name": "vm300142072",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 3436764,
    "vmid": 104
  },
  {
    "id": "qemu/105",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00146128757023561,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1691095040,
    "name": "vm300145405",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 3441023,
    "vmid": 105
  },
  {
    "id": "qemu/106",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00194838342698081,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1735053312,
    "name": "vm300146721",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 3441052,
    "vmid": 106
  },
  {
    "id": "qemu/107",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00146128757023561,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1751965696,
    "name": "vm300147816",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 862481,
    "vmid": 107
  },
  {
    "id": "qemu/108",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0.00194838342698081,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 10737418240,
    "maxmem": 2147483648,
    "mem": 1027682304,
    "name": "vm300146418",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "running",
    "storage": "",
    "uptime": 405290,
    "vmid": 108
  },
  {
    "id": "qemu/9000",
    "type": "qemu",
    "cgroup-mode": "",
    "content": "",
    "cpu": 0,
    "disk": 0,
    "hastate": "",
    "level": "",
    "maxcpu": 2,
    "maxdisk": 2361393152,
    "maxmem": 2147483648,
    "mem": 0,
    "name": "ubuntu-jammy-template",
    "node": "labinfo",
    "plugintype": "",
    "pool": "",
    "status": "stopped",
    "storage": "",
    "uptime": 0,
    "vmid": 9000
  }
]
```

</details>

---

## 🔐 Bonnes pratiques

* ✅ Utiliser des **API tokens** (pas de mot de passe)
* ⚠️ Certificat auto-signé :

  ```bash
  --validate-certificate false
  ```
* 🔒 Accès via VPN recommandé (WireGuard, Tailscale…)

---

## 🧠 Conclusion

- 👉 Ton Mac devient un **poste de contrôle central**
- 👉 `cv4pve-cli` = équivalent de `kubectl` pour Proxmox
- 👉 Gestion simple de plusieurs clusters (contexts)

# 🥇 Utilisations

## :one: Config


```bash
cv4pve-cli config list
```
```
  INF1102-201-26H-03:GROUP_1 10.7.237.16:8006   (api-token)
  INF1102-201-26H-03:GROUP_2 10.7.237.13:8006   (api-token)
* INF1102-201-26H-03:GROUP_3 10.7.237.33:8006   (api-token)
```

## :two: VMs

```bash
cv4pve-cli get vms -ojson | jq -r '.[] | select(.status=="running") | "\(.id) \(.name)"'
```
```
qemu/100 vm300150485
qemu/101 vm300150433
qemu/102 vm300150385
qemu/103 vm300151970
qemu/104 vm300150558
qemu/105 vm300150195
qemu/106 vm300150416
qemu/107 vm300151042
qemu/108 vm300151607
```

```bash
pve get vm status labinfo 100
```
```lua
+-----------------+--------------------+
| key             | value              |
+-----------------+--------------------+
| cpus            | 2                  |
| ha              | {"managed":0}      |
| maxdisk         | 10737418240        |
| maxmem          | 2147483648         |
| name            | vm300150485        |
| pid             | 662273             |
| qmpstatus       | running            |
| running-machine | pc-i440fx-7.2+pve0 |
| running-qemu    | 7.2.10             |
| status          | running            |
| uptime          | 3285422            |
| vmid            | 100                |
+-----------------+--------------------+
```

Voici un **cheat sheet pratique pour cv4pve-cli sur macOS/Linux (style kubectl pour Proxmox)**

---

# 🧠 CV4PVE-CLI CHEATSHEET (Proxmox like kubectl)

---

## 🚀 1. Installation (Mac M1/M2/M3)

```bash
curl -L -o /tmp/cv4pve.zip https://github.com/Corsinvest/cv4pve-cli/releases/latest/download/cv4pve-cli-osx-arm64.zip
unzip -o /tmp/cv4pve.zip -d /tmp
chmod +x /tmp/cv4pve-cli
sudo mv /tmp/cv4pve-cli /usr/local/bin/
cv4pve-cli --version
```

---

## 🔗 2. Connexion (Context = kubeconfig)

```bash
cv4pve-cli config add lab \
  --host 10.7.237.13 \
  --api-token 'user@pve!tokenid=uuid' \
  --validate-certificate false
```

👉 switch context :

```bash
cv4pve-cli config use lab
```

---

## 📡 3. Test connexion

```bash
cv4pve-cli get nodes
cv4pve-cli get vms
cv4pve-cli get ct
```

---

## 🖥️ 4. VM / Container management

```bash
cv4pve-cli get vms
cv4pve-cli get vm <id>

cv4pve-cli start vm <id>
cv4pve-cli stop vm <id>
cv4pve-cli restart vm <id>
```

---

## 📦 5. Containers (LXC)

```bash
cv4pve-cli get ct
cv4pve-cli start ct <id>
cv4pve-cli stop ct <id>
```

---

## 🧠 6. Nodes

```bash
cv4pve-cli get nodes
cv4pve-cli get node <name>
```

---

## 🌐 7. API raw (ultra puissant)

```bash
cv4pve-cli api get /nodes
cv4pve-cli api get /cluster/resources
cv4pve-cli api get /nodes/pve/qemu
```

---

## 📊 8. JSON mode (automation)

```bash
cv4pve-cli get vms --output json
```

Pipe avec jq :

```bash
cv4pve-cli get vms --output json | jq
```

---

## 🔐 9. API Token format

```
user@realm!tokenid=secret-uuid
```

Exemple :

```
tofu@pve!opentofu=xxxxxxxx-xxxx-xxxx
```

---

## ⚠️ 10. IMPORTANT (erreurs fréquentes)

#### ❌ Host avec https

```bash
--host https://10.7.x.x:8006 ❌
```

#### ✅ Correct

```bash
--host 10.7.x.x:8006
```

---

#### ❌ erreur "No reachable hosts"

👉 presque toujours :

* host mal formaté
* TLS parsing
* API handshake cassé

---

## 🧪 11. Debug rapide

```bash
nc -vz <ip> 8006
curl -k https://<ip>:8006/api2/json/version
```

---

## 🧰 12. Workflow style kubectl

```bash
cv4pve-cli config add lab ...
cv4pve-cli config use lab
cv4pve-cli get nodes
cv4pve-cli get vms
```

---

## 🔥 13. Alias utiles

```bash
alias pve='cv4pve-cli'
```

Puis :

```bash
pve get vms
pve get nodes
```

## 📸 14. Examples

```bash
pve get nodes -ojson | jq '.[] | .node'
```
> "labinfo"


```bash
pve get node services labinfo | grep pve
```
```
| active       | The Proxmox VE cluster filesystem            | pve-cluster       | pve-cluster       | running | enabled         |
| active       | Proxmox VE firewall                          | pve-firewall      | pve-firewall      | running | enabled         |
| active       | PVE Cluster HA Resource Manager Daemon       | pve-ha-crm        | pve-ha-crm        | running | enabled         |
| active       | PVE Local HA Resource Manager Daemon         | pve-ha-lrm        | pve-ha-lrm        | running | enabled         |
| active       | PVE API Daemon                               | pvedaemon         | pvedaemon         | running | enabled         |
| active       | Proxmox VE firewall logger                   | pvefw-logger      | pvefw-logger      | running | enabled         |
| active       | PVE API Proxy Server                         | pveproxy          | pveproxy          | running | enabled         |
| active       | Proxmox VE scheduler                         | pvescheduler      | pvescheduler      | running | enabled         |
| active       | PVE Status Daemon                            | pvestatd          | pvestatd          | running | enabled         |
```

```bash
pve get node disk lvm labinfo -ojson | jq .
```
```json
[
  {
    "key": "children",
    "value": "[{\"leaf\":0,\"name\":\"pve\",\"children\":[{\"free\":17171480576,\"name\":\"/dev/sda3\",\"size\":293022466048,\"leaf\":1}],\"free\":17171480576,\"lvcount\":23,\"size\":293022466048}]"
  },
  {
    "key": "leaf",
    "value": 0
  }
]
```

---

## 🚀 TL;DR

- 👉 CV4PVE-CLI = kubectl pour Proxmox
- 👉 API token = kube token
- 👉 context = kubeconfig
- 👉 VMs/CT = pods analogy


# :books: References

- [ ] [Manage Proxmox Like Kubernetes? This CLI Tool Makes It Possible](https://www.virtualizationhowto.com/2026/03/manage-proxmox-like-kubernetes-this-cli-tool-makes-it-possible/  )

---

## 🍏 Installation sur macOS

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

### :x: Méthode non recommandée (Homebrew)

Avec Homebrew :

```bash
brew tap corsinvest/cv4pve
brew install cv4pve-cli
```

---


