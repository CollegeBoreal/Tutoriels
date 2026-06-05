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

***

💬 Si tu veux (vu ton contexte lab étudiants) :
👉 je peux te faire un **script winget pour installer nano + git + vscode en 1 shot** 👍
