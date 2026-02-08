The **classic XRDP reconnection trap**. Super common with **XFCE**.

Let’s get you back in **without reinstalling anything**.

---

## What’s happening (very likely)

You connected once → session didn’t close cleanly →
XRDP now thinks your session is still active → **reconnect = fail / black screen / instant disconnect**.

XFCE + XRDP does this *all the time*.

---

## Fastest recovery (works 90% of the time)

### 1️⃣ SSH into the Ubuntu box

From your Mac / host:

```bash
ssh ubuntu@10.7.237.5
```

(SSH still works even if RDP is broken)

---

### 2️⃣ Kill the stuck XFCE + XRDP sessions

Run **as the ubuntu user** (not sudo first):

```bash
pkill xfce4-session
pkill xrdp
```

Then as root:

```bash
sudo systemctl restart xrdp
```

---

### 3️⃣ Clean stale XRDP session files

This step is important for reconnections:

```bash
rm -rf ~/.cache/sessions
rm -rf ~/.xrdp
```

---

### 4️⃣ Ensure the session command is correct

```bash
cat ~/.xsession
```

Must contain exactly:

```
startxfce4
```

If not:

```bash
echo "startxfce4" > ~/.xsession
chmod +x ~/.xsession
```

---

### 5️⃣ Try RDP again

Open your RDP client and connect.

⏳ First reconnect may take **20–40 seconds** — wait it out.

---

## If you get a BLACK SCREEN

Do this once:

```bash
sudo nano /etc/xrdp/startwm.sh
```

At the **top**, add:

```bash
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
```

Make sure the end contains:

```bash
exec startxfce4
```

Then:

```bash
sudo systemctl restart xrdp
```

---

## Golden rules for XRDP + XFCE (important)

* ❌ Do NOT log into the VM locally and via RDP at the same time
* ❌ Do NOT suspend the VM while logged in via RDP
* ✅ Always **log out** inside XFCE before closing RDP
* ✅ Use **one RDP session at a time**

---

## If you want a rock-solid setup (optional)

XRDP works, but it’s… fragile.

### Better alternatives:

* **X2Go** (excellent with XFCE, reconnects flawlessly)
* **SSH + tmux + CLI** for admin
* **VNC + systemd service** if you need persistence

I can switch you to **X2Go in 3 commands** if you want.
