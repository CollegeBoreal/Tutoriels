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


