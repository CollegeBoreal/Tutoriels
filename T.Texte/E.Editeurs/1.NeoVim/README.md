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
