# :o: Obelisk

To build the **Obelisk starter app**, you'll need **Nix**, because Obelisk's entire toolchain is built around it. Obelisk supports web, Android, and iOS targets from the same Haskell codebase. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

## 1. Install Nix

On Linux or macOS:

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```

Then restart your shell.

Verify:

```bash
nix --version
```

Obelisk uses Nix for reproducible builds and dependency management. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 2. Clone Obelisk

```bash
git clone https://github.com/obsidiansystems/obelisk.git
cd obelisk
```

Enter the development environment:

```bash
nix-shell
```

The Obelisk command-line tool `ob` will become available. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 3. Create a New Project

From any directory:

```bash
ob init my-app
cd my-app
```

This generates the standard project structure:

```text
my-app/
├── backend/
├── frontend/
├── common/
├── config/
└── static/
```

The `common` package is where you place code shared by client and server. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 4. Run Locally

Start the development server:

```bash
ob run
```

Open:

```text
http://localhost:8000
```

Obelisk provides live reload while editing your code. [\[developer....ndroid.com\]](https://developer.android.com/samples/), [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

***

## 5. Modify the Frontend

Edit:

```text
frontend/src/Frontend.hs
```

A simple example:

```haskell
{-# LANGUAGE OverloadedStrings #-}

module Frontend where

import Obelisk.Frontend
import Obelisk.Route

frontend :: Frontend (R FrontendRoute)
frontend = Frontend
  { _frontend_head = blank
  , _frontend_body = text "Hello from Obelisk!"
  }
```

Save and refresh the browser. The page updates automatically. [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 6. Build for Android

Install Android SDK and required tooling.

Then build:

```bash
ob android build
```

The build process creates an APK. Obelisk includes Android target support as part of its mobile workflow. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

Install to a connected device:

```bash
adb install app.apk
```

***

## 7. Build for iOS

On macOS:

```bash
ob ios build
```

Open the generated Xcode project and deploy to a simulator or device. Obelisk supports iOS targets alongside Android. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## Is it beginner-friendly?

Honestly: **no**.

If your experience is:

* Flutter → easy
* React Native → moderate
* Obelisk → advanced

You'll need to learn:

* Haskell
* Functional Reactive Programming (Reflex)
* Nix
* Obelisk project structure

before becoming productive. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

For a chess app as a personal Haskell project, Obelisk is a great learning experience. For quickly shipping a mobile app, Flutter is considerably easier and has far more tutorials and community support. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)
