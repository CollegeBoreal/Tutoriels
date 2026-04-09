# 🦞 OpenClaw

Voici un **résumé clair et pratique des principales commandes CLI d’OpenClaw**, destiné à une prise en main rapide. Les commandes exactes peuvent évoluer, mais cette synthèse couvre les usages les plus courants. [\[docs.openclaw.ai\]](https://docs.openclaw.ai/cli), [\[clawdocs.org\]](https://clawdocs.org/reference/cli/)

***

## 1) Commandes de base

*   **Afficher l’aide / la version**
    ```bash
    openclaw --help
    openclaw --version
    ```
*   **Interface utilisateur**

    - [ ] Interface terminal

    ```bash
    openclaw tui
    ```

    - [ ]  Interface web

    ```bash
    openclaw dashboard  
    ```
<details>

```
🦞 OpenClaw 2026.3.13 (61d171a)
   I don't just autocomplete—I auto-commit (emotionally), then ask you to review (logically).

│
◇  Doctor warnings ────────────────────────────────────────────────────────────────────╮
│                                                                                      │
│  - channels.signal.groupPolicy is "allowlist" but groupAllowFrom (and allowFrom) is  │
│    empty — all group messages will be silently dropped. Add sender IDs to            │
│    channels.signal.groupAllowFrom or channels.signal.allowFrom, or set groupPolicy   │
│    to "open".                                                                        │
│                                                                                      │
├──────────────────────────────────────────────────────────────────────────────────────╯
Dashboard URL: http://127.0.0.1:18789/#token=045dba00a4e2c64xxxxxxxxxxxxxx8e6215219dd6e7a35c9
Copied to clipboard.
Opened in your browser. Keep that tab to control OpenClaw.
```

</details>

<image src=images/OpenClaw-dashboard.png width='70%' height='70%' />

***

## 2) Installation & initialisation

*   **Onboarding (assistant interactif)**
    ```bash
    openclaw onboard
    ```
*   **Initialiser / configurer un espace de travail**
    ```bash
    openclaw setup --wizard
    openclaw configure
    ```

***

## 3) Configuration

*   **Lire / modifier la configuration**
    ```bash
    openclaw config get <clé>
    openclaw config set <clé> <valeur>
    openclaw config unset <clé>
    openclaw config validate
    ```
*   **Options globales utiles**
    *   `--dev` (profil de dev isolé)
    *   `--profile <nom>` (profil dédié)
    *   `--json`, `--no-color`

***

## 4) Gateway (service central)

*   **Gérer le service**
    ```bash
    openclaw gateway start|stop|restart|status
    openclaw gateway run        # premier plan
    ```
*   **Diagnostic**
    ```bash
    openclaw gateway status --deep
    ```
    <details>

```
🦞 OpenClaw 2026.3.13 (61d171a)
   I autocomplete your thoughts—just slower and with more API calls.

│
◇  Doctor warnings ────────────────────────────────────────────────────────────────────╮
│                                                                                      │
│  - channels.signal.groupPolicy is "allowlist" but groupAllowFrom (and allowFrom) is  │
│    empty — all group messages will be silently dropped. Add sender IDs to            │
│    channels.signal.groupAllowFrom or channels.signal.allowFrom, or set groupPolicy   │
│    to "open".                                                                        │
│                                                                                      │
├──────────────────────────────────────────────────────────────────────────────────────╯
│
◇  
Service: LaunchAgent (loaded)
File logs: /tmp/openclaw/openclaw-2026-04-09.log
Command: /opt/homebrew/opt/node/bin/node /opt/homebrew/Cellar/openclaw-cli/2026.3.13/libexec/lib/node_modules/openclaw/dist/index.js gateway --port 18789
Service file: ~/Library/LaunchAgents/ai.openclaw.gateway.plist
Service env: OPENCLAW_GATEWAY_PORT=18789

Config (cli): ~/.openclaw/openclaw.json
Config (service): ~/.openclaw/openclaw.json

Gateway: bind=loopback (127.0.0.1), port=18789 (service args)
Probe target: ws://127.0.0.1:18789
Dashboard: http://127.0.0.1:18789/
Probe note: Loopback-only gateway; only local clients can connect.

Runtime: running (pid 1105, state active)
RPC probe: ok

Listening: 127.0.0.1:18789
Troubles: run openclaw status
Troubleshooting: https://docs.openclaw.ai/troubleshooting
```
        
    </details>

***

## 5) Agents & messages

*   **Envoyer un message / dialoguer**
    ```bash
    openclaw agent --message "Bonjour"
    openclaw chat "Bonjour"
    ```
*   **Gestion des agents**
    ```bash
    openclaw agents list|add|delete
    ```

***

## 6) Canaux (Telegram, Discord, etc.)

*   **Lister / vérifier**
    ```bash
    openclaw channels list
    openclaw channels status
    ```
*   **Ajouter / retirer**
    ```bash
    openclaw channels add --channel telegram ...
    openclaw channels remove ...
    ```

***

## 7) Skills & plugins

*   **Gestion des skills**
    ```bash
    openclaw skills list|install|remove|check
    openclaw skill test <skill> <message>
    ```
*   **Plugins**
    ```bash
    openclaw plugins list|install|uninstall|enable|disable
    ```

***

## 8) Sécurité, diagnostic & logs

*   **Audit et corrections**
    ```bash
    openclaw security audit --fix
    openclaw doctor --fix
    ```
*   **Logs & état**
    ```bash
    openclaw logs --follow
    openclaw status --deep
    ```

***

## 9) Autres commandes utiles

*   **Mises à jour**
    ```bash
    openclaw update
    ```
*   **Statistiques**
    ```bash
    openclaw stats
    ```

***

### Bonnes pratiques

*   Redémarrer la **gateway** après toute modification importante.
*   Utiliser `--json` pour l’automatisation (CI/CD).
*   Lancer régulièrement `doctor` et `security audit`.

👉 Pour le détail exhaustif (toutes les sous‑commandes et options), consulte la **référence officielle de la CLI**. [\[docs.openclaw.ai\]](https://docs.openclaw.ai/cli), [\[clawdocs.org\]](https://clawdocs.org/reference/cli/)

Souhaites-tu un **mémo ultra‑court (cheat sheet)** ou un **exemple pas à pas** (ex. ajouter Telegram + lancer un agent) ?


# 📚 References

- [ ] [CLI Reference](https://docs.openclaw.ai/cli)

```bash
openclaw logs --follow | grep token
```
> 2026-04-09T12:34:59.602Z info Dashboard URL: http://127.0.0.1:18789/#token=045dba00a4e2c64xxxxxxxxxxxxxxx8e6215219dd6e7a35c9
