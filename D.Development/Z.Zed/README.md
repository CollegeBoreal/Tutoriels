# ⌨️ Légende des touches

| Symbole | Touche |
|----------|----------|
| ⌃ | Ctrl |
| ⌘ | Cmd |
| ⇧ | Shift |
| ⌥ | Option / Alt |
| ⏎ | Entrée |
| ⎋ | Esc |
| ↑ ↓ ← → | Flèches |
| ⌫ | Retour arrière |
| ⌦ | Supprimer |

---

# 🚀 Raccourcis Zed Editor

| Action | Windows / Linux | macOS |
|----------|----------|----------|
| Palette de commandes | ⌃ + ⇧ + P | ⌘ + ⇧ + P |
| Ouvrir un fichier | ⌃ + P | ⌘ + P |
| Rechercher dans le projet | ⌃ + ⇧ + F | ⌘ + ⇧ + F |
| Rechercher dans le fichier | ⌃ + F | ⌘ + F |
| Aller à la définition | F12 | F12 |
| Aperçu de la définition | Alt + F12 | ⌥ + F12 |
| Renommer un symbole | F2 | F2 |
| Terminal intégré | ⌃ + ` | ⌘ + ` |
| Nouveau fichier | ⌃ + N | ⌘ + N |
| Enregistrer | ⌃ + S | ⌘ + S |
| Fermer l'onglet | ⌃ + W | ⌘ + W |
| Diviser l'éditeur | ⌃ + \ | ⌘ + \ |
| Formater le document | ⇧ + Alt + F | ⇧ + ⌥ + F |
| Commenter une ligne | ⌃ + / | ⌘ + / |

---

# 🎯 Édition avancée

| Action | Windows / Linux | macOS |
|----------|----------|----------|
| Curseurs multiples | ⌃ + Alt + ↑/↓ | ⌘ + ⌥ + ↑/↓ |
| Dupliquer la ligne | ⇧ + Alt + ↓ | ⇧ + ⌥ + ↓ |
| Déplacer la ligne | Alt + ↑/↓ | ⌥ + ↑/↓ |
| Aller à une ligne | ⌃ + G | ⌘ + G |
| Recherche de symbole | ⌃ + R | ⌘ + R |

---

# 📝 Vim Mode dans Zed

## Activation

### Palette de commandes

**Windows/Linux**

```text
⌃ + ⇧ + P
```

**macOS**

```text
⌘ + ⇧ + P
```

Puis :

```text
workspace: toggle vim Mode
```

---

## Ou via settings.json

```json
{
  "vim_mode": true
}
```

---

# 🚶 Navigation

| Action | Touche |
|----------|----------|
| Gauche | `h` ⬅️ |
| Bas | `j` ⬇️ |
| Haut | `k` ⬆️ |
| Droite | `l` ➡️ |
| Mot suivant | `w` 🚶 |
| Mot précédent | `b` 🔙 |
| Début de ligne | `0` 🏁 |
| Fin de ligne | `$` 🏁 |
| Début du fichier | `gg` ⬆️ |
| Fin du fichier | `G` ⬇️ |

---

# ✍️ Mode insertion

| Action | Commande |
|----------|----------|
| Insérer avant le curseur | `i` |
| Insérer après le curseur | `a` |
| Nouvelle ligne dessous | `o` |
| Nouvelle ligne dessus | `O` |
| Retour au mode normal | ⎋ |

---

# 🛠️ Édition

| Action | Commande |
|----------|----------|
| Supprimer caractère | `x` ❌ |
| Supprimer mot | `dw` 🗑️ |
| Supprimer ligne | `dd` 🗑️ |
| Copier ligne | `yy` 📋 |
| Coller | `p` 📥 |
| Annuler | `u` ↩️ |
| Refaire | ⌃ + r ↪️ |

---

# 🎨 Sélection

| Action | Commande |
|----------|----------|
| Sélection caractère | `v` |
| Sélection ligne | `V` |
| Sélection bloc | ⌃ + v |

---

# 🔍 Recherche

