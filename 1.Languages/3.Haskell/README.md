# Haskell

### :m: Install

```
% curl https://get-ghcup.haskell.org -sSf | sh

Welcome to Haskell!

This will download and install the Glasgow Haskell Compiler (GHC) for 
the Haskell programming language, and the Cabal build tool.

It will add the 'cabal', 'ghc', and 'ghcup' executables to bin directory 
located at: 

  /Users/myself/.ghcup/bin

and create the environment file /Users/myself/.ghcup/env
which you should source in your ~/.bashrc or similar to get the required
PATH components.
```

### :m: Env Variable (~/.bashrc or ~/.zshrc)

```
[ -f "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env" ] && source "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env"
```

# References

http://tryhaskell.org/
