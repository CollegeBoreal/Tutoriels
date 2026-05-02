# :one: GCP CLI

## :o: Installation

:pushpin: Windows

```
PS > choco install gcloudsdk --ignore-checksums
```

:pushpin: MacOS

```
% brew cask install google-cloud-sdk
```


## :o: gcloud configuration

```
$ gcloud info
```

:round_pushpin: Set le projet

```
% gcloud config set project b300098957
Updated property [core/project].
```

:round_pushpin: Set la zone

```
$ gcloud config set compute/zone "us-central1-a"
```

[Where-does-gcloud-store-its-defaults](https://stackoverflow.com/questions/49212350/where-does-gcloud-store-its-defaults)

```
~/.config/gcloud
```

```
% gcloud config list                      
[compute]
zone = us-central1-a
[core]
account = 399999999@collegeboreal.ca
account = 534284581522-compute@developer.gserviceaccount.com
disable_usage_reporting = True
project = b300098957

Your active configuration is: [default]
```

