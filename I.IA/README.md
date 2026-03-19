# 🧠 1. Qu’est-ce qu’un LLM ?

Un **LLM (Large Language Model)** est un modèle d’IA capable de :

* comprendre du texte
* générer du texte
* écrire du code
* répondre à des questions

👉 Exemples :

* **GPT-4**
* **LLaMA**
* **DeepSeek Coder**

---

# ⚙️ 2. Deux façons d’utiliser un LLM

## ☁️ A. Modèles cloud

* tournent sur des serveurs distants
* ex : ChatGPT

### ✅ Avantages

* très puissants
* faciles à utiliser

### ❌ Inconvénients

* dépend d’internet
* données envoyées au serveur
* souvent payants

---

## 💻 B. Modèles locaux

* tournent directement sur ton ordinateur
* via des outils comme [**Ollama**](O.Ollama)

---

# 🔧 3. Ollama (le rôle)

Ollama est :

> un **runtime + gestionnaire de modèles IA locaux**

👉 Il permet de :

* télécharger des modèles
* les exécuter localement
* exposer une API

---

# 🤖 4. Modèles locaux populaires

### 💻 Code

* **[DeepSeek](D.DeepSeek) Coder**
* **Code Llama**

### 🧠 Général

* **[Mistral](M.Mistral)**
* **LLaMA**

---

# ⚖️ 5. Comparaison rapide

| Critère         | Cloud   | Local (Ollama) |
| --------------- | ------- | -------------- |
| Performance     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐            |
| Confidentialité | ❌       | ✅              |
| Coût            | 💰      | 🆓             |
| Latence         | moyenne | rapide         |
| Setup           | facile  | technique      |

---

# 🧠 6. Comment ça fonctionne (simplifié)

```id="r6zdrf"
Utilisateur → Ollama → Modèle (DeepSeek, LLaMA…) → Réponse
```

---

# 🔥 7. Pourquoi c’est important

Les modèles locaux permettent :

* 🔒 contrôle total des données
* ⚙️ intégration dans des systèmes embarqués
* 🧪 expérimentation avancée

👉 Et surtout :

> une transition vers **l’IA sur matériel personnalisé** (edge, FPGA, ASIC 👀)

---

# 🧩 Résumé final

- 👉 LLM = cerveau IA
- 👉 Ollama = moteur pour les exécuter localement
- 👉 Modèles locaux = alternative privée et flexible au cloud
