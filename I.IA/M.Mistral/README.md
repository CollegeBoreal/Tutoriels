


## 3️⃣ Utiliser le modèle Mistral :wind_face: 

- [ ] À la première utilisation le modèle mistral est installé (pull)
- [ ] le prompt AI apparait `>>>`

```bash
ollama run mistral          
```
<details>

```lua
pulling manifest 
pulling f5074b1221da: 100% ▕████████████████████████████████████████████████████████████████████████████████▏ 4.4 GB                     
pulling 43070e2d4e53: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  11 KB                      
pulling 1ff5b64b61b9: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  799 B                      
pulling ed11eda7790d: 100% ▕████████████████████████████████████████████████████████████████████████████████▏   30 B                      
pulling 1064e17101bd: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  487 B                         
verifying sha256 digest 
writing manifest 
success
```
</details>

```
>>> Send a message (/? for help)
```

```
>>> Est-ce que Mistral est une compagnie de IA subventionné par le gouvernement Français? 
```
> Oui, Mistral est une entreprise française de recherche en intelligence artificielle créée en février 2019 par Xavier Amatriain, 
Frédéric Chazal et Yoshua Bengio. L'entreprise bénéficie d'un financement du gouvernement français via le "Plan AI", un projet visant à 
faire de la France une puissance mondiale majeure en technologie de l'IA. Cependant, il faut noter que alors que l'entreprise reçoit des 
fonds du gouvernement français, elle opère en tant qu'entreprise privée.


### Un résumé en français des commandes disponibles pour Mistral AI :

* `/set` : Permet de définir des variables de session, qui peuvent être utilisées dans votre conversation avec Mistral.
* `/show` : Affiche des informations sur le modèle actuellement chargé, y compris son nom et ses capacités.
* `/load <model>` : Charge un modèle spécifique pour l'utilisation dans votre conversation avec Mistral.
* `/save <model>` : Sauvegarde votre session actuelle en tant que nouveau modèle qui peut être chargé plus tard.
* `/clear` : Efface le contexte de la session, ce qui termine effectivement la conversation avec Mistral.
* `/bye` : Quitte la conversation avec Mistral.
* `/?` ou `/help` : Fournit une aide pour un commande spécifique.
* `/? shortcuts` : Affiche une liste de raccourcis clavier qui peuvent être utilisés dans votre conversation avec Mistral.
* `"""` : Permet de commencer un message multiligne, ce qui peut être utile lorsque vous entrez des commandes longues ou complexes.

⚠️ Pour l'historique des conversations, `Mistral` utilise le fichier `history` dans le répertoire par défaut `~/.ollama`. Cependant, il est important de noter que les contenus de ce fichier sont stockés localement sur votre appareil et ne sont partagés avec personne d'autre par défaut.

---

## :three: **Ollama**:

**Ollama fonctionne vraiment comme Docker**, mais pour les modèles IA au lieu des conteneurs. Voici la comparaison :

### 🪗 Ollama ↔ Docker (Parallèle)

| Ollama | Docker | Rôle |
|--------|--------|------|
| `ollama pull mistral` | `docker pull ubuntu` | Télécharger l'image/modèle |
| `ollama list` | `docker images` | Lister les images/modèles téléchargés |
| `ollama run mistral` | `docker run ubuntu` | Démarrer un conteneur/instance |
| `ollama ps` | `docker ps` | Voir les conteneurs/instances en cours |
| `ollama stop mistral` | `docker stop conteneur` | Arrêter une instance active |
| `ollama rm mistral` | `docker rmi ubuntu` | Supprimer l'image/modèle téléchargé |

### Différences clés

Bien que le workflow soit similaire, il y a quelques distinctions importantes :

1. **Taille** : Les modèles sont beaucoup plus gros (4,4 Go pour Mistral contre quelques Mo pour les conteneurs)
2. **Persistance** : Les modèles restent en mémoire GPU après utilisation (comme le comportement de `--rm` de Docker)
3. **Isolation** : Moins isolés que les conteneurs - les modèles partagent les ressources système
4. **Objectif** : Exécute de l'inférence vs exécute des applications

### Ce que tu viens de faire

```bash
ollama stop mistral:latest  # Comme 'docker stop' - arrête l'instance en cours
ollama list                 # Comme 'docker images' - montre les modèles téléchargés (toujours là)
ollama ps                   # Comme 'docker ps' - confirme que rien ne tourne
```

Le modèle est toujours téléchargé et prêt à être utilisé (4,4 Go sur le disque), mais il ne consomme plus ta mémoire GPU ou ton calcul. Pour l'utiliser à nouveau :

```bash
ollama run mistral:latest  # Démarre une nouvelle instance (comme docker run)
```

Ce modèle mental te sera très utile - le workflow de type Docker rend Ollama très intuitif une fois que tu reconnais le motif !


