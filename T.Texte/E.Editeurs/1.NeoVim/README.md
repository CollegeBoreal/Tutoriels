:one: [NeoVim](https://neovim.io/)


:gear: Init File

```
mkdir -p ~/.config/nvim
```

```
touch ~/.config/nvim/init.vim
```

:plunger: Plugin [vim-plug](https://github.com/junegunn/vim-plug)

```
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
     https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

## ✅ Méthodes d’installation

La page officielle indique que tu peux installer Neovim **depuis un téléchargement**, **via un gestionnaire de paquets**, ou **en compilant depuis les sources**. ([Neovim][1])

### • Si tu es sur **Windows**

* Tu peux utiliser un gestionnaire comme :

  ```bash
  winget install Neovim.Neovim
  ```

  ou

  ```bash
  choco install neovim
  ```

  ou

  ````bash
  scoop install neovim
  ``` :contentReference[oaicite:2]{index=2}  
  ````
* Ou télécharger l’archive `nvim-winXX.zip` depuis la page des Releases, dézipper, puis exécuter `nvim.exe`. ([Neovim][1])
* Optionnel : ajouter le dossier `bin` de Neovim à ta variable `PATH` pour pouvoir lancer `nvim` depuis n’importe quel terminal. ([Neovim][1])

### • Si tu es sur **macOS** (ou macOS + Linux via Homebrew / MacPorts)

* Avec Homebrew :

  ````bash
  brew install neovim
  ``` :contentReference[oaicite:5]{index=5}  
  ````
* Sinon, tu peux télécharger le binaire pré‑compilé depuis la page Releases, extraire l’archive, puis lancer `nvim` depuis son dossier `bin`. ([Neovim][1])

### • Si tu es sur **Linux**

* Tu peux souvent l’installer via le gestionnaire de paquets de ta distribution. Par exemple sur Debian/Ubuntu :

  ````bash
  sudo apt install neovim
  ``` :contentReference[oaicite:7]{index=7}  
  ````
* Ou utiliser une AppImage fournie sur la page Releases : tu télécharges `nvim‑linux‑x86_64.appimage`, tu donnes les droits d’exécution avec `chmod u+x`, puis tu l’exécutes. ([Neovim][1])
* Sinon, tu peux télécharger le tarball, extraire, et ajouter le dossier `bin` à ton `PATH`. ([Neovim][1])

---

## ▶️ Lancer Neovim

Une fois installé, pour lancer Neovim tu utilises la commande :

```
nvim
```

… et **non** `neovim`. ([Neovim][1])

Si tu veux ouvrir un fichier directement :

```
nvim nom_du_fichier.ext
```


[1]: https://neovim.io/doc/install/ "Install - Neovim"
