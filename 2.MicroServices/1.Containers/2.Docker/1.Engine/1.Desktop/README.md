# Desktop


https://docs.docker.com/desktop/

## :o: Installation

:pushpin: Windows

```
PS > choco install docker-desktop -y
```

- [ ] [Docker Install Failure on Windows](https://github.com/docker/for-win/issues/9758)


> The process cannot access the file 'C:\Program Files\Docker\Docker' because it is being used by another process.
>   at CommunityInstaller.FileSystem.<Delete>d__2.MoveNext()
  
```
PS> choco install docker-desktop --upgrade --force 
```

:pushpin: MacOS

```
$ brew cask install docker-desktop
```
