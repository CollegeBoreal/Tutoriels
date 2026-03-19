# ollama 🦙

**Ollama** est un outil qui permet d’exécuter des modèles d’intelligence artificielle (LLM) **localement sur ton ordinateur**, sans passer par des serveurs distants.

---

## 🧠 À quoi sert Ollama ?

Normalement :

* Tu utilises ChatGPT → le modèle tourne sur des serveurs dans le cloud

Avec Ollama :

* Tu télécharges un modèle → il tourne **directement sur ton PC ou ton Mac**

👉 C’est donc un **gestionnaire + moteur d’exécution de modèles IA locaux**

---

## ⚙️ Ce que tu peux faire avec

Avec Ollama, tu peux :

* Utiliser des modèles comme :

  * **LLaMA**
  * **Mistral**
  * **Code Llama**
* Discuter avec eux (comme ChatGPT)
* Les intégrer dans tes propres applications (API locale)
* Travailler **hors ligne**

---

## 💻 Exemple simple

Après installation :

```bash
ollama run llama3
```

Et tu peux directement discuter avec le modèle en local.

---

## ✅ Avantages

* 🔒 Confidentialité (rien n’est envoyé sur Internet)
* ⚡ Rapide (pas de latence réseau)
* 💰 Gratuit après installation
* 🧪 Idéal pour expérimenter

---

## ❌ Inconvénients

* Besoin d’un ordinateur assez puissant (RAM/GPU)
* Modèles souvent moins performants que ceux du cloud
* Configuration parfois technique

---

## 🧠 L’idée générale

Tu peux voir Ollama comme :

* un **“Linux des modèles IA”**
* ou un **runtime** pour exécuter des modèles localement

---

## 🔥 Pourquoi c’est intéressant

Ollama s’inscrit dans une tendance vers :

* une IA **décentralisée**
* des modèles qui tournent sur :

  * ordinateurs personnels
  * systèmes embarqués
  * (et plus tard) des **puces spécialisées** 👀

---

## ✅ **Ollama comme Gestionnaire de Modèles**

### 1. **Téléchargement & Installation**
```bash
ollama pull mistral       # Télécharge et installe
ollama pull llama3        # Un autre modèle
ollama pull codellama     # Encore un autre
ollama pull mixtral       # Et un autre...
```
Comme un `apt-get` ou `brew` mais pour les modèles IA.

### 2. **Catalogage & Inventaire**
```bash
ollama list               # Liste tous les modèles installés
ollama show mistral       # Affiche les détails d'un modèle
ollama ps                 # Montre les modèles actuellement chargés
```

### 3. **Gestion des versions**
- Différentes versions (mistral:7b, mistral:7b-instruct, etc.)
- Différentes quantifications (q4, q5, q8)
- Mise à jour des modèles

### 4. **Exécution contrôlée**
```bash
ollama run mistral        # Lance un modèle
ollama stop mistral       # Arrête proprement
ollama run codellama      # Bascule vers un autre modèle
```

### 5. **Gestion des ressources**
- Allocation mémoire GPU
- Nettoyage automatique après inactivité
- Isolation des instances

### 📊 **Comparaison avec d'autres gestionnaires**

| Gestionnaire | Gère                  | Analogie                       |
|--------------|-----------------------|--------------------------------|
| **Ollama**   | Modèles IA            | ✅ **Gestionnaire de modèles** |
| Docker       | Conteneurs            | Gestionnaire de conteneurs     |
| Homebrew     | Paquets logiciels     | Gestionnaire de paquets        |
| Conda        | Environnements Python | Gestionnaire d'environnements  |
| NPM          | Paquets Node.js       | Gestionnaire de paquets        |

### 🎯 **Fonctionnalités clés d'un gestionnaire**

#### Ce qu'Ollama fait bien :
- **Abstraction** : Cache la complexité des fichiers GGUF, blobs, etc.
- **Standardisation** : Interface unifiée pour tous les modèles
- **Portabilité** : Mêmes commandes pour Mistral, Llama, Gemma, etc.
- **Cycle de vie** : Pull → List → Run → Stop → Remove
- **Isolation** : Chaque modèle dans son propre environnement d'exécution

#### Exemple de workflow complet :
```bash
# Comme un vrai gestionnaire
ollama pull llama3:8b           # Install
ollama pull mistral:7b          # Install another
ollama list                     # Inventory
ollama run llama3:8b            # Use
ollama ps                        # Check running
ollama stop llama3:8b           # Stop
ollama rm mistral:7b             # Uninstall
```

