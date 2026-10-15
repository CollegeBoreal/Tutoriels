# 🔄 Restaurer la branche `main` à partir d'une étiquette Git

## 🎯 Situation

Un étudiant a utilisé :

```bash
git push --force
```

sur la branche :

```text
main
```

L'historique contenant son travail a donc été remplacé sur le dépôt distant.

Heureusement, une sauvegarde avait été créée avec l'étiquette :

```text
v1.2
```

L'objectif est de restaurer `main` exactement à l'état enregistré dans `v1.2`.

---

# 1️⃣ Récupérer les dernières références

```bash
git fetch --all --tags
```

---

# 2️⃣ Vérifier l'étiquette `v1.1`

```bash
git show v1.1
```

On peut également afficher son commit :

```bash
git rev-parse v1.1
```

---

# 3️⃣ Se placer sur la branche `main`

```bash
git switch main
```

---

# 4️⃣ Restaurer `main` à partir de `v1.1`

```bash
git reset --hard v1.1
```

La branche locale `main` pointe maintenant vers le même commit que `v1.1`.

```text
                 v1.1
                   │
                   ▼
A ─── B ─── C ─── D
                   ▲
                   │
                  main
```

---

# 5️⃣ Vérifier la restauration

```bash
git log --oneline --decorate -10
```

On devrait obtenir quelque chose de semblable à :

```text
abc1234 (HEAD -> main, tag: v1.1)
```

On peut également vérifier les différences avec la branche distante :

```bash
git diff origin/main v1.1
```

---

# 6️⃣ Restaurer la branche distante

Pour replacer `main` sur le serveur :

```bash
git push --force-with-lease origin main
```

`--force-with-lease` est préférable à :

```bash
git push --force origin main
```

car il ajoute une vérification avant de remplacer la référence distante.

---

# ✅ Commandes complètes

```bash
git fetch --all --tags

git switch main

git reset --hard v1.1

git log --oneline --decorate -10

git push --force-with-lease origin main
```

---

# ⚠️ Ne pas supprimer l'étiquette

Conserver :

```text
v1.1
```

comme point de sauvegarde.

Après la restauration :

```text
                 v1.1
                   │
                   ▼
A ─── B ─── C ─── D
                   ▲
                   │
                  main
```

L'étiquette `v1.1` demeure donc disponible en cas de nouveau problème.

---

# 🛡️ Bonne pratique

Avant une évaluation ou une modification importante, créer une étiquette de sauvegarde :

```bash
git tag v1.3
```

Puis la pousser sur le dépôt distant :

```bash
git push origin v1.3
```

Afficher les étiquettes disponibles :

```bash
git tag
```

Vérifier un point de sauvegarde :

```bash
git show v1.3
```

Ainsi, une étiquette peut servir de point de récupération avant une opération qui modifie l'historique Git.
