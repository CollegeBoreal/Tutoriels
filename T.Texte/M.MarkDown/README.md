# MarkDown


## :scroll: Comment écrire vos fichiers README.md


Un **tableau récapitulatif (cheat sheet)** des références Markdown dans **GitHub** :

---

### 📘 Récapitulatif Markdown GitHub

| Fonction                    | Syntaxe                        | Exemple                                                                                                       | Résultat                                                                           |
| --------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Lien direct**             | `[texte](url)`                 | `[OpenAI](https://openai.com)`                                                                                | [OpenAI](https://openai.com)                                                       |
| **Lien par référence**      | `[texte][ref]`<br>`[ref]: url` | `[OpenAI][site]`<br>`[site]: https://openai.com`                                                              | [OpenAI][site]                                                                     |
| **Image directe**           | `![alt](url)`                  | `![Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)`                          | ![Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) |
| **Image par référence**     | `![alt][ref]`<br>`[ref]: url`  | `![Logo GitHub][logo]`<br>`[logo]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` | ![Logo GitHub][logo]                                                               |
| **Citation simple**         | `> texte`                      | `> Ceci est une citation.`                                                                                    | > Ceci est une citation.                                                           |
| **Citation imbriquée**      | `>> texte`                     | `>> Citation dans une autre.`                                                                                 | >> Citation dans une autre.                                                        |
| **Note de bas de page**     | `Texte[^1]`<br>`[^1]: note`    | `Markdown[^1]`<br>`[^1]: Génial !`                                                                            | Markdown[^1]                                                                       |
| **Référence issue/PR**      | `#numéro`                      | `#42`                                                                                                         | #42                                                                                |
| **Mention utilisateur**     | `@nom`                         | `@octocat`                                                                                                    | @octocat                                                                           |
| **Référence externe dépôt** | `OWNER/REPO#numéro`            | `torvalds/linux#1`                                                                                            | torvalds/linux#1                                                                   |


---

## ✅ Balises HTML supportées dans GitHub Markdown

### 1. Sections repliables

```html
<details>
  <summary>Texte visible</summary>
  Contenu repliable (Markdown ou HTML accepté)
</details>
```

* `<details>` : crée une zone repliable.
* `<summary>` : texte visible en permanence, cliquable pour ouvrir/fermer.
* Tu peux mettre **du Markdown à l’intérieur**.

---

### 2. Images

```html
<img src="URL" alt="texte alternatif" width="50%" height="50%">
```

* Permet de **contrôler la taille** (`width` et `height`).
* `alt` est le texte alternatif.

---

### 3. Liens (optionnel)

```html
<a href="URL" target="_blank">Texte du lien</a>
```

* `<a>` fonctionne, `target="_blank"` ouvre dans un nouvel onglet.

---

### 4. Formattage basique

| Balise         | Utilisation               |
| -------------- | ------------------------- |
| `<strong>`     | Texte en gras             |
| `<em>`         | Texte en italique         |
| `<u>`          | Texte souligné            |
| `<br>`         | Saut de ligne             |
| `<hr>`         | Ligne horizontale         |
| `<code>`       | Bloc de code inline       |
| `<pre>`        | Bloc de code multi-lignes |
| `<blockquote>` | Citation                  |

---

### 5. Listes HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<ol>
  <li>Premier</li>
  <li>Deuxième</li>
</ol>
```

---

### 6. Tableaux HTML

```html
<table>
  <tr>
    <th>Colonne 1</th>
    <th>Colonne 2</th>
  </tr>
  <tr>
    <td>Donnée 1</td>
    <td>Donnée 2</td>
  </tr>
</table>
```

# :books: Références

* [Basic formatting syntax][Basic formatting syntax]
* [Learning Markdown: Formatting Text without the Complexity][Learning Markdown: Formatting Text without the Complexity]

---

[Basic formatting syntax]: https://guides.github.com/features/mastering-markdown/
[Learning Markdown: Formatting Text without the Complexity]: https://www.linkedin.com/learning/learning-markdown/what-is-markdown
