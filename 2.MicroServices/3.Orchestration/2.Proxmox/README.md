Ah — this explains exactly what’s happening. Let’s break it down carefully:

---

## 1️⃣ What happened

1. Your **Linux user `b300098957` already exists**, so `adduser` fails → harmless. ✅
2. Your script tries to assign permissions with:

```bash
pveum aclmod / -user b300098957@pam -role Administrator
```

…but Proxmox **doesn’t yet know any `b300098957@pam` user** in its database.

* In Proxmox, **a PAM user must exist in the Proxmox UI / database**, even if the Linux user exists.
* Linux user alone is not enough.

That’s why you got:

```
ACL update failed: user 'b300098957@pam' does not exist
```

---

## 2️⃣ Fix

You need **to create the Proxmox PAM user** before assigning ACLs.

### Step 1 — Create PAM user in Proxmox

```bash
pveum user add b300098957@pam --comment "Lab user"
```

* This registers the PAM user inside Proxmox
* Now Proxmox knows that `b300098957@pam` exists

---

### Step 2 — Assign ACL / role

```bash
pveum aclmod / -user b300098957@pam -role Administrator
```

✅ This will work now.

---

### Step 3 — Linux PAM authentication

Since the Linux user already exists, the user can **log in using `b300098957@pam` and the Linux password**.

---

## 3️⃣ Correct script order

For automation:

```bash
#!/bin/bash

PAMUSER=$1
PAMPASS=$2
PVEUSER=$3
PVECOMMENT=$4

# 1. Create Linux user if not exists
if ! id "$PAMUSER" &>/dev/null; then
    adduser --gecos "" --disabled-password "$PAMUSER"
    echo "$PAMUSER:$PAMPASS" | chpasswd
    echo "Linux user $PAMUSER created"
fi

# 2. Create Proxmox PAM user if not exists
if ! pveum user list | grep -q "^$PAMUSER@pam"; then
    pveum user add "$PAMUSER@pam" --comment "Lab user"
    echo "Proxmox PAM user $PAMUSER@pam created"
fi

# 3. Assign role
pveum aclmod / -user "$PAMUSER@pam" -role Administrator

# 4. Create PVE automation user
if ! pveum user list | grep -q "^$PVEUSER@pve"; then
    pveum user add "$PVEUSER@pve" --comment "$PVECOMMENT"
    pveum user token add "$PVEUSER@pve" automation --privsep 0
    echo "Proxmox PVE user $PVEUSER@pve and token created"
fi
```

---

### ✅ Key Takeaways

1. **Linux user exists ≠ PAM user exists**
2. **Always create Proxmox PAM user with `pveum user add ...@pam`** before assigning ACLs
3. `@pve` users are separate — only used for automation (API tokens)

---

If you want, I can make a **ready-to-run CSV version** of this script that will **create dozens of PAM + PVE users automatically**, with passwords, ACLs, and API tokens, all in the correct order.

Do you want me to do that?
