:one: [NeoVim](https://neovim.io/)


:gear: Init File

```
mkdir -p ~/.config/nvim
```

```
touch ~/.config/nvim/init.vim
```

:plunger: Plugin

```
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
     https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```
