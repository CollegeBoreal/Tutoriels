# 🧠 **IA (Intelligence Artificielle)**

## 🧠 1. Définition simple

**IA (Intelligence Artificielle)** = ensemble de techniques permettant à une machine ou un programme informatique de **simuler l’intelligence humaine**.

Cela signifie que l’IA peut :

* comprendre et traiter des données
* apprendre de l’expérience
* prendre des décisions ou faire des prédictions
* résoudre des problèmes complexes

---

## ⚙️ 2. Exemples concrets

* **LLM / ChatGPT / Ollama** : écrire du texte ou du code, répondre à des questions
* **Voitures autonomes** : détecter les obstacles et prendre des décisions
* **Reconnaissance d’images** : identifier des objets ou des visages
* **Robots industriels** : adapter leurs mouvements selon l’environnement

---

## 📚 3. Types d’IA

### 1. IA faible (ou spécialisée)

* Fait **une tâche précise**
* Ex : ChatGPT, AlphaFold, DeepSeek Coder

### 2. IA générale (AGI)

* Hypothétique : pourrait faire **toutes les tâches intellectuelles humaines**
* Pas encore réalisée

### 3. IA super-intelligente

* Hypothétique : dépasserait l’intelligence humaine dans tous les domaines

---

## 🔧 4. Comment ça fonctionne

L’IA moderne repose surtout sur **l’apprentissage automatique (machine learning)** et **les réseaux de neurones** :

1. On fournit des **données** (texte, images, signaux)
2. L’IA apprend des **modèles / patterns**
3. Elle peut ensuite **prédire ou générer** de nouvelles données

> Exemple pour FPGA :
> un LLM comme DeepSeek Coder apprend des milliers de designs VHDL et peut ensuite **écrire ou corriger ton code RTL automatiquement**

---

## 🤖 5. L’IA et les LLM

* Les **LLM (Large Language Models)** sont un type d’IA spécialisé dans le langage
* Ils peuvent :

  * comprendre le texte
  * générer du texte ou du code
  * expliquer des concepts
* Avec **Ollama**, tu peux exécuter ces LLM en local, donc l’IA tourne **sur ton ordinateur**

---

## 🧩 Résumé

* **IA = machines intelligentes**
* **LLM = IA spécialisée dans le langage**
* **Runtime = environnement pour exécuter l’IA**
* **Local models = IA qui tourne directement sur ton ordinateur, sans cloud**

---

## 🧠 Qu’est-ce qu’un LLM ?

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

### ⚙️ 1. Deux façons d’utiliser un LLM

#### ☁️ A. Modèles cloud

* tournent sur des serveurs distants
* ex : ChatGPT

##### ✅ Avantages

* très puissants
* faciles à utiliser

##### ❌ Inconvénients

* dépend d’internet
* données envoyées au serveur
* souvent payants

---

#### 💻 B. Modèles locaux

* tournent directement sur ton ordinateur
* via des outils comme [**Ollama**](O.Ollama)

---

### 🔧 2. Ollama (le rôle)

Ollama est :

> un **runtime + gestionnaire de modèles IA locaux**

👉 Il permet de :

* télécharger des modèles
* les exécuter localement
* exposer une API

---

### 🤖 3. Modèles locaux populaires

#### 💻 Code

* **[DeepSeek](D.DeepSeek) Coder**
* **Code Llama**

#### 🧠 Général

* **[Mistral](M.Mistral)**
* **LLaMA**

---

### ⚖️ 4. Comparaison rapide

| Critère         | Cloud   | Local (Ollama) |
| --------------- | ------- | -------------- |
| Performance     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐            |
| Confidentialité | ❌       | ✅              |
| Coût            | 💰      | 🆓             |
| Latence         | moyenne | rapide         |
| Setup           | facile  | technique      |

---

### 🧠 5. Comment ça fonctionne (simplifié)

```id="r6zdrf"
Utilisateur → Ollama → Modèle (DeepSeek, LLaMA…) → Réponse
```

---

### 🔥 6. Pourquoi c’est important

Les modèles locaux permettent :

* 🔒 contrôle total des données
* ⚙️ intégration dans des systèmes embarqués
* 🧪 expérimentation avancée

👉 Et surtout :

> une transition vers **l’IA sur matériel personnalisé** (edge, FPGA, ASIC 👀)

---

### 🧩 Résumé final

- 👉 LLM = cerveau IA
- 👉 Ollama = moteur pour les exécuter localement
- 👉 Modèles locaux = alternative privée et flexible au cloud
