# iOS (WiFi)

## :o: Prérequis iOS

https://mycodetips.com/xcode/how-to-use-wireless-debugging-on-xcode-9-and-above-2491.html

Prerequis:
Équipement avec iOS 11.0 or plus récent installé
MacOS 10.12.4 ou récent avec XCode 9
Dev Mac Machine & Équipement doivent se trouver sur le même réseau (LAN)


## :a: Établir la connection avec iOS

Step 1: Connect your device via USB to the Mac Machine.

Step 2: Launch XCode 

Step 3: Go to ‘Window’ menu or Press (Shift + Command + 2)

Step 4: Select sub menu ‘Devices and Simulators’

Step 5: Select the ‘Devices’ tab and select the devices from the ‘Connected’ section.

Step 6: Select the ‘Connect via network’ checkbox and you are done.

Step 7: Now you can disconnect USB.

![image](../images/xcode-ios-wifi.png)

![image](../images/code-ios-privacy.png)


## :b: Vérifier la connection avec iOS


```
xcrun xctrace list devices
```
> Outputs :
```yaml
== Devices ==
iPad (14.2) (c087b75f0d4cc3ce7716ba095f0d4cc3ce7a87c)
ramena (3DE769BD-B8B6-58BE-B8B6-5AEB8B696FFE)
antarandolo (16.2) (00008110-001E2B8B6AB8B6801E)
```

Taper la commande: 

```
$ ns devices
```

Vérifier que l'équipement `iOS` aie une connection `Wifi`

![image](../images/ns-devices-wifi.png)

## :cl: Tools

```
brew info ios-deploy
```


> Outputs : (Not installed)
```yaml
==> ios-deploy: stable 1.12.2 (bottled), HEAD
Install and debug iPhone apps from the command-line
https://github.com/ios-control/ios-deploy
Not installed
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/ios-deploy.rb
License: GPL-3.0-or-later and BSD-3-Clause
==> Requirements
Build: Xcode (on macOS) ✔
Required: macOS ✔
==> Options
--HEAD
        Install HEAD version
==> Analytics
install: 126 (30 days), 2,945 (90 days), 56,316 (365 days)
install-on-request: 124 (30 days), 2,941 (90 days), 56,233 (365 days)
build-error: 3 (30 days)
```

> Outputs : (Installed) adds 2 lines
```yaml
/usr/local/Cellar/ios-deploy/1.12.2 (5 files, 261.4KB) *
  Poured from bottle using the formulae.brew.sh API on 2023-05-08 at 15:35:07
```

> Outputs : (Installed)
```yaml
==> ios-deploy: stable 1.12.2 (bottled), HEAD
Install and debug iPhone apps from the command-line
https://github.com/ios-control/ios-deploy
/usr/local/Cellar/ios-deploy/1.12.2 (5 files, 261.4KB) *
  Poured from bottle using the formulae.brew.sh API on 2023-05-08 at 15:35:07
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/ios-deploy.rb
License: GPL-3.0-or-later and BSD-3-Clause
==> Requirements
Build: Xcode (on macOS) ✔
Required: macOS ✔
==> Options
--HEAD
       Install HEAD version
==> Analytics
install: 126 (30 days), 2,945 (90 days), 56,316 (365 days)
install-on-request: 124 (30 days), 2,941 (90 days), 56,233 (365 days)
build-error: 3 (30 days)
```
