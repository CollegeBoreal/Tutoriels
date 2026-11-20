# ⌨️ Raccourcis clavier Zed Editor

| Action | Windows / Linux | macOS |
|----------|----------|----------|
| Palette de commandes | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Ouvrir rapidement un fichier | `Ctrl + P` | `Cmd + P` |
| Rechercher dans le projet | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Rechercher dans le fichier | `Ctrl + F` | `Cmd + F` |
| Aller à la définition | `F12` | `F12` |
| Aperçu de la définition | `Alt + F12` | `Option + F12` |
| Renommer un symbole | `F2` | `F2` |
| Ouvrir/Fermer le terminal | ``Ctrl + ` `` | ``Cmd + ` `` |
| Nouveau fichier | `Ctrl + N` | `Cmd + N` |
| Enregistrer | `Ctrl + S` | `Cmd + S` |
| Fermer l’onglet | `Ctrl + W` | `Cmd + W` |
| Diviser l’éditeur | `Ctrl + \` | `Cmd + \` |
| Formater le document | `Shift + Alt + F` | `Shift + Option + F` |
| Commenter/Décommenter une ligne | `Ctrl + /` | `Cmd + /` |

## Édition avancée

| Action | Windows / Linux | macOS |
|----------|----------|----------|
| Curseurs multiples | `Ctrl + Alt + ↑/↓` | `Cmd + Option + ↑/↓` |
| Dupliquer la ligne | `Shift + Alt + ↓` | `Shift + Option + ↓` |
| Déplacer la ligne | `Alt + ↑/↓` | `Option + ↑/↓` |
| Aller à une ligne | `Ctrl + G` | `Cmd + G` |
| Recherche de symbole | `Ctrl + R` | `Cmd + R` |

## Afficher tous les raccourcis

1. Ouvrir la palette de commandes :
   - `Ctrl + Shift + P`
   - `Cmd + Shift + P`

2. Rechercher :

```text
Open Default Keymap
```

ou

```text
Open Key Bindings
```
---

# 📝 Utiliser Vim Mode dans Zed

## Activation

### Palette de commandes

```text
Ctrl + Shift + P
```

Rechercher :

```text
Vim: Toggle Vim Mode
```

### Fichier settings.json

```json
{
  "vim_mode": true
}
```

---

# Modes Vim

## Mode normal

Navigation et commandes.

| Action | Touche |
|----------|---------|
| Gauche | `h` |
| Bas | `j` |
| Haut | `k` |
| Droite | `l` |
| Début de ligne | `0` |
| Fin de ligne | `$` |
| Mot suivant | `w` |
| Mot précédent | `b` |
| Début du fichier | `gg` |
| Fin du fichier | `G` |

---

## Mode insertion

| Action | Touche |
|----------|---------|
| Insérer avant le curseur | `i` |
| Insérer après le curseur | `a` |
| Nouvelle ligne dessous | `o` |
| Nouvelle ligne dessus | `O` |

Retour au mode normal :

```text
Esc
```

---

# Édition

| Action | Commande |
|----------|---------|
| Supprimer caractère | `x` |
| Supprimer mot | `dw` |
| Supprimer ligne | `dd` |
| Copier ligne | `yy` |
| Coller | `p` |
| Annuler | `u` |
| Refaire | `Ctrl+r` |

---

# Sélection

| Action | Commande |
|----------|---------|
| Sélection caractère | `v` |
| Sélection ligne | `V` |
| Sélection bloc | `Ctrl+v` |

---

# Recherche

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

# Commandes très utiles

## Modifier un mot

```vim
ciw
```

Avant :

```ts
const studentName = "Bob";
```

Après :

```ts
const userName = "Bob";
```

---

## Supprimer l'intérieur des parenthèses

```vim
di(
```

---

## Modifier l'intérieur des guillemets

```vim
ci"
```

---

## Effacer jusqu'à la fin de ligne

```vim
D
```

---

## Joindre deux lignes

```vim
J
```

---

# Les 10 commandes à mémoriser

```vim
i      insertion
Esc    mode normal
dd     supprimer ligne
yy     copier ligne
p      coller
u      annuler
w      mot suivant
gg     début fichier
G      fin fichier
ciw    modifier un mot
```

## Le « minimum efficace » pour un développeur

```vim
i
Esc
dd
yy
p
u
/
gg
G
ciw
```

Ces quelques commandes suffisent pour obtenir environ 80 % des gains de productivité de Vim dans Zed.
