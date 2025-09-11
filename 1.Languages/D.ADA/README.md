# ADA


- [ ] [GNAT_GPL Mac O X/2024-ventura](https://sourceforge.net/projects/gnuada/files/GNAT_GPL%20Mac%20OS%20X/2024-ventura)
- [ ] Download the [`dmg`](https://sourceforge.net/projects/gnuada/files/GNAT_GPL%20Mac%20OS%20X/2024-ventura/20240623-Applications-GNATStudio.dmg/download) file
- [ ] Open the `dmg` file


#### Important steps before launching the app
The app is not codesigned, you'll perhaps need to delete quarantine attributes with xattr.

```sh
xattr -r -d com.apple.quarantine $HOME/Applications/gnatstudio.app
```

This new GPS aka GNATStudio will create a new `.gnatstudio` folder in `$HOME` based on `.gps` if existing, thus to avoid some troubles I recommend to rename `.gps` the first time.

NEW: the GNATStudio launcher looks for a `gnatstudio_launcher.rc` file in `.gnatstudio` folder from either `$HOME` or `$GNATSTUDIO_HOME` locations. If it exists, we can define some environment variables with the standard syntax `VAR=VALUE`. If the VAR exists then VALUE is append to it. If not, VAR is created with VALUE. Thus, it permits to set extra PATH to GNAT compiler and builder folders or `GPR_PROJECT_PATH`. If a line begins with '#' then it is not considered. An example file of gnatstudio_launcher.rc is provided in the archive. Modify the content and put in in your `.gnatstudio` folder.

If PATH is not set in gnatstudio_launcher.rc then the GNAT and GPR toolchains are predefined to GNAT FSF 13.1 e.g. `/opt/gcc-13.1.0/bin`. If you have an other location you need to change `GS_GNAT_PATH` and `GS_GPR_PATH` in `Info.plist` of the `GNATStudio app`. Take care that the `Info.plist` is cached so you have to put the `Info.plist` file in a dummy folder and put it back to the app folder. After running GNATStudio, verify the toolchain in menus `help->about` and `build->settings->toolchains`.

The first launch may take a long time before the GNATStudio window appears due to some macOS stuff. If a popup window appears asking for acknowledgement to access your Documents folder then clic on button OK.

In case of issues, I advise to launch the app for the first time in the Terminal to watch logs:

```sh
$HOME/Applications/GNATStudio.app/Contents/MacOS/gnatstudio_launcher
```
<details>
<Summary>Output</Summary>

```powershell
Launcher: /Users/valiha/Applications/GNATStudio.app/Contents/MacOS/gnatstudio_launcher
Exe     : /Users/valiha/Applications/GNATStudio.app/Contents/MacOS/gnatstudio
Res     : /Users/valiha/Applications/GNATStudio.app/Contents/Resources
GS_GNAT_PATH: 
GS_GPR_PATH : 
Found: /Users/valiha/.gnatstudio/gnatstudio_launcher.rc
Found: PATH=/Users/me/.local/share/alire/toolchains/gnat_native_13.2.2_9be96041/bin:/Users/me/.local/share/alire/toolchains/gprbuild_22.0.1_b1220e2b/bin
Found: GPR_PROJECT_PATH=/Users/me/dependencies/ansiada_0.1.0_27a89150
Create GPR_PROJECT_PATH with: /Users/me/dependencies/ansiada_0.1.0_27a89150
Append PATH with: /Users/me/.local/share/alire/toolchains/gnat_native_13.2.2_9be96041/bin:/Users/me/.local/share/alire/toolchains/gprbuild_22.0.1_b1220e2b/bin
Spawn:  0
```
</details>

or

```sh
open -a $HOME/Applications/GNATStudio.app --stdout=`tty` --stderr=`tty`
```


Take care of you PATH contents. Keep your path list to the minimum. Avoid Python, MacPorts, Brew paths. With the first command line, toolchains will be searched only in curent PATH. With the second command line, toolchains will be search in GS_GNAT_PATH and GS_GPR_PATH or in PATH if defined in gnatstudio_launcher.rc.


# References

- [ ] [[ANN] GNAT Studio 24.0 for macOS Ventura.](https://www.reddit.com/r/ada/comments/16bhkb4/ann_gnat_studio_240_for_macos_ventura)
