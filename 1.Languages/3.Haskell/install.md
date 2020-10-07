# Installation

:bulb: [Documentation `awesome cabal`](https://kowainik.github.io/projects/awesome-cabal)



## :a: Install with [`ghcup`](https://www.haskell.org/ghcup/)

### :one: pour Linux et MacOS

```
$ curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

```
  Welcome to Haskell!

  This script will download and install the following binaries:
    * ghcup - The Haskell toolchain installer
              (for managing GHC/cabal versions)
    * ghc   - The Glasgow Haskell Compiler
    * cabal - The Cabal build tool

  ghcup installs only into the following directory,
  which can be removed anytime:
    /Users/b300098957/.ghcup

  Press ENTER to proceed or ctrl-c to abort.
  Note that this script can be re-run at any given time.
```


##### :m: Env Variable (~/.bashrc or ~/.zshrc)

```
[ -f "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env" ] && source "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env"
```

##### :m: Utilisation

- [ ] Lister les binaires installés.

```
$ ghcup list
```

- [ ] Installer une version spécifique

```
$ ghcup install 8.6.5
```

- [ ] Assigner un version spécifique

```
$ ghcup set 8.6.5
```

### :two: pour Windows PowerShell

https://www.powershellgallery.com/packages/ghcups/3.7

https://github.com/kakkun61/ghcups

:x: Prérequis - S'assurer que `7Zip` soit installé 

```
> choco install 7zip.install
```

:o: Installer `ghcups` - `(S'assurer d'etre en mode Administrateur)`

```powershell
> Install-Module -Name ghcups
```

:m: En tant qu'utilisteur normal, 

- [ ] Importer le module `ghcups` 

```
> Import-Module ghcups
```

- [ ] Confirmer l'installation du module.

```powershell
> Get-Module ghcups
```

:m: Installer `GHC`

- [ ] lister les version disponibles.

```powershell
> get-ghc
```

- [ ] Installer la version de `ghci` désirée

```powershell
> Install-Ghc 8.6.5
```

- [ ] Rendre la version installée par défaut

```powershell
> Set-Ghc 8.6.5
```

- [ ] Vérifier la version installée par défaut

```powershell
> ghci --version
The Glorious Glasgow Haskell Compilation System, version 8.6.5
```

:m: Installer `Cabal`

- [ ] lister les version disponibles.

```powershell
> get-cabal
```

- [ ] Installer la version de `cabal` désirée

```powershell
> Install-Cabal 3.2.0.0
```

- [ ] Rendre la version installée par défaut

```powershell
> Set-Cabal 3.2.0.0
```

- [ ] Vérifier la version installée par défaut

```powershell
> cabal --version
cabal-install version 3.2.0.0
compiled using version 3.2.0.0 of the Cabal library
```


## :b: Install with Package Managers (pas recommandé)

:pushpin: Windows

```
PS > choco install ghc haskell-stack
```

:pushpin: Apple

```
$ brew install ghc cabal-install haskell-stack
```
  
:strawberry: ou :penguin: Linux

```
$ sudo apt-get install haskell-platform
```


### :bookmark: Verifier 

:strawberry: ou :penguin: Linux

```
$ apt list --installed haskell-platform
Listing... Done
haskell-platform/stable,now 2014.2.0.0.debian8 all [installed]
```



## :x: Nix

https://github.com/Gabriel439/haskell-nix

* Install `cabal-install` <i>Add  --dry-run</i> for testing

```
$ nix-env --install cabal-install
```

* Install Stack

```
$ nix-env --file "<nixpkgs>" --install --attr stack
```


* Install the GHC Compiler

```
$ nix-env --file "<nixpkgs>" --install --attr ghc
```

https://github.com/NixOS/nixpkgs/issues/9682

### :loop: Query and Install

- [x] Query a specific `cabal` version

```
$ nix-env --file "<nixpkgs>" --query --available --attr-path --attr haskellPackages Cabal
```

- [x] Install a specific `cabal` version

```
$ nix-env --file "<nixpkgs>" --profile /tmp/foo --install --attr haskellPackages.Cabal_2_2_0_1 
```

- [x] Query all `Haskell` Compiler related package versions

```
$ nix-env --file "<nixpkgs>" --query --available --attr-path --attr haskell.compiler
```

- [x] Install a specific `ghc` version

```
$ nix-env --file "<nixpkgs>" --profile /tmp/foo --install --attr haskell.compiler.ghc865 
```

* Environment vith nix https://github.com/aveltras/setting-up-a-haskell-development-environment-with-nix

```
$ nix-env --query
```

```
$ nix-env --uninstall ghc
```


* Machine Info 

```
$ nix-shell --packages nix-info --run "nix-info --markdown"
```

# References

https://appuals.com/fix-execution-of-scripts-is-disabled-on-this-system/#:~:text=What%20Causes%20the%20%E2%80%9CExecution%20of%20scripts%20is%20disabled,4%3A%20Resolve%20the%20Method%20Using%20the%20Registry.%20