### 🔄 **Architecture de gestionnaire**

```
Ollama (Model Manager)
├── Registry (ollama.com/library)
├── Local storage (~/.ollama/models/)
├── Runtime (GPU/CPU scheduler)
├── Process manager (ollama ps/stop)
└── CLI (pull, run, list, rm, etc.)
```

### 💡 **Terminologie appropriée**

On pourrait qualifier Ollama de :
- **Gestionnaire de modèles IA** (Model Manager)
- **Orchestrateur de modèles** (Model Orchestrator)
- **Runtime de modèles** (Model Runtime)
- **CLI de modèles** (Model CLI)

Mais oui, **gestionnaire de modèles** est tout à fait approprié ! Il fait pour les modèles IA ce que Docker fait pour les conteneurs ou Homebrew pour les logiciels.

## :o: Installer `ollama` :llama:

```bash
brew install ollama
```

<details>

```lua
==> Auto-updating Homebrew...
Adjust how often this is run with `$HOMEBREW_AUTO_UPDATE_SECS` or disable with
`$HOMEBREW_NO_AUTO_UPDATE=1`. Hide these hints with `$HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Downloading https://ghcr.io/v2/homebrew/core/portable-ruby/blobs/sha256:cef6f881f516d2cdbd0a5bfc7e20318da8b047cf2674ee27c5d4858d3ecd6430
####################################################################################################################################### 100.0%
==> Pouring portable-ruby-4.0.1.arm64_big_sur.bottle.tar.gz
==> Auto-updated Homebrew!
==> Updated Homebrew from 5.0.15 (36bd496f76) to 5.1.0 (4b1bc6ba6a).
Updated 3 taps (azure/functions, homebrew/core and homebrew/cask).
==> New Formulae
apkeep: Command-line tool for downloading APK files from various sources
atuin-server: Sync server for atuin - Improved shell history for zsh, bash, fish and nushell
betterleaks: Secrets scanner built for configurability and speed
buildkitd: Concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit (Daemon)
checkpwn: Check Have I Been Pwned and see if it's time for you to change passwords
cline: AI-powered coding agent for complex work
cloudflare-speed-cli: Cloudflare-based speed test with optional TUI
cni-plugins: Container Network Interface plugins
containerd: Open and reliable container runtime
ctx7: Manage AI coding skills and documentation context
dlpack: Common in-memory tensor structure
docker-engine: Pack, ship and run any application as a lightweight container (Daemon)
dtop: Terminal dashboard for Docker monitoring across multiple hosts
ffc.h: Single-header C99 accelerated float/double parsing
flowrs: TUI application for Apache Airflow
garden: Grow and cultivate collections of Git trees
ggml: Tensor library for machine learning
git-pkgs: Track package dependencies across git history
gittype: CLI code-typing game that turns your source code into typing challenges
googleworkspace-cli: CLI for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more
ipapatch: CLI tool to patch iOS IPA files and their plugins
kubectl-tree: Kubectl plugin to browse Kubernetes object hierarchies as a tree
landrun: Lightweight, secure sandbox for running Linux processes using Landlock LSM
lief: Library to Instrument Executable Formats
lua@5.4: Powerful, lightweight programming language
mkbrr: Is a tool to create, modify and inspect torrent files. Fast
models: Fast TUI and CLI for browsing AI models, benchmarks, and coding agents
mp4ff: Tools for parsing and manipulating MP4/ISOBMFF files
nfd2nfc: Convert filesystem entry names from NFD to NFC for cross-platform compatibility
nono: Capability-based sandbox shell for AI agents with OS-enforced isolation
oh-my-agent: Portable multi-agent harness for .agents-based skills and workflows
openspec: Spec-driven development (SDD) for AI coding assistants
pet: Simple command-line snippet manager
portless: Replace port numbers with stable, named local URLs for humans and agents
powershell: Command-line shell and scripting language
protobuf@33: Protocol buffers (Google's data interchange format)
rootlesskit: Linux-native "fake root" for implementing rootless containers
runc: CLI tool for spawning and running containers according to the OCI specification
rustypaste-cli: CLI tool for rustypaste
scala-cli: Scala language runner and build tool
sem-cli: Semantic version control CLI with entity-level diffs and blame
skills: Open agent skills ecosystem
spicedb: Open Source, Google Zanzibar-inspired database
termframe: Terminal output SVG screenshot tool
termusic: Music Player TUI written in Rust
topicctl: Declarative Kafka topic management
torf-cli: CLI tool for creating, reading and editing torrent files
tsshd: UDP SSH server for trzsz-ssh (tssh) with roaming support
upterm: Instant terminal sharing
vapoursynth-bestsource: Audio/video source and FFmpeg wrapper
vapoursynth-bm3d: BM3D denoising filter for VapourSynth
vapoursynth-descale: VapourSynth plugin to undo upscaling
vuls: Agentless Vulnerability Scanner for Linux/FreeBSD
weave: Entity-level semantic merge driver for Git using tree-sitter
wmbusmeters: Read wired or wireless mbus protocol to acquire utility meter readings
x-cli: Command-line power tool for Twitter
zsign: Cross-platform codesigning tool for iOS apps
zvbi: Vertical Blanking Interval (VBI) decoding library
zxc: High-performance asymmetric lossless compression library
zycore-c: Zyan Core Library for C
==> New Casks
bettercapture: Screen recorder
cmux: Ghostty-based terminal with vertical tabs and notifications for AI coding agents
connectiq-sdk-manager: Manage SDKs and download device definitions for Garmin Connect IQ development
fabric-app: Personal knowledge management and note-taking app
fidelity-trader+: Trading platform
font-datatype
font-ghanachocolate
font-gmarket-sans
font-iosevka-charon
font-iosevka-charon-mono
font-miranda-sans
font-selawik
gram: Code editor focused on stability, without AI, subscriptions, or telemetry
itsytv: Menu bar app for controlling your Apple TV
kotlin-lsp: Official Kotlin Language Server
ltx-desktop: Desktop app for generating videos with LTX models
paseo: Self-hosted daemon for AI coding agents
seamly2d: Pattern making software
spectra-app: OpenSpec document management desktop app
spokenly: Dictation and transcription app with AI-powered editing
supasidebar: Arc-like sidebar to save links, files and folders from any browser
t3-code: Minimal GUI for AI code agents
tablepro: Native database client for MySQL, PostgreSQL, SQLite, and MongoDB
tencent-ugit: Tencent Git GUI Client
ulaa: Privacy-centric browser with advanced tracking protection
vcmi: Open-source engine for Heroes of Might & Magic III
voicemod: Real-time voice changer and soundboard
wowup-cf: World of Warcraft addon manager
x-air-edit: Remote control for the Behringer X AIR series mixers
==> Deleted Installed Casks
powershell ✘

You have 231 outdated formulae and 26 outdated casks installed.
==> powershell has been moved to Homebrew.
To uninstall the cask, run:
  brew uninstall --cask --force powershell
==> Installing powershell...
==> Fetching downloads for: powershell
✔︎ Bottle Manifest powershell (7.6.0)                                                                               Downloaded   14.8KB/ 14.8KB
✔︎ Bottle Manifest icu4c@78 (78.3)                                                                                  Downloaded    9.7KB/  9.7KB
✔︎ Bottle Manifest brotli (1.2.0)                                                                                   Downloaded    8.0KB/  8.0KB
✔︎ Bottle brotli (1.2.0)                                                                                            Downloaded  793.5KB/793.5KB
✔︎ Bottle Manifest dotnet (10.0.105)                                                                                Downloaded   13.8KB/ 13.8KB
✔︎ Bottle Manifest ca-certificates (2026-03-19)                                                                     Downloaded    2.0KB/  2.0KB
✔︎ Bottle ca-certificates (2026-03-19)                                                                              Downloaded  132.4KB/132.4KB
✔︎ Bottle icu4c@78 (78.3)                                                                                           Downloaded   31.8MB/ 31.8MB
✔︎ Bottle powershell (7.6.0)                                                                                        Downloaded   20.8MB/ 20.8MB
✔︎ Bottle dotnet (10.0.105)                                                                                         Downloaded  224.2MB/224.2MB
==> Installing dependencies for powershell: brotli, icu4c@78 and dotnet
==> Installing powershell dependency: brotli
==> Pouring brotli--1.2.0.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/brotli/1.2.0: 33 files, 1.9MB
==> Installing powershell dependency: icu4c@78
==> Pouring icu4c@78--78.3.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/icu4c@78/78.3: 279 files, 87.7MB
==> Installing powershell dependency: dotnet
==> Pouring dotnet--10.0.105.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/dotnet/10.0.105: 5,182 files, 697MB
==> Installing powershell
==> Pouring powershell--7.6.0.arm64_tahoe.bottle.tar.gz
==> powershell cask is installed, skipping link.
🍺  /opt/homebrew/Cellar/powershell/7.6.0: 338 files, 67.7MB
==> Running `brew cleanup powershell`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).


