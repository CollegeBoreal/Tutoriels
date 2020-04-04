## Tools pour lire du JSON

:o: Install JQ

:a: Windows

```
PS > choco install jq
```

:b: Mac

```
% brew install jq
```

:ab: Exemples

```
% curl 'https://api.github.com/users/collegeboreal' | jq '. | { nom: .login, lieu: .location}'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1427  100  1427    0     0   9266      0 --:--:-- --:--:-- --:--:--  9206
{
  "nom": "CollegeBoreal",
  "lieu": "Toronto, Canada"
}
```

## Powershell JSON


```
PS C:\> $x = [XML]"<banana><stem>brown</stem><peel>yellow</peel><flesh>white</flesh></banana>"
PS C:\> $x.banana.peel
yellow
```

```
PS C:\> $x = ConvertFrom-Json -InputObject '[{"banana" : {"stem" : "brown", "peel" : "yellow", "flesh" : "white"}}]'
PS C:\> $x.banana.peel
yellow
```



```
PS C:\> $x = New-Object PSObject -Property @{banana = New-Object PSObject -Property @{stem = "brown"; peel = "yellow"; flesh = "white"}}
PS C:\> $x = New-Object PSObject -Property `
                     @{ `
                        banana = New-Object PSObject -Property `
                           @{ `
                               stem = "brown"; peel = "yellow"; flesh = "white"
                           }
                      }
PS C:\> $x.banana.peel
yellow
```

```
PS C:\> $x = @{banana = @{stem = "brown"; peel = "yellow"; flesh = "white"}}
PS C:\> $x.banana.peel
```
