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
