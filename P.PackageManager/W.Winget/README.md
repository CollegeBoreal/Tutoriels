# 🪟 W.Winget

👉 ✅ **Version simple qui marche :**

```bash
winget install GNU.Nano
```

 [\[winstall.app\]](https://winstall.app/apps/GNU.Nano)

***

## 🔥 Version propre (recommandée — exact match)

```bash
winget install -e --id GNU.Nano
```

👉 `-e` = exact (évite les prompts)

***

## 💡 Alternative (version plus récente de nano)

👉 Il existe aussi un port Windows plus à jour :

```bash
winget install -e --id okibcn.nano
```

 [\[winstall.app\]](https://winstall.app/apps/okibcn.nano)

✅ souvent meilleur choix en lab Windows

***

## ✅ Vérifier après install

```bash
nano --version
```

ou juste :

```bash
nano
```

***

## ⚠️ Piège fréquent

* `winget install nano` ❌ → peut échouer ou ambigu
* il faut **ID complet** ✅

👉 winget exige parfois l’identifiant exact du package [\[learn.microsoft.com\]](https://learn.microsoft.com/en-us/windows/package-manager/winget/install)

***

## 🎯 Résumé ultra court

```
✅ winget install -e --id GNU.Nano
✅ winget install -e --id okibcn.nano (meilleur)
```

---

## winstall.app

👉 **[winstall.app](https://winstall.app)** = un outil web super utile si tu utilises **winget** 👍  
(typiquement parfait pour toi en lab / cours)

***

### 🧠 C’est quoi (version simple)

👉 Winstall = **une interface web pour winget**

* winget = outil en ligne de commande
* winstall = interface graphique (GUI)

👉 En clair :

```
winget = CLI
winstall = interface + générateur de commandes
```

✅ Winstall ne remplace pas winget  
✅ Il te génère des commandes winget automatiquement

 [\[github.com\]](https://github.com/SplashtopInc/winstall)

***

# 🔥 À quoi ça sert concrètement

#### ✅ 1. Chercher des logiciels

Tu peux :

* chercher `nano`, `git`, `vscode`, etc.
* voir les apps dispo dans le repo officiel winget

👉 il utilise directement le dépôt officiel Microsoft [\[winstall.app\]](https://winstall.app/eli5)

***

#### ✅ 2. Créer un “pack” d’applications

Tu coches plusieurs apps :

```
✅ nano
✅ git
✅ vscode
✅ chrome
```

***

#### ✅ 3. Générer une commande automatiquement

👉 Winstall te donne :

```bash
winget install nano git vscode chrome
```

(ou version complète avec IDs)

👉 tu peux aussi télécharger :

* un `.bat`
* un script PowerShell [\[winstall.app\]](https://winstall.app/eli5)

***

#### ✅ 4. Installer tout d’un coup

Tu copies → tu colles → terminé ✅

👉 idéal pour :

* machines neuves
* lab étudiants
* VM Proxmox
* reinstallation rapide

***

#### ⚠️ Important à comprendre

👉 Winstall NE fait pas l’installation lui-même

```
Winstall = générateur
Winget = exécuteur
```

👉 Les apps viennent du repo winget (Microsoft), pas du site winstall directement [\[winstall.app\]](https://winstall.app/eli5)

---

## ⚙️ Installer winget

```
winget : The term 'winget' is not recognized
```

***

### 🧠 Pourquoi ça arrive

👉 **winget n’est pas installé** (ou pas disponible)

Contrairement à Windows 11 :

```
Windows Server 2022 ❌  → winget PAS installé par défaut
```

➡️ winget = composant appelé **App Installer**

***

### ✅ Solution rapide (copy-paste ready)

#### 👉 1. Installer winget

PowerShell (admin) :

##### 🔥 méthode officielle

```powershell
Invoke-WebRequest https://aka.ms/getwinget -OutFile winget.msixbundle
Add-AppxPackage .\winget.msixbundle
```

***

#### 👉 2. Vérifier

```powershell
winget --version
```

✅ si ça répond → OK

***

## 👉 3. Relancer ton install

```powershell
winget install -e --id okibcn.nano
winget install -e --id Git.Git
winget install -e --id Microsoft.VisualStudioCode
winget install -e --id Google.Chrome
```

***

#### ⚠️ Important (souvent oublié en lab)

#### 👉 1. Logoff / reopen shell

Parfois nécessaire :

```
Fermer PowerShell → rouvrir
```


# 📚 References

[https://winstall.app](https://winstall.app)