The 5.1.0 release notes are available on the Homebrew Blog:
  https://brew.sh/blog/5.1.0
==> Fetching downloads for: ollama
✔︎ Bottle Manifest ollama (0.18.2)                                                                                  Downloaded   12.7KB/ 12.7KB
✔︎ Bottle Manifest zstd (1.5.7_1)                                                                                   Downloaded   13.2KB/ 13.2KB
✔︎ Bottle Manifest ca-certificates (2026-03-19)                                                                     Downloaded    2.0KB/  2.0KB
✔︎ Bottle ca-certificates (2026-03-19)                                                                              Downloaded  132.4KB/132.4KB
✔︎ Bottle Manifest sqlite (3.51.3)                                                                                  Downloaded   11.4KB/ 11.4KB
✔︎ Bottle sqlite (3.51.3)                                                                                           Downloaded    2.4MB/  2.4MB
✔︎ Bottle zstd (1.5.7_1)                                                                                            Downloaded  793.6KB/793.6KB
✔︎ Bottle Manifest python@3.14 (3.14.3_1)                                                                           Downloaded   29.5KB/ 29.5KB
✔︎ Bottle Manifest mlx (0.31.1)                                                                                     Downloaded    8.3KB/  8.3KB
✔︎ Bottle Manifest mlx-c (0.5.0_1)                                                                                  Downloaded    8.4KB/  8.4KB
✔︎ Bottle mlx-c (0.5.0_1)                                                                                           Downloaded  173.3KB/173.3KB
✔︎ Bottle ollama (0.18.2)                                                                                           Downloaded   12.3MB/ 12.3MB
✔︎ Bottle mlx (0.31.1)                                                                                              Downloaded   46.5MB/ 46.5MB
✔︎ Bottle python@3.14 (3.14.3_1)                                                                                    Downloaded   19.1MB/ 19.1MB
==> Installing dependencies for ollama: sqlite, zstd, python@3.14, mlx and mlx-c
==> Installing ollama dependency: sqlite
==> Pouring sqlite--3.51.3.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/sqlite/3.51.3: 13 files, 5.2MB
==> Installing ollama dependency: zstd
==> Pouring zstd--1.5.7_1.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/zstd/1.5.7_1: 32 files, 2.3MB
==> Installing ollama dependency: python@3.14
==> Pouring python@3.14--3.14.3_1.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/python@3.14/3.14.3_1: 3,764 files, 75.3MB
==> Installing ollama dependency: mlx
==> Pouring mlx--0.31.1.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/mlx/0.31.1: 417 files, 152.9MB
==> Installing ollama dependency: mlx-c
==> Pouring mlx-c--0.5.0_1.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/mlx-c/0.5.0_1: 39 files, 814.9KB
==> Installing ollama
==> Pouring ollama--0.18.2.arm64_tahoe.bottle.tar.gz
==> Caveats
To start ollama now and restart at login:
  brew services start ollama
Or, if you don't want/need a background service you can just run:
  OLLAMA_FLASH_ATTENTION="1" OLLAMA_KV_CACHE_TYPE="q8_0" /opt/homebrew/opt/ollama/bin/ollama serve
==> Summary
🍺  /opt/homebrew/Cellar/ollama/0.18.2: 8 files, 34.5MB
==> Running `brew cleanup ollama`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Caveats
==> ollama
To start ollama now and restart at login:
  brew services start ollama
Or, if you don't want/need a background service you can just run:
  OLLAMA_FLASH_ATTENTION="1" OLLAMA_KV_CACHE_TYPE="q8_0" /opt/homebrew/opt/ollama/bin/ollama serve
```

</details>


## :a: Démarrer `ollama` en service

- [ ] Démarrer

```bash
brew services start ollama
```
> ==> Successfully started `ollama` (label: homebrew.mxcl.ollama)

<image src=images/ollama-brew-services.png width='50%' height='50%' > </image>


- [ ] Vérifier

```
brew services list
```
```
Name      Status  User   File
ollama    started boreal ~/Library/LaunchAgents/homebrew.mxcl.ollama.plist
```
