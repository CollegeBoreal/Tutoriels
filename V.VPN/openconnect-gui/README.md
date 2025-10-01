# VPN

## :ab: Application

Pour accéder au VPN du collège, on peut utiliser [Cisco AnyConnect](https://www.cisco.com/c/en_ca/products/security/anyconnect-secure-mobility-client) mais on peut également utiliser [Open Connect](http://www.infradead.org/openconnect/) qui permet de se connecter d'un PC et d'un Mac. Cet article utilise `Open Connect GUI`

## :o: Installation

:m: Sur Windows de [OpenConnect-GUI](https://chocolatey.org/packages/openconnect-gui)

```
PS > choco install openconnect-gui
```

:m: Sur Mac de [OpenConnect-GUI](https://chocolatey.org/packages/openconnect-gui)

```
% brew install openconnect-gui
```

## :a: Connection

:pushpin: Créer un nouveau profil avec les données suivantes:

* l'URL de l'adresse VPN de Boréal

* Votre ID Boréal

:bulb: Vérifiez que le protocole `Cisco AnyConnect` est sélectionné

<img src="images/OpenConnect-GUI_Edit.png" width="206" heigth="357"></img>

:pushpin: Se connecter avec le nouveau profil

<img src="images/OpenConnect-GUI_Flash.png" width="222" heigth="167"></img>

:pushpin: Se connecter avec un terminal (bash) ou RDC (Remote Desktop Connection)




:pushpin: Se déconnecter du profil


<img src="images/OpenConnect-GUI_Disconnect.png" width="222" heigth="167"></img>


# References

https://www.techrepublic.com/article/how-to-access-microsoft-remote-desktop-on-macos-sierra/
