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


## :ab: Manual Install

### :m: Install

```
% curl https://get-ghcup.haskell.org -sSf | sh
```

### :m: Env Variable (~/.bashrc or ~/.zshrc)

```
[ -f "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env" ] && source "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env"
```

## :x: Nix

https://github.com/Gabriel439/haskell-nix
