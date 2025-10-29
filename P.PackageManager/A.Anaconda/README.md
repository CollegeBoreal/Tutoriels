# 🐍 **Tutoriel Conda — Gestion d’environnements Python**

Comprendre et utiliser efficacement **Miniforge**, **Anaconda**, ou **Miniconda**.

## 🔍 1. Qu’est-ce que Conda ?

**Conda** est un **gestionnaire d’environnements** et un **gestionnaire de paquets**.
Il permet de :

* créer des **environnements isolés** pour différents projets (versions Python, dépendances, etc.) ;
* installer, mettre à jour et supprimer des **packages** (bibliothèques) de manière simple ;
* fonctionner avec **Python**, **R**, **C**, etc.

> 👉 Exemple d’implémentations :
>
> * **Anaconda** → complet (scientifique, ~3 Go)
> * **Miniconda** → léger (~400 Mo)
> * **Miniforge** → version communautaire optimisée (ARM, Apple Silicon, etc.)

---

## ⚙️ 2. Installation avec un gestionnaire de paquets

### 🪟 **Windows — avec Chocolatey**

Ouvre **PowerShell en administrateur**, puis exécute :

```powershell
choco install miniforge
```

➡️ Cela installe **Miniforge3** (version communautaire et légère de Conda).
Ensuite, vérifie l’installation :

```powershell
conda --version
```

> 💡 Si la commande n’est pas reconnue, ferme et rouvre PowerShell (ou exécute `refreshenv`).

---

### 🍎 **macOS — avec Homebrew**

Sur macOS (Intel ou Apple Silicon), exécute :

```bash
brew install miniforge
```

Puis ajoute Conda à ton PATH si ce n’est pas fait automatiquement :

```bash
echo 'source $(brew --prefix)/Caskroom/miniforge/base/etc/profile.d/conda.sh' >> ~/.zshrc
source ~/.zshrc
```

Vérifie l’installation :

```bash
conda info
```
<details>

```lua

     active environment : 
            shell level : 0
       user config file : /Users/me/.condarc
 populated config files : /opt/homebrew/Caskroom/miniforge/base/.condarc
                          /Users/me/.condarc
          conda version : 25.9.1
    conda-build version : not installed
         python version : 3.12.11.final.0
                 solver : libmamba (default)
       virtual packages : __archspec=1=m2
                          __conda=25.9.1=0
                          __osx=15.6.1=0
                          __unix=0=0
       base environment : /opt/homebrew/Caskroom/miniforge/base  (writable)
      conda av data dir : /opt/homebrew/Caskroom/miniforge/base/etc/conda
  conda av metadata url : None
           channel URLs : https://conda.anaconda.org/conda-forge/osx-arm64
                          https://conda.anaconda.org/conda-forge/noarch
          package cache : /opt/homebrew/Caskroom/miniforge/base/pkgs
                          /Users/me/.conda/pkgs
       envs directories : /opt/homebrew/Caskroom/miniforge/base/envs
                          /Users/me/.conda/envs
               platform : osx-arm64
             user-agent : conda/25.9.1 requests/2.32.4 CPython/3.12.11 Darwin/24.6.0 OSX/15.6.1 solver/libmamba conda-libmamba-solver/25.4.0 libmambapy/2.1.1
                UID:GID : 502:20
             netrc file : None
           offline mode : False
```
   
</details>

> 💡 Pour les Macs récents (M1/M2/M3), Homebrew installe automatiquement la bonne architecture (ARM64).

---

### 🐧 **Linux (Debian / Ubuntu) — avec APT**

Sur Debian ou Ubuntu, ajoute le dépôt **conda-forge** via le script officiel :

```bash
sudo apt update
sudo apt install wget
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
bash Miniforge3-Linux-x86_64.sh
```

➡️ Suis les instructions à l’écran (appuie sur `ENTER` plusieurs fois, puis “yes”).
Enfin, active Conda :

```bash
source ~/miniforge3/bin/activate
```

Vérifie :

```bash
conda --version
```

> 💡 Il n’existe pas encore de paquet `.deb` officiel dans les dépôts APT, donc on télécharge directement depuis conda-forge.
> Pour un usage automatisé, tu peux wrapper cette commande dans un script Bash d’installation.

