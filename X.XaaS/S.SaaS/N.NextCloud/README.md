# :cloud_with_snow: NextCloud

***

## ✅ What you are installing (important)

With Homebrew, you install the **Nextcloud Desktop Sync Client**, **not the server**.

*   ✅ This is what you want for Logseq
*   ❌ You cannot install a Nextcloud *server* with Homebrew

***

## ✅ Install Nextcloud Desktop Client with Homebrew

```bash
brew install --cask nextcloud
```

This installs:

*   **Nextcloud.app** into `/Applications`
*   The official desktop sync client from nextcloud.com [\[formulae.brew.sh\]](https://formulae.brew.sh/cask/nextcloud)

***

## ✅ Verify installation

```bash
brew list --cask | grep nextcloud
```

Or launch it:

```bash
open -a Nextcloud
```

***

## ✅ First‑time configuration (required)

When Nextcloud starts:

1.  Enter your **Nextcloud server URL**  
    Example:
        https://cloud.example.com
2.  Log in (recommended: **app password**)
3.  Choose local sync directory  
    Example:
        ~/Nextcloud

This client handles:

*   File sync
*   Conflict resolution
*   Versioning
*   Offline work

(Exactly what Logseq needs)

***

## ✅ Use with Logseq (recommended layout)

    ~/Nextcloud/
    └── Logseq/
        └── my-graph/
            ├── pages/
            ├── journals/
            ├── assets/
            └── logseq/

Then in Logseq:

    Add existing graph → ~/Nextcloud/Logseq/my-graph

***

## ⚠️ Do NOT install these (common mistake)

### ❌ `nextcloud-vfs`

```bash
brew install --cask nextcloud-vfs
```

*   Deprecated
*   Conflicts with `nextcloud`
*   Not recommended anymore [\[formulae.brew.sh\]](https://formulae.brew.sh/cask/nextcloud-vfs)

### ❌ Editing files via Nextcloud Web UI

*   Breaks Logseq Markdown
*   Causes outline corruption

***

## ✅ Optional: Nextcloud Talk (not needed for Logseq)

```bash
brew install --cask nextcloud-talk
```

Video / chat client only [\[formulae.brew.sh\]](https://formulae.brew.sh/cask/nextcloud-talk)

***

## ✅ Update / uninstall

Update:

```bash
brew update
brew upgrade --cask nextcloud
```

Uninstall:

```bash
brew uninstall --cask nextcloud
```

***

## ✅ Summary (TL;DR)

✅ Correct command:

```bash
brew install --cask nextcloud
```

✅ Use it to sync your Logseq graph folder  
❌ Homebrew cannot install a Nextcloud server  
✅ This is the **best practice setup** for Logseq + Nextcloud on macOS

***

If you want next:

*   ✅ Logseq + Nextcloud + **Git backup**
*   ✅ Conflict‑safe workflow
*   ✅ Proxmox/Nextcloud server for Logseq
*   ✅ Multi‑graph / teaching setup

Just say which one.
