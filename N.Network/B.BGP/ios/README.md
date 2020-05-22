# Utilisation du protocole BGP :

BGP(Border Gateway Protocol) est principalement utilise entre les operateurs d’accès a internet pour l’échange de routes. 

La plupart des utilisateurs finaux d’internet n’ont qu’une seule connexion a un fournisseur d’accès a internet .

Dans ce cas ,BGP est inutile car une route par défaut est suffisante .

Cependant  une entreprise qui serait connecte de façon redondante a plusieurs FAI(multi-homing)pourrait obtenir un numéro de système autonome( Autonomous System(AS)) propre et établir des sessions BGP avec chacun des fournisseurs .

Outre internet ,des réseaux IP prives peuvent utiliser BGP, par exemple pour interconnecter des réseaux locaux utilisant OSPF.


### Les commandes de base pour config BGP

```
Router(config)#router bgp <Autonomous system number>
Router(config-router)#network A.B.C.D  mask MSR (mask s/reseau)
Router(config-router)#neighbor A.B.C.D remote-as <Autonomous system number>
```

### Les commandes de vérification  BGP

```
Show ip bgp ! affiche base de donnees BGP complete
Show ip bgp summary ! montre un resume  BD  BGP
Show ip bgp neighbors ! affiche info detaillees sur les voisins BGP
Show  ip bgp neighbors <@ip> ! affiche info voisin bgp cible
Show ip route ! table  complete
Show ip route bgp ! uniquement  gerer par bgp
```

### Les commandes de réinitialisation BGP :

```
clear  ip bgp 
clear  ip bgp <ASN>
clear  ip bgp <@IP>
```

