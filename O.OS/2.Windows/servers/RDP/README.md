# Utilisation a distance

:a: avec Remote Desktop (pour le client)

:pushpin: Ouvrir une autre fenetre CMD en remote desktop

Taper `CTRL`+`ALT`+`END` (au lieu des touches `CTRL`+`ALT`+`DEL`)

Pour :apple: Apple Mac, utiliser `CTRL`+`OPT`+`DEL`)

:pushpin: Ouvrir un nouveau `Task Manager` en tapant sur `<Enter>`

<img src="images/TaskManager.png" width="736px" heigth="334px"></img>


:pushpin: Ouvrir le menu en tapant sur `TAB` vers `> More Details`

<img src="images/TaskManagerDetails.png" width="400px" heigth="396px"></img>


:pushpin: Task Manager Detail

* Appuyer `Espace` pour ouvrir le detail de la page `Task Manager`

* Appuyer sur `ALT`+`F` pour ouvrir une nouvelle tache dans le menu

<img src="images/TaskManagerTask.png" width="400px" heigth="396px"></img>


:pushpin: PowerShell

* Entrer `powershell` et enter pour ouvrir une nouvelle fenetre

<img src="images/TaskManagerPWSH.png" width="400px" heigth="396px"></img>



# :ab: Remote Desktop Services (pour le serveur)

https://www.dell.com/support/kbdoc/en-ca/000121424/how-to-install-remote-desktop-services

Ouvrir Powershell en tant qu'Administrateur

```
PS > Install-WindowsFeature Remote-Desktop-Services
```

ou

```
PS > Add-WindowsFeature Remote-Desktop-Services
```



Vérifier

```
PS > Get-WindowsFeature Remote-Desktop-Services  
```
> Retourne :
```yaml
Display Name                                            Name                       Install State
------------                                            ----                       -------------
[ ] Remote Desktop Services                             Remote-Desktop-Services        Available
```

:bulb: Si ça ne marche pas utiliser `sconfig.md`, l'option `Remote Desktop` existe

## Reference:

https://serverfault.com/questions/512231/open-a-new-cmd-console-on-windows-2012-server-core-after-closing-the-last-one