Rechercher :

```vim
/angular
```

Résultat suivant :

```vim
n
```

Résultat précédent :

```vim
N
```

---

# ⚡ Commandes Vim les plus puissantes

## Modifier un mot

```vim
ciw
```

✅ Supprime le mot sous le curseur et passe en mode insertion.

---

## Supprimer le contenu entre parenthèses

```vim
di(
```

---

## Modifier le contenu entre guillemets

```vim
ci"
```

---

## Supprimer jusqu'à la fin de ligne

```vim
D
```

---

## Joindre deux lignes

```vim
J
```

---

# 🧠 Le minimum à retenir

```vim
i      ✍️ Insérer
⎋      🚪 Quitter l'insertion
dd     🗑️ Supprimer ligne
yy     📋 Copier ligne
p      📥 Coller
u      ↩️ Annuler
w      🚶 Mot suivant
gg     ⬆️ Début fichier
G      ⬇️ Fin fichier
ciw    ✏️ Modifier mot
/      🔍 Rechercher
```

## 💡 Astuce

Si vous débutez avec Vim dans Zed, apprenez seulement :

```vim
i
⎋
dd
yy
p
u
/
w
gg
G
ciw
```

Ces 10 commandes vous donneront déjà environ **80 % de la productivité de Vim** pour coder en Angular, TypeScript, JavaScript, C#, Python ou Bash.

---

# 🚀 Installer Zed Editor

## 🪟 Windows

### Option 1 : Installation via Winget (recommandé)

Ouvrir PowerShell :

```powershell
winget install --id ZedIndustries.Zed
```

Vérifier l'installation :

```powershell
zed --version
```

---

### Option 2 : Téléchargement manuel

1. Aller sur :
   - https://zed.dev/download

2. Télécharger :
   - **Windows Installer (.exe)**

3. Exécuter l'installateur.

---

## 🍎 macOS

### Téléchargement manuel

```text
https://zed.dev/download
```

Télécharger :

```text
Zed.dmg
```

Puis :

1. Ouvrir le fichier `.dmg`
2. Glisser **Zed** dans **Applications**
3. Lancer Zed

---

### Via Homebrew

```bash
brew install --cask zed
```

---

## 🐧 Linux

### Téléchargement direct

```bash
curl -f https://zed.dev/install.sh | sh
```

Redémarrer le terminal puis vérifier :

```bash
zed --version
```

---

## 🔧 Installer comme éditeur Git par défaut

```bash
git config --global core.editor "zed --wait"
```

Vérifier :

```bash
git config --global core.editor
```

Résultat :

```text
zed --wait
```

---

## 🧠 Extensions et langages

Contrairement à VS Code, Zed inclut déjà plusieurs fonctionnalités :

✅ TypeScript  
✅ JavaScript  
✅ JSON  
✅ Markdown  
✅ HTML  
✅ CSS  
✅ Git  
✅ LSP (Language Server Protocol)  
✅ Copilot intégré  
✅ Vim Mode  

---

## ⚡ Installation recommandée pour INF1084 / INF1085

Après l'installation :

1. Activer Vim Mode :

```json
{
  "vim_mode": true
}
```

2. Installer Node.js :

```bash
node --version
npm --version
```

3. Ouvrir votre projet :

```bash
zed .
```

ou

```bash
zed mon-projet-angular
```

---

## ⌨️ Commandes utiles

| Action | Windows/Linux | macOS |
|----------|----------|----------|
| Palette de commandes | ⌃ + ⇧ + P | ⌘ + ⇧ + P |
| Ouvrir un fichier | ⌃ + P | ⌘ + P |
| Explorateur de fichiers | ⌃ + B | ⌘ + B |
| Terminal intégré | ⌃ + ` | ⌘ + ` |
| Rechercher | ⌃ + F | ⌘ + F |
| Enregistrer | ⌃ + S | ⌘ + S |

---

## ✅ Vérification

Dans un terminal :

```bash
zed .
```

Si votre projet s'ouvre dans Zed, l'installation est réussie.
