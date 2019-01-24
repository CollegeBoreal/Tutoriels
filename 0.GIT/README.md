# :octocat: GIT 

## Decouvrir git

https://www.lynda.com/fr/Git-tutorials/Decouverte-Git/546576-2.html?org=collegeboreal.ca

## Installation de la gestion de source

* git Client : https://git-scm.com/downloads  
* [Livre git](https://git-scm.com/book/fr/v2)

## Les premiers pas avec git

* Ouvrir la fenetre Git bash
* Creer un repertoire pour faire du developpement
```
$ mkdir Developer
```
* changer de repertoire pour faire du developpement
```
$ cd Developer
```
* Cloner votre premier repertoire git
```
$ git clone git@github.com:CollegeBoreal/INF1042-17H.git
$ cd INF1042-17H
```

## Creer son premier fichier sous git (utiliser vi)
* Creer un fichier et l'editer 
```
$ nano 300098957.md
```
* mettre le fichier en scene (add to stage)
```
$ git add 300098957.md
```
> Vérifier son status avec (doit etre vert)  
    ```
    $ git status
    ```

* donner un commentaire aux fichiers a enregistrer (commit)
```
$ git commit -m "Mon commentaire"
```
* envoyer les modifications locales au serveur github
```
$ git push origin master
```

## Pour mettre ajour ses informations personnelles

```
$ git config --global --edit
```

```
# This is Git's per-user configuration file.
[user]
# Please adapt and uncomment the following lines:
        name = MonNom
        email = MonCourriel@me_remplacer.com
```


## Metter a jour mon repertoire local (pull)
```
$ git pull 
```

# Suppressions

## Supprimer un fichier appellé `monfichier.md`
```
$ git rm monfichier.md 
```

## Supprimer (réccursivement) un répertoire appellé `monrepertoire`
```
$ git rm -rf monrepertoire 
```

# Configurer git (Clé personnelle)

### .ssh/config
```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github.com.pk
```

# Tutoriel sur Vim (Éditeur utilisé par Unix)

https://www.filesilo.co.uk/video-tutorials/introduction-to-vim/


### Git guidelines:
```
1. git clone git@github.com:CollegeBoreal/Promotion.git
2. cd Promotion
3. git checkout -b add-feature-A
4. # Work on feature A
5. git add ...
6. git commit -m ...
7. # Push the branch to github so you can create a PR
8. git push origin add-feature-A
9. # Create a PR in github, dicuss etc
10. # Do some more work
11. git add ...
12. git commit -m ...
13. git push origin add-feature-A
14. # Before merging the PR, squash any unnecessary commits, and maybe rebase the branch to
15. git fetch origin
16. git rebase -i origin/master
17. # You need to force-push here. Make sure you are pushing to the correct branch! (not master!)
18. git push -f origin add-feature-A
19. # Now merge the PR in github
20. # Finally delete the topic branch (via github web or cli)
```
=======
tutoriel test # Tutoriel
