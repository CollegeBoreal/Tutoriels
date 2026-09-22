# Nix

https://discourse.nixos.org/t/migrating-from-homebrew-to-nix-for-osx/2892


[Download](https://nixos.org/download.html)


:apple: MacOS

```
$ sh <(curl https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume
```

Source Profile

```
$ source ~/.nix-profile/etc/profile.d/nix.sh
```

Nix Store

```
% ls -l /nix
```

---

You're good on disk space.

The important lines are:

```text
/dev/disk3s5   926Gi   810Gi    91Gi    90%   /System/Volumes/Data
/dev/disk3s7   926Gi   4.0Gi    91Gi     5%   /nix
```

You have about **91 GiB free**.

For an Obelisk + GHC build, that's generally plenty. I'd start worrying if you were below about 15-20 GB free.

If you're curious how much Nix has consumed so far:

```bash
du -sh /nix/store
```

and

```bash
nix path-info -Sh /nix/store/*
```

The first gives a quick total. The second can be huge but shows where space is going.

What I find most interesting is:

```text
/Volumes/Data  810Gi used
```

while

```text
/nix           4.0Gi used
```

This means **Nix is not currently the thing filling your SSD**. Most of your storage is elsewhere.

And based on your earlier `ghc-stage1` processes, the build is still actively compiling GHC. Nothing you've shown suggests you're blocked by disk space.

My prediction: the first `nix-shell` will eventually finish; you're currently paying the Apple Silicon + old GHC + Obelisk setup cost. Once it completes, subsequent runs should be dramatically faster. 🚀

---


:computer: Windows

https://nathan.gs/2019/04/12/nix-on-windows/
