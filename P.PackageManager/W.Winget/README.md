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

# 📚 References

[https://winstall.app](https://winstall.app)
