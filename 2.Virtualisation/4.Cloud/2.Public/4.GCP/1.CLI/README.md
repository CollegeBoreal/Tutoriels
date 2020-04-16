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


[Where-does-gcloud-store-its-defaults](https://stackoverflow.com/questions/49212350/where-does-gcloud-store-its-defaults)

```
PS C:\Windows\system32> gcloud config list
[core]
account = 399999999@collegeboreal.ca
account = 53434267881522-compute@developer.gserviceaccount.com
disable_usage_reporting = True
project = b99999999

Your active configuration is: [default]
```


:pushpin: Set le projet

```
% gcloud config set project b300098957
Updated property [core/project].
```

Gérer son cluster

```
PS > gcloud container clusters list
NAME   LOCATION       MASTER_VERSION  MASTER_IP      MACHINE_TYPE  NODE_VERSION  NUM_NODES  STATUS
kuron  us-central1-a  1.16.8-gke.8    104.197.255.8  g1-small      1.16.8-gke.8  3          RUNNING
```
