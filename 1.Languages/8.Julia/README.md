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

---

To update Julia and move all your existing packages along, follow these steps:

1. Update Julia using juliaup
	- Open your terminal and run the following command:

```
juliaup update
```


This updates Julia to the latest version in the release channel.

2. Backup your existing packages (Optional)

Although package environments should carry over automatically, it’s always a good idea to back them up:
- Locate your Julia package directory. You can find it by running this command in Julia:

```
println(DEPOT_PATH)
```
> Returns
```powershell
julia> println(DEPOT_PATH)
["/Users/me/.julia", "/Users/me/.julia/juliaup/julia-1.11.1+0.aarch64.apple.darwin14/local/share/julia", "/Users/me/.julia/juliaup/julia-1.11.1+0.aarch64.apple.darwin14/share/julia"]
```


- The .julia directory in your home folder typically contains your packages. Back up this directory if needed.

3. Run Julia after the update

- Start the new version of Julia by typing julia in the terminal.
- Julia uses environments to manage packages. Your existing packages are associated with your project or global environment (~/.julia/environments).
- Run this command to ensure that your previous global environment is intact:

```julia
using Pkg
Pkg.status()
```

- If all packages are listed as before, you’re good to go.

4. Resolve Missing or Incompatible Packages

If you encounter any issues with missing or incompatible packages after the update:
- Activate your environment and resolve issues:

```julia
using Pkg
Pkg.instantiate()  # Ensures dependencies are installed
```

- Update your packages to ensure compatibility with the new Julia version:

```julia
Pkg.update()
```


5. Check Default Julia Version

If you’re using juliaup, ensure the new version is set as the default:

```
juliaup default release
```

6. Test Your Code

Run your scripts or projects to ensure that everything works as expected with the updated Julia version.

If you experience any specific issues during the update, let me know, and I can guide you further!
