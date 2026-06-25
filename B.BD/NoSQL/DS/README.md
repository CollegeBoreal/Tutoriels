# ✅ Document Store (DS) — définition

Un **Document Store** est un type de base de données **NoSQL** qui stocke les données sous forme de **documents** plutôt que dans des tables (comme SQL). [\[dremio.com\]](https://www.dremio.com/wiki/document-store/)

* Les données sont stockées en **JSON / XML / BSON** [\[scylladb.com\]](https://www.scylladb.com/glossary/document-store-database/)
* Chaque document contient **toutes les informations d’un objet**
* Structure **flexible (schema-less)** → chaque document peut être différent

***

# 📦 Concept clé

👉 1 document = 1 objet complet

Exemple simplifié :

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "roles": ["student", "admin"],
  "address": {
    "city": "Toronto",
    "zip": "M5V"
  }
}
```

✔ Pas besoin de tables multiples  
✔ Pas de JOIN

***

# 🔄 Comparaison rapide (SQL vs Document Store)

| SQL (relationnel) | Document Store             |
| ----------------- | -------------------------- |
| Tables / colonnes | Documents JSON             |
| Schéma fixe       | Schéma flexible            |
| JOIN nécessaires  | Données imbriquées         |
| Normalisation     | Donnée complète dans 1 doc |

➡️ En document store, un objet **n’est pas fragmenté** dans plusieurs tables [\[en.wikipedia.org\]](https://en.wikipedia.org/wiki/Document-oriented_database)

***

# 🚀 Avantages

* ✅ Très flexible (idéal données changeantes)
* ✅ Rapide pour lire/écrire
* ✅ Scale horizontal facilement
* ✅ Parfait pour apps modernes (API, microservices) [\[aws.amazon.com\]](https://aws.amazon.com/nosql/document/)

***

# 🧠 Cas d’usage

* CMS (blogs, contenu web)
* Applications web/mobile
* Catalogues produits
* IoT / analytics temps réel [\[aws.amazon.com\]](https://aws.amazon.com/nosql/document/)

***

# 🛠 Exemples populaires

* MongoDB
* CouchDB
* Azure Cosmos DB

***

✅ **Résumé ultra‑condensé (à donner aux étudiants)**

> Document Store = base NoSQL qui stocke des objets complets en JSON avec structure flexible, sans tables ni JOIN.

