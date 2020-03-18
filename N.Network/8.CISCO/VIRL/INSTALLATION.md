 
# Comment instaler VIRL avec iso
graver un DVD ave l'iso ou faire une usb bootable
# Activation de la virtualisatio dans le BIOS 

![virl-installation-on-bare-metal-standalone-server-1](https://user-images.githubusercontent.com/25088510/37746776-346e650c-2d52-11e8-8302-5d66ace01ba0.png)

![virl](https://user-images.githubusercontent.com/25088510/37746653-a50b7710-2d51-11e8-98c1-ea07fd183ced.png)


![virl 1](https://user-images.githubusercontent.com/25088510/37746769-2d6c622c-2d52-11e8-99ca-b44734d16992.png)


# les Prerequis

Minimum 60GB de disque dure<br />
Minimum 4GB de Ram
si on souhate lancer la simulation de plus de 10 neouds en meme temps, il faut donc 8GB 
 5 Interfaces de connection reseau

# Instalation
pour l'instalation on doit booter sur " live-boot VIRL for charges before install"

![installation](https://user-images.githubusercontent.com/25088510/37747854-8a24f0a6-2d57-11e8-9793-534cc3d277c6.png)

une fois l'installation terminée, on peut se connecter sur virl avec l'identifiant: virl et mot de passe VIRL

# Configuration reseau
Elle se confugure comme suit: <br/>
sudo  vi /etc/network/interfaces

iface eth0 inet static <br/>
  address a.a.a.a <br/>
   netmask m.m.m.m <br/>
   gateway g.g.g.g <br/>
   dns-nameservers s.s.s.s n.n.n.n<br/>
   dns-search xxx.com/ca
   
   # Example 
iface eth0 inet stati c<br/>
   address 10.13.237.6 <br/>
   netmask 255.255.255.128 <br/>
   gateway 10.13.237.1 <br/>
   dns-nameservers 10.10.99.2 10.10.99.3 <br/>
   dns-search collegeboreal.on.ca <br/>
   Sauvegarder et quiter
   en suit redemarer 
   avec: <br/> sudo reboot now
   # Activation de Virl
   Pour activer Virl on se connect sur le server a traver le browser dans ce exemple  sur 10.13.237.6 <br/>
   user: uwmadmin <br/> password: password 
   
   <img width="1671" alt="activ" src="https://user-images.githubusercontent.com/25088510/38007124-ddc55558-3215-11e8-9209-37c4d75a8d72.png">
 
      
   on click sur Virl server et selection salt confuguration et status  <br/> 
   
   <img width="1264" alt="virl act" src="https://user-images.githubusercontent.com/25088510/38006777-68bd8902-3214-11e8-87fb-247b7b5dee5f.png">
 
 et on cole ou import la cle d'activation dans le champ Minion private RSA  et on redamare le serveur <br/> Le resultat final est le suivant 
 
 <img width="1426" alt="result" src="https://user-images.githubusercontent.com/25088510/38007362-1aba9972-3217-11e8-95b7-a652c27b404d.png">


   
   

