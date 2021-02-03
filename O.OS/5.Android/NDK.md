# NDK

## :x: [Downloads](https://developer.android.com/ndk/downloads)


## Installation

:computer: Sur Windows

```
$ choco install android-ndk
```

:apple: Sur MacOS

```
brew cask install adoptopenjdk8
brew cask install android-sdk

echo "export ANDROID_HOME=/usr/local/share/android-sdk" >> ~/.bash_profile
source ~/.bash_profile

touch ~/.android/repositories.cfg
sdkmanager --update
sdkmanager "platform-tools" "platforms;android-28"
```