---

### ⚖️ **Résumé rapide**

| OS                 | Gestionnaire             | Commande                          |
| ------------------ | ------------------------ | --------------------------------- |
| 🪟 Windows         | Chocolatey               | `choco install miniforge`         |
| 🍎 macOS           | Homebrew                 | `brew install miniforge`          |
| 🐧 Debian / Ubuntu | APT (script conda-forge) | `bash Miniforge3-Linux-x86_64.sh` |

### ⚙️ 2b. Autres Installations

### 🔸 macOS / Linux

```bash
# Exemple Miniforge (recommandé)
curl -LO https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh
bash Miniforge3-MacOSX-arm64.sh
```

### 🔸 Windows

1. Télécharge [Miniforge pour Windows](https://github.com/conda-forge/miniforge/releases/latest).
2. Installe et **coche “Add Miniforge to PATH”**.
3. Ouvre **PowerShell** et tape :

   ```powershell
   conda --version
   ```

---

## 🧱 3. Commandes de base

| Commande             | Description                 |
| -------------------- | --------------------------- |
| `conda info`         | Infos générales sur conda   |
| `conda list`         | Liste des paquets installés |
| `conda update conda` | Met à jour conda            |
| `conda update --all` | Met à jour tous les paquets |

---

## 🌱 4. Gérer les environnements

### ➕ Créer un environnement

```bash
conda create --name mon_env python=3.11
```

> 💡 Chaque environnement a son propre Python et ses paquets.

### 🔄 Activer / désactiver

```bash
conda activate mon_env
conda deactivate
```

### ❌ Supprimer

```bash
conda remove --name mon_env --all
```

### 📋 Lister

```bash
conda env list
# ou
conda info --envs
```

---

## 📦 5. Gérer les paquets

### ➕ Installer un package

```bash
conda install numpy
```

### 🔄 Mettre à jour

```bash
conda update numpy
```

### ❌ Supprimer

```bash
conda remove numpy
```

### 🔍 Rechercher un package

```bash
conda search pandas
```

---

## 🔁 6. Gérer plusieurs canaux (channels)

Les **canaux** sont les dépôts d’où Conda télécharge les paquets.

| Canal         | Description                 |
| ------------- | --------------------------- |
| `defaults`    | Officiel Anaconda           |
| `conda-forge` | Communautaire, plus à jour  |
| `bioconda`    | Spécialisé bio-informatique |

👉 Exemple :

```bash
conda install -c conda-forge jupyterlab
```

---

## 🧰 7. Exporter / Reproduire un environnement

### Exporter la configuration

```bash
conda env export > environment.yml
```

### Recréer à l’identique

```bash
conda env create -f environment.yml
```

---

## 🧑‍💻 8. Exemple pratique — Créer un environnement Jupyter

```bash
conda create -n jupyter_env python=3.11 jupyterlab numpy pandas matplotlib
conda activate jupyter_env
jupyter lab
```

Tu obtiens un **JupyterLab prêt à l’emploi** 🎉

---

## 🧩 9. Utiliser conda dans VS Code ou Jupyter

* VS Code détecte automatiquement tes environnements Conda.
* Dans JupyterLab, tu peux ajouter un **kernel** :

```bash
python -m ipykernel install --user --name jupyter_env --display-name "Python (jupyter_env)"
```

---

## 🧹 10. Nettoyage et maintenance

```bash
conda clean --all
```

Supprime les caches et fichiers inutiles (utile si tu manques d’espace disque).

---

## 💡 Bonus : Différence entre conda et pip

| Fonction             | conda                        | pip                 |
| -------------------- | ---------------------------- | ------------------- |
| Gère Python lui-même | ✅ Oui                        | ❌ Non               |
| Gère des libs C/C++  | ✅ Oui                        | ❌ Non               |
| Multi-langages       | ✅ Oui                        | ❌ Non               |
| Sources              | Paquets binaires précompilés | Packages Python pur |
| Compatibilité        | Très stable                  | Parfois conflits    |

> 📌 **Astuce** : Utilise `conda install` autant que possible, puis `pip install` pour les paquets non disponibles sur Conda.
