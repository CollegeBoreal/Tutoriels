# [Julia](https://julialang.org/)

### [Installation](https://julialang.org/downloads/)

```
curl -fsSL https://install.julialang.org | sh
```


### Installer [Jupyter Notebook]()

```
brew install jupyter
```

### Install Julia Kernel in Jupyter Notebook

```julia
julia>
```

```
using Pkg
```

```
Pkg.add("IJulia")
```


### Update kernel path

```
/opt/homebrew/bin/jupyter --paths
```
> Returns
```powershell
config:
    /Users/user/.jupyter
    /Users/user/Library/Python/3.10/etc/jupyter
    /opt/homebrew/opt/python@3.10/Frameworks/Python.framework/Versions/3.10/etc/jupyter
    /usr/local/etc/jupyter
    /etc/jupyter
data:
    /Users/user/Library/Jupyter
    /Users/user/Library/Python/3.10/share/jupyter
    /opt/homebrew/opt/python@3.10/Frameworks/Python.framework/Versions/3.10/share/jupyter
    /usr/local/share/jupyter
    /usr/share/jupyter
runtime:
    /Users/user/Library/Jupyter/runtime
```


# References

- [ ] [How to Add Julia to Jupyter Notebook](https://datatofish.com/add-julia-to-jupyter)
- [ ] [How to install Jupyter Notebook on Mac using Homebrew](https://medium.com/@iamclement/how-to-install-jupyter-notebook-on-mac-using-homebrew-528c39fd530f)
- [ ] [Collection of Snippets for Julia](https://wiki.geany.org/snippets/julia/start)
