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

# :books: Références

* [Basic formatting syntax][Basic formatting syntax]
* [Learning Markdown: Formatting Text without the Complexity][Learning Markdown: Formatting Text without the Complexity]

---

[Basic formatting syntax]: https://guides.github.com/features/mastering-markdown/
[Learning Markdown: Formatting Text without the Complexity]: https://www.linkedin.com/learning/learning-markdown/what-is-markdown
