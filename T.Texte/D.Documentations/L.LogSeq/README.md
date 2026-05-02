# Logseq

***

## ✅ Prérequis

*   macOS
*   Homebrew installé

Si Homebrew n’est pas encore installé :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

(commande officielle Homebrew)

***

## ✅ Installation de Logseq via Homebrew (méthode simple)

Logseq est distribué via **Homebrew Cask**.

```bash
brew install --cask logseq
```
<details><summary>🪵</summary>

```lua
==> Auto-updating Homebrew...
Adjust how often this is run with `$HOMEBREW_AUTO_UPDATE_SECS` or disable with
`$HOMEBREW_NO_AUTO_UPDATE=1`. Hide these hints with `$HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Auto-updated Homebrew!
==> Updated Homebrew from 424edfbd76 to 4a95077682.
Updated 4 taps (steipete/tap, azure/functions, homebrew/core and homebrew/cask).
==> New Formulae
alevin-fry: Efficient and flexible tool for processing single-cell sequencing data
defuddle: Extract article content and metadata from web pages
echtvar: Rapid variant annotation and filtering
gemmi: Macromolecular crystallography library and utilities
hyphy: Hypothesis testing using Phylogenies
kubernetes-cli@1.35: Kubernetes command-line interface
libchardet: Mozilla's Universal Charset Detector C/C++ API
oarfish: Long read RNA-seq quantification
pnpm@10: Fast, disk space efficient package manager
pomerium: Identity and context-aware access proxy
spoa: SIMD partial order alignment tool/library
stellar-xdr: Stellar command-line tool for encoding/decoding XDR for the Stellar network
unordered_dense: Hashmap and hashset based on robin-hood backward shift deletion
vcflib: C++ library and cmdline tools for parsing and manipulating VCF files
==> New Casks
ghostpepper: Speech-to-text and meeting transcription tool
openusage: AI usage tracker for Cursor, Claude Code, Codex, Copilot and more
yakit: Cybersecurity platform

You have 222 outdated formulae and 28 outdated casks installed.

==> Fetching downloads for: logseq
✔︎ Cask logseq (0.10.15)                                                                                                         Verified    199.4MB/199.4MB
==> Installing Cask logseq
==> Moving App 'Logseq.app' to '/Applications/Logseq.app'
🍺  logseq was successfully installed!
```

</details>

Cette commande :

*   télécharge la version officielle de Logseq
*   installe l’application dans `/Applications`
*   gère les mises à jour via Homebrew [\[formulae.brew.sh\]](https://formulae.brew.sh/cask/logseq), [\[macvault.vercel.app\]](https://macvault.vercel.app/tools/logseq)

***

## ✅ Lancer Logseq

Après l’installation, vous pouvez :

*   l’ouvrir normalement depuis **Applications**
*   ou depuis le terminal :

```bash
open -a Logseq
```

***

## ✅ Vérifier l’installation

```bash
brew list --cask | grep logseq
```

***

## ✅ Mettre Logseq à jour

```bash
brew update
brew upgrade --cask logseq
```

***

## ✅ Désinstaller Logseq

```bash
brew uninstall --cask logseq
```

***

## ℹ️ Notes utiles

*   Logseq est **open‑source**, **local‑first** et **privacy‑first**
*   Compatible Apple Silicon et Intel
*   La cask Homebrew pointe vers les releases officielles Logseq [\[formulae.brew.sh\]](https://formulae.brew.sh/cask/logseq)

***
