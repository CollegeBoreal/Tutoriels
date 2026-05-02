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
```powershell
Password:
Checksumming Protective Master Boot Record (MBR : 0)…
Protective Master Boot Record (MBR :: verified   CRC32 $E029E72C
Checksumming GPT Header (Primary GPT Header : 1)…
 GPT Header (Primary GPT Header : 1): verified   CRC32 $2B999CE7
Checksumming GPT Partition Data (Primary GPT Table : 2)…
GPT Partition Data (Primary GPT Tabl: verified   CRC32 $61EFD6FA
Checksumming  (Apple_Free : 3)…
                    (Apple_Free : 3): verified   CRC32 $00000000
Checksumming EFI System Partition (C12A7328-F81F-11D2-BA4B-00A0C93EC93B : 4)…
............
EFI System Partition (C12A7328-F81F-: verified   CRC32 $B54B659C
Checksumming disk image (Apple_HFS : 5)…
....................................................................................................................................
          disk image (Apple_HFS : 5): verified   CRC32 $BB32999D
Checksumming  (Apple_Free : 6)…
............................................................................................................................................
                    (Apple_Free : 6): verified   CRC32 $00000000
Checksumming GPT Partition Data (Backup GPT Table : 7)…
GPT Partition Data (Backup GPT Table: verified   CRC32 $61EFD6FA
Checksumming GPT Header (Backup GPT Header : 8)…
  GPT Header (Backup GPT Header : 8): verified   CRC32 $89F48990
verified   CRC32 $69157643
/dev/disk4          	GUID_partition_scheme          	
/dev/disk4s1        	EFI                            	
/dev/disk4s2        	Apple_HFS                      	/Volumes/Docker
```

- [ ] Copy
  
```
cp -r /Volumes/Docker/Docker.app /Applications
```

- [ ] Unmount

```
sudo hdiutil detach /Volumes/Docker 
```
> Returns
```
Password:
"disk4" ejected.
```

:bulb: Test 

- [ ] List context
  
```
docker context ls
```
> Returns  
```
NAME                         DESCRIPTION                               DOCKER ENDPOINT                                     KUBERNETES ENDPOINT                                    ORCHESTRATOR
desktop-linux                                                          unix:///Users/Myself/.docker/run/docker.sock
```                                                

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
