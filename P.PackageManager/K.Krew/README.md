# :ice_cube: Krew

Avec [Krew](https://krew.sigs.k8s.io/)

## :o: Installation Shell

:round_pushpin: Executer la commande suivante dans le `Terminal`

```bash
(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
)
```

:round_pushpin: Activer au démarrage

```
export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
```

<hr/>


## :gear: Installation avec `Package Manager`

- [ ] :apple: MacOS 

```
brew install krew
```

- [ ] :desktop: Windows 

```
choco install krew
```

## :ab: Chercher des packages [cask](https://formulae.brew.sh/cask/)

```
kubectl krew list 
```


# References:
https://krew.sigs.k8s.io/docs/user-guide/setup/install/
