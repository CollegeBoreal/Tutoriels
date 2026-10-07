# ⚛️ Notation de Dirac : Bra et Ket

## 🎯 Objectif

À la fin de cette leçon, vous serez capable de :

- Comprendre la notation de Dirac
- Identifier un **bra**
- Identifier un **ket**
- Lire correctement des expressions quantiques
- Comprendre les produits scalaires et les produits extérieurs

---

# 📖 Introduction

En mécanique quantique, les états d'un système sont souvent représentés à l'aide de la **notation de Dirac**, aussi appelée :

```text
Notation bra-ket
```

Cette notation a été introduite par le physicien :

```text
Paul Dirac
```

---

# 🔹 Le Ket

Un état quantique s'écrit généralement :

```text
|ψ⟩
```

Cela se prononce :

```text
ket psi
```

Exemples :

```text
|0⟩
|1⟩
|ψ⟩
|ϕ⟩
```

Lecture :

```text
ket zéro
ket un
ket psi
ket phi
```

---

# 🔹 Le Bra

Le dual d'un ket s'écrit :

```text
⟨ψ|
```

Cela se prononce :

```text
bra psi
```

Exemples :

```text
⟨0|
⟨1|
⟨ψ|
⟨ϕ|
```

Lecture :

```text
bra zéro
bra un
bra psi
bra phi
```

---

# ❓ Pourquoi "Bra" et "Ket" ?

Le mot anglais :

```text
bracket
```

a été séparé en :

```text
bra
ket
```

Ainsi :

```text
⟨ψ|ψ⟩
```

forme un :

```text
bracket
```

---

# 🔹 Produit scalaire

L'expression :

```text
⟨ϕ|ψ⟩
```

se prononce :

```text
bra phi ket psi
```

ou plus formellement :

```text
produit scalaire de phi et psi
```

---

## Exemple

```text
⟨0|1⟩ = 0
```

Lecture :

```text
bra zéro ket un égale zéro
```

Les états sont orthogonaux.

---

# 🔹 Produit extérieur

Une autre expression fréquente est :

```text
|ψ⟩⟨ϕ|
```

Lecture :

```text
ket psi bra phi
```

Cette expression représente un opérateur.

---

# 📚 Résumé des symboles

| Symbole | Nom | Lecture |
|----------|----------|----------|
| \|ψ⟩ | Ket | ket psi |
| ⟨ψ\| | Bra | bra psi |
| ⟨ϕ\|ψ⟩ | Produit scalaire | bra phi ket psi |
| \|ψ⟩⟨ϕ\| | Produit extérieur | ket psi bra phi |

---

# ⚠️ Attention

Le symbole :

```text
<
```

se lit normalement :

```text
plus petit que
```

ou

```text
inférieur à
```

en mathématiques classiques.

Cependant, dans la notation de Dirac :

```text
⟨ψ|
```

on ne dit jamais :

```text
inférieur à psi
```

On dit :

```text
bra psi
```

car le symbole fait partie de la notation quantique.

---

# 🧪 Exemples

## Exemple 1

```text
|ψ⟩
```

Lecture :

```text
ket psi
```

---

## Exemple 2

```text
⟨ψ|
```

Lecture :

```text
bra psi
```

---

## Exemple 3

```text
⟨ψ|ψ⟩
```

Lecture :

```text
bra psi ket psi
```

---

## Exemple 4

```text
|0⟩⟨1|
```

Lecture :

```text
ket zéro bra un
```

---

# 🏆 Défi

Lire correctement les expressions suivantes :

```text
⟨0|0⟩
```

```text
⟨1|0⟩
```

```text
|ψ⟩⟨ϕ|
```

```text
⟨ψ|A|ψ⟩
```

---

# ✅ Résumé

```text
|ψ⟩      → ket psi
⟨ψ|      → bra psi
⟨ϕ|ψ⟩    → bra phi ket psi
|ψ⟩⟨ϕ|   → ket psi bra phi
```

La notation de Dirac est un langage compact utilisé en mécanique quantique pour représenter :

- Les états quantiques
- Les produits scalaires
- Les opérateurs
- Les mesures quantiques
