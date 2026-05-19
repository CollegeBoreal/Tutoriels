# Installation

## :one: Installation avec un [Package Manager](../../P.PackageManager) (Recommandé)

### Installation avec [chocolatey](https://chocolatey.org/install) - Pour [Windows](../../O.OS/2.Windows/servers) Seulement

:warning: Utiliser `Powershell` (Administrateur)

```
choco install git.install --params "/GitAndUnixToolsOnPath /NoGitLfs /SChannel /NoAutoCrlf"
```

### Installation avec [brew](https://brew.sh) - pour [MacOS](../P.Plateformes/P.PackageManager/MacOS.md) Seulement

```
brew install git
```

### Installation avec [Winget](https://learn.microsoft.com/fr-ca/windows/package-manager/winget/) - Pour [Windows](../../O.OS/2.Windows/servers) Seulement

```bash
 winget install --id Git.Git -e --source winget
```
<details><summary>🪵</summary>

```lua
Trouvé Git [Git.Git] Version 2.54.0
La licence d’utilisation de cette application vous est octroyée par son propriétaire.
Microsoft n’est pas responsable des paquets tiers et n’accorde pas de licences à ceux-ci.
Téléchargement en cours https://github.com/git-for-windows/git/releases/download/v2.54.0.windows.1/Git-2.54.0-64-bit.exe
  ██████████████████████████████  62.1 MB / 62.1 MB
Le code de hachage de l’installation a été vérifié avec succès
Démarrage du package d’installation... Merci de patienter.
Le programme d’installation demande à s’exécuter en tant qu’administrateur. Attendez-vous à une invite.
Installé correctement
```

</details>

### Installation avec [pacman](https://packages.msys2.org/queue) - pour [msys2](msys2.org) Seulement

[pacman git](https://packages.msys2.org/package/git)

```
pacman -S git
```

## :two: Autre Installation manuelle des binaires

* git Client : https://git-scm.com/downloads  


# :blue_book: Livre

* [Livre git](https://git-scm.com/book/fr/v2)


