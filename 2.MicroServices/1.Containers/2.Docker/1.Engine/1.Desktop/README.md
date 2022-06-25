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

- [ ] Download
  
```
wget https://desktop.docker.com/mac/main/arm64/Docker.dmg
```

- [ ] Mount

```
sudo hdiutil attach Docker.dmg
```
> Returns
```
Password:
Checksumming Protective Master Boot Record (MBR : 0)…
Protective Master Boot Record (MBR :: verified   CRC32 $B6AFC6FE
Checksumming GPT Header (Primary GPT Header : 1)…
 GPT Header (Primary GPT Header : 1): verified   CRC32 $A93AD470
Checksumming GPT Partition Data (Primary GPT Table : 2)…
GPT Partition Data (Primary GPT Tabl: verified   CRC32 $B42C6275
Checksumming  (Apple_Free : 3)…
                    (Apple_Free : 3): verified   CRC32 $00000000
Checksumming disk image (Apple_HFS : 4)…
...................................................................................................................................................................
          disk image (Apple_HFS : 4): verified   CRC32 $52EBE2E6
Checksumming  (Apple_Free : 5)…
..............................................................................................................................................................................
                    (Apple_Free : 5): verified   CRC32 $00000000
Checksumming GPT Partition Data (Backup GPT Table : 6)…
GPT Partition Data (Backup GPT Table: verified   CRC32 $B42C6275
Checksumming GPT Header (Backup GPT Header : 7)…
  GPT Header (Backup GPT Header : 7): verified   CRC32 $A325AE2A
verified   CRC32 $602BCED5
/dev/disk5          	GUID_partition_scheme          	
/dev/disk5s1        	Apple_HFS                      	/Volumes/Docker
```

- [ ] Copy
  
```
cp -r /Volumes/Docker/Docker.app /Applications
```

- [ ] Unmount

Finally unmount the image: sudo hdiutil detach /Volumes/<image>.

:bulb: Test 

- [ ] List context
  
```
docker context ls
```
> Returns  
```
NAME                         DESCRIPTION                               DOCKER ENDPOINT                                     KUBERNETES ENDPOINT                                    ORCHESTRATOR
desktop-linux                                                          unix:///Users/Myself/.docker/run/docker.sock               ```                                                

- [ ] use context
  
```
docker context use desktop-linux
```
> Returns
```
desktop-linux
Current context is now "desktop-linux"  
```
  
# References
  
- [ ] [Is there a command to install a dmg](https://apple.stackexchange.com/questions/73926/is-there-a-command-to-install-a-dmg)
