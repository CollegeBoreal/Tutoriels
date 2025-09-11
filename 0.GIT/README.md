# GIT 

## :anatomical_heart: Annonces

- [ ] :warning: [We updated our RSA SSH host key](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key)
- [ ] :octocat: [Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [ ] :tada: [Le pack etudiant](https://education.github.com/pack)
- [ ] [:bulb: github-flow](https://enterprise.github.com/downloads/en/github-flow-cheatsheet.pdf)
- [ ] [:+1: Markdown](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)

## :1st_place_medal: Decouvrir git

- [ ] [LinkedIn Learning: Découvrir Git With Jérôme Megel](https://fr.linkedin.com/learning/decouvrir-git)
- [ ] [LinkedIn Learning: GitOps Foundations](https://www.linkedin.com/learning/gitops-foundations)
- [ ] [10 git commands you should know](https://towardsdatascience.com/10-git-commands-you-should-know-df54bea1595c)

## :zero: Installation

:point_right: Suivre l'[Installation](Installation)

## :one: Les premiers pas avec git

* Ouvrir une fenêtre de ligne de commande
* Creer un repertoire pour faire du développement (en anglais et avec `D` en majuscule)
```sh
mkdir Developer
```
* changer de repertoire pour faire du développement
```sh
cd Developer
```

* Cloner votre premier repertoire git

   - aller sur la page github du cours
   
   - cliquer sur le bouton `clone or download`
   
   - cliquer sur le `presse papier` pour mettre en mémoire l'URL du répertoire

   <img src="images/NomDeURL.png" width=482 heigth=212></image>

   - coller l'URL du répertoire en mémoire dans le presse papier avec RIGHT-CLICK/PASTE
   
   - * example

   ```sh
   git clone https://github.com/CollegeBoreal/INF1039-202-20A-01.git
   ```
   
* allez dans le répertoire du cours

```sh
cd INF1039-202-20A-01
```

## :two: Créer son premier fichier sous git (utiliser vi)
* Creer un fichier et l'éditer, par example un fichier ayant votre :id: Boréal avec l'extension `MarkDown` $\textbf{.md}$
```sh
nano 300098957.md
```
* mettre le fichier en scene (add to stage)
```sh
git add 300098957.md
```
> Vérifier son status avec (doit etre vert)  
```sh
git status
```

* donner un commentaire aux fichiers a enregistrer (commit)
```sh
git commit --message "Mon commentaire"
```

:warning: Se referer à la section `Configuration d'informations personnelles` pour le premier `commit`

* envoyer les modifications locales au serveur github
```sh
git push
```

## :three: Configurer GIT `~/.gitconfig`

:bulb: pour soumettre son travail vers `github.com`

* Changer l'éditeur par défaut de `vi` à `nano`

```sh
git config --global core.editor "nano"
```

* Editer son nom utilisateur `github` et son courriel

```sh
git config --global --edit
```

* Rajouter la section `[user]` et remplacer `MonNom` et `MonCourriel@me_remplacer.com` par le votre

```
[core]
        editor = nano

[user]
# Please adapt and uncomment the following lines:
        name = MonNom
        email = MonCourriel@me_remplacer.com
```

## Metter à jour mon rèpertoire local (pull)
```sh
git pull 
```

# Suppressions

## Supprimer un fichier appellé `monfichier.md`
```sh
git rm monfichier.md 
```

## Supprimer (réccursivement) un répertoire appellé `monrepertoire`
```sh
git rm -rf monrepertoire 
```

# Configurer git (Clé personnelle) [Documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

### ~/.ssh/config

:pushpin: Utilisation du port ssh par défaut :two::two:

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github.com.pk
```

:pushpin: Utilisation du port ssh à travers TLS :four::four::three:


```
Host github.com
 HostName ssh.github.com
 IdentityFile ~/.ssh/github.com.pk
 Port 443
```

# [http buffer](https://stackoverflow.com/questions/6842687/the-remote-end-hung-up-unexpectedly-while-git-cloning)

```
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
```

* Modifier le buffer

```
$ git config --global http.postBuffer 1048576000
```

La suite du fichier de configuration `~/.gitconfig` devrait ressembler à ceci

```
...

[http]
        postBuffer = 1048576000
```


# Gestion des fichiers volumineux

* Utiliser LFS (Large File System)

```
$ git lfs install
```

La suite du fichier de configuration `~/.gitconfig` devrait ressembler à ceci

```
...

[filter "lfs"]
        clean = git-lfs clean -- %f
        smudge = git-lfs smudge -- %f
        process = git-lfs filter-process
        required = true
```

# Git & zsh

https://www.howtogeek.com/362409/what-is-zsh-and-why-should-you-use-it-instead-of-bash/



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
