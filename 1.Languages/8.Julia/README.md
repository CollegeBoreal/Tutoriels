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

- [ ] Check `Jupyter` config paths

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

- [ ] Find 'kernels` data folder

```
find ${HOME}/Library/Jupyter -name "kernels"
```
> Returns
```powershell
/Users/user/Library/Jupyter/kernels
```

- [ ] Find 'kernels` data files

```
find ${HOME}/Library/Jupyter/kernels -name "kernel.json"
```
> Returns
```powershell
/Users/user/Library/Jupyter/kernels/julia-1.10/kernel.json
/Users/user/Library/Jupyter/kernels/julia-1.9/kernel.json
```

- [ ] Check if configured kernels matches `juliaup` configuration

```
find ${HOME}/Library/Jupyter/kernels -name "kernel.json" -exec grep julia {} \;
```
> Returns
```powershell
    "/Users/user/.julia/juliaup/julia-1.10.5+0.aarch64.apple.darwin14/bin/julia",
    "/Users/user/.julia/packages/IJulia/bHdNn/src/kernel.jl",
  "language": "julia",
    "/Users/user/.juliaup/bin/julia",
    "/Users/user/.julia/packages/IJulia/Vo51o/src/kernel.jl",
  "language": "julia",
```

# References

- [ ] [How to Add Julia to Jupyter Notebook](https://datatofish.com/add-julia-to-jupyter)
- [ ] [How to install Jupyter Notebook on Mac using Homebrew](https://medium.com/@iamclement/how-to-install-jupyter-notebook-on-mac-using-homebrew-528c39fd530f)
- [ ] [Collection of Snippets for Julia](https://wiki.geany.org/snippets/julia/start)
