# Nix

https://discourse.nixos.org/t/migrating-from-homebrew-to-nix-for-osx/2892


:apple: MacOS

```
$ sh <(curl https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume
```

Source Profile

```
$ . /Users/valiha/.nix-profile/etc/profile.d/nix.sh
```

Nix Store

```
% ls -l /nix
```
