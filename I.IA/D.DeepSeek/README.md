
```
ollama run deepseek-coder
```
<details>

```lua
pulling manifest 
pulling d040cc185215: 100% ▕████████████████████████████████████████████████████████████████████████████████▏ 776 MB                         
pulling a3a0e9449cb6: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  13 KB                         
pulling 8893e08fa9f9: 100% ▕████████████████████████████████████████████████████████████████████████████████▏   59 B                         
pulling 8972a96b8ff1: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  297 B                         
pulling d55c9eb1669a: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  483 B                         
verifying sha256 digest 
writing manifest 
success
```

</details>


**DeepSeek Coder** est un modèle d’intelligence artificielle spécialisé dans la **programmation**.

---

## 🧠 Définition simple

C’est un **LLM (Large Language Model)** entraîné principalement sur :

* du code (Python, C/C++, Verilog, etc.)
* de la documentation technique
* des projets open-source

👉 Son but :

> **écrire, comprendre et corriger du code**

---

## ⚙️ Ce qu’il sait faire

### 💻 Génération de code

* écrire du code à partir d’une description
* ex:

  * Python
  * C++
  * VHDL / Verilog (très utile pour toi 👀)

---

### 🧪 Debug

* trouver des bugs
* expliquer des erreurs
* proposer des corrections

---

### 📚 Explication

* expliquer du code complexe
* décomposer des architectures (FPGA, SoC, etc.)

---

### 🔁 Complétion

* compléter automatiquement des fonctions
* suggérer des améliorations

---

## 🔥 Pourquoi il est intéressant

Comparé à des modèles généraux (comme **LLaMA** ou **Mistral**) :

👉 DeepSeek Coder est :

* **beaucoup meilleur en code**
* plus précis sur :

  * syntaxe
  * structures complexes
  * logique

---

## 💡 Exemple concret (dans le domaine FPGA)

Tu peux lui demander :

> “Write a pipelined FIR filter in Verilog optimized for DSP slices”

👉 Il peut générer :

* architecture pipeline
* gestion des registres
* optimisation pour FPGA

---

## ⚙️ Avec Ollama

Tu peux l’utiliser en local :

```bash id="f8q2fr"
ollama run deepseek-coder
```

👉 Et tu as un assistant code **offline**.

---

## ⚠️ Limites

* Moins puissant que les meilleurs modèles cloud
* Peut faire des erreurs (surtout sur designs complexes)
* Nécessite de bons prompts (très important)

---

## 🧠 Résumé

👉 DeepSeek Coder =
**un “ingénieur logiciel IA” spécialisé dans le code**

---

## 🚀 Important

C’est particulièrement utile pour :

* VHDL / Verilog
* scripts Vivado (TCL)
* architecture FPGA
* préparation ASIC

---

# :books: References

- [ ] [ollama run deepseek-coder](https://ollama.com/library/deepseek-coder)
