[Re: Ignore insecure directories and continue](http://www.zsh.org/mla/users/2008/msg00566.html}

```
% chmod 755 /usr/local/bin/zsh /usr/local/share/zsh/site-functions 
```

---

# ZSh


## 🔄 compare

Think of Zsh (Z Shell) as an upgraded, highly customizable version of Bash, which is the default shell most people start with. While a standard shell simply executes your text commands, Zsh adds "quality-of-life" features that dramatically speed up your workflow and reduce typos.

It is powerful enough that Apple made it the default shell for macOS starting with macOS Catalina, replacing Bash.

---

### The Three Killer Features of Zsh

* **Smarter Tab Completion:** In Bash, pressing Tab shows you a list of files, but you have to keep typing the letters. In Zsh, pressing Tab twice opens an interactive menu. You can use your arrow keys to move around the menu and select the exact file or folder you want.
* **Spelling Correction & Approximations:** If you accidentally type `gti status` instead of `git status`, Zsh will catch the typo, ask you *"Did you mean git status?"*, and let you hit `y` to run it correctly.
* **Shared Command History:** If you have three different terminal windows open at the same time, any command you type in Window A is instantly searchable in Windows B and C.

---

### How Zsh Compares to Others

To see where Zsh fits, it helps to look at it alongside **Bash** (the old industry standard) and **Fish** (a highly modern, specialized alternative).

| Feature | **Bash** (Bourne Again Shell) | **Zsh** (Z Shell) | **Fish** (Friendly Interactive Shell) |
| --- | --- | --- | --- |
| **Default On** | Most Linux distributions | macOS & modern Linux setups | Must be installed manually |
| **Out-of-the-Box Experience** | Very plain. No color-coding or auto-suggestions by default. | Minimal default setup, but explicitly designed to be extended easily. | Beautiful immediately. Features web-based configuration and built-in syntax colors. |
| **Script Compatibility** | Standard. Almost every automation script on the web is written for Bash. | **Excellent.** It can run almost any Bash script without modifications. | **Poor.** Fish uses a completely different scripting syntax; Bash scripts will break in it. |
| **Plugin Ecosystem** | Very limited | **Massive** (via frameworks like Oh My Zsh, offering thousands of themes). | Moderate (via Oh My Fish) |

### The Verdict: Why Choose Zsh?

* **Choose Bash** if you are writing foundational system scripts that need to run seamlessly on every server in the world without installing extra software.
* **Choose Fish** if you want a beautiful, ultra-modern terminal experience instantly and do not care about strict Bash script compatibility.
* **Choose Zsh** if you want the absolute best of both worlds: a highly intelligent, interactive terminal environment that still retains full compatibility with standard industry Bash scripts.


## [ohmyz.sh](https://ohmyz.sh/)

### Install

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Configure

```zsh
# ----------------------------------------
export ZSH="$HOME/.oh-my-zsh" 
ZSH_THEME="robbyrussell"
plugins=(git)

source $ZSH/oh-my-zsh.sh
#  ---------------------------------------- 
```


# 📚 References

- [ ] [I customized my terminal with Oh My Zsh and just a little bit of vibe coding](https://www.howtogeek.com/i-customized-my-terminal-with-oh-my-zsh-and-just-a-little-bit-of-vibe-coding)
