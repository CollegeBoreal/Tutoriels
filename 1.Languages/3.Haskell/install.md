# Installation

## :a: Install with Package Managers

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


## :b: Verifier 

:strawberry: ou :penguin: Linux

```
$ apt list --installed haskell-platform
Listing... Done
haskell-platform/stable,now 2014.2.0.0.debian8 all [installed]
```


## :ab: Install with [`ghcup`](https://www.haskell.org/ghcup/)

```
$ curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

### :m: Env Variable (~/.bashrc or ~/.zshrc)

```
[ -f "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env" ] && source "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env"
```

http://dev.stephendiehl.com/hask/

## :x: Nix

https://github.com/Gabriel439/haskell-nix

* Install `cabal-install`

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

* Environment vith nix https://romainviallard.dev/en/blog/setting-up-a-haskell-development-environment-with-nix/

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
