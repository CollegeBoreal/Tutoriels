# :green_apple: Apple


## :a: MacOS 

Installer [MacOS](MacOS.md)


## :b: Development Tools

https://medium.com/xcblog/top-5-command-line-tools-for-ios-developer-91c0455247f0

:one: xcrun ([Xcode](https://developer.apple.com/xcode/) Run)

- [ ] Simulator List


```
% xcrun simctl list
```

- [ ] change xcrun developer path

https://stackoverflow.com/questions/11456918/change-xcrun-developer-path

```
% sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

## :ab: Apple Silicon

https://medium.com/better-programming/apple-silicon-the-dev-tools-that-work-and-dont-work-yet-5288452b9b4a


- [ ] Virtualization Software

Docker: Not working. Native support won’t be ready before February 2021 due to Golang dependency. See the official blog post.

VMWare: Not working. Native support on the way, but no timeline yet.

Parallels Desktop: Not working. Native support on the way, but no timeline yet.

VirtualBox: Not working with no news of whether or it ever will be available.
Tools

Homebrew: There will be no native support for months to come. It can be installed via Rosetta 2, but expect a “very broken experience.”

- [ ] IDEs

Eclipse: Works on Rosetta 2.

Visual Studio Code: Works on Rosetta 2. An experimental build for Apple Silicon is available. Issues can be tracked on GitHub.

JetBrains IDEs: Should all work on Rosetta 2 (e.g. IntelliJ, PyCharm, WebStorm), but not natively. See status on JetBrains.

Android Studio: The IDE works, but Android emulators do not (source, source).

- [ ] Languages

Java: Works natively.

Node.js: Works on Rosetta 2, but not natively. Status tracked on GitHub.

Python: Should work natively by the looks of this issue.

R: Works on Rosetta 2, but not natively. See the official blog.

Golang: Seems buggy on Rosetta 2, but native support coming in February 2021.

Rust: Works on Rosetta 2, but no timeline for native support.

- [ ] Frameworks

.NET / .NET Core: .NET 5 works on Rosetta 2, whereas .NET 6 will work natively.

Flutter: Works on Rosetta 2, but you’ll need to develop on a physical device. See the official Wiki and the issue on GitHub.

Electron: Supported natively in 11.0.0. See release note.

- [ ] Libraries

Tensorflow: Supported natively by Apple’s private forked version of Tensorflow.


