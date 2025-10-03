# [Branch](https://git-scm.com/docs/git-branch)

Un branche sert à créer une section à part dans l'arbre du référentiel github.

Si on veut appeller notre branche `300098957` avec ton :id: Boreal par exemple `300098957`

:round_pushpin: Créer une branche 

```sh
git branch 300098957
```

:round_pushpin: Accéder à la branche

```sh
git checkout 300098957
```

:round_pushpin: Vérifier l'accès à la branche

```sh
git status
```
<details><div style="user-select: none;"><pre>
On branch 300098957
nothing to commit, working tree clean
</pre></div></details>

:round_pushpin: Soumettre les modifications de la branche

* avant de soumettre, rajouter le code à la branche `git add .`, mettre en scene `git commit -m "mon message"`

```
$ git push origin 300098957
```

:round_pushpin: Revenir à la branche principale `main`

```
$ git checkout main
```

<hr>

# Références

Utiliser les [branches](https://www.atlassian.com/git/tutorials/using-branches)


## :m: List Branches in Git

https://www.jquery-az.com/list-branches-git/


```sh
git branch
```
<details><div style="user-select: none;"><pre>
* 300098957
  main  
</pre></div></details>
```


```sh
git branch --all
```
<details><div style="user-select: none;"><pre>
* 300098957
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/origin/master
</pre></div></details>

```sh
git branch --remote
```
<details><div style="user-select: none;"><pre>
  origin/300098957
  origin/HEAD -> origin/main
  origin/main
  origin/master
</pre></div></details>

```
$ git show-branch    
[master] Update README.md
```
<details><div style="user-select: none;"><pre>
! [main] 📚 GUIDE COMPLET - Tous les scripts PowerShell avec arborescence
 * [300098957] 📚 GUIDE COMPLET - Tous les scripts PowerShell avec arborescence
--
+* [main] 📚 GUIDE COMPLET - Tous les scripts PowerShell avec arborescence
</pre></div></details>

```
% git show-branch --all   
* [master] Update README.md
 ! [origin/HEAD] Update README.md
  ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12] Bump fstream from 1.0.11 to 1.0.12 in /angular-cli-shaka-player/frontend
   ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3] Bump handlebars in /angular-cli-shaka-player/frontend
    ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1] Bump js-yaml from 3.12.0 to 3.13.1 in /angular-cli-shaka-player/frontend
     ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15] Bump lodash in /angular-cli-shaka-player/frontend
      ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2] Bump lodash.mergewith in /angular-cli-shaka-player/frontend
       ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2] Bump mixin-deep in /angular-cli-shaka-player/frontend
        ! [origin/master] Update README.md
---------
*+      + [master] Update README.md
      +   [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2] Bump lodash.mergewith in /angular-cli-shaka-player/frontend
     +    [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15] Bump lodash in /angular-cli-shaka-player/frontend
    +     [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1] Bump js-yaml from 3.12.0 to 3.13.1 in /angular-cli-shaka-player/frontend
   +      [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3] Bump handlebars in /angular-cli-shaka-player/frontend
  +       [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12] Bump fstream from 1.0.11 to 1.0.12 in /angular-cli-shaka-player/frontend
       +  [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2] Bump mixin-deep in /angular-cli-shaka-player/frontend
--------- [master^] Merge branch 'master' of github.com:setrar/players
```

```
$ git show-branch --remote
! [origin/HEAD] Update README.md
 ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12] Bump fstream from 1.0.11 to 1.0.12 in /angular-cli-shaka-player/frontend
  ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3] Bump handlebars in /angular-cli-shaka-player/frontend
   ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1] Bump js-yaml from 3.12.0 to 3.13.1 in /angular-cli-shaka-player/frontend
    ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15] Bump lodash in /angular-cli-shaka-player/frontend
     ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2] Bump lodash.mergewith in /angular-cli-shaka-player/frontend
      ! [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2] Bump mixin-deep in /angular-cli-shaka-player/frontend
       ! [origin/master] Update README.md
--------
+      + [origin/HEAD] Update README.md
     +   [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2] Bump lodash.mergewith in /angular-cli-shaka-player/frontend
    +    [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15] Bump lodash in /angular-cli-shaka-player/frontend
   +     [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1] Bump js-yaml from 3.12.0 to 3.13.1 in /angular-cli-shaka-player/frontend
  +      [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3] Bump handlebars in /angular-cli-shaka-player/frontend
 +       [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12] Bump fstream from 1.0.11 to 1.0.12 in /angular-cli-shaka-player/frontend
      +  [origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2] Bump mixin-deep in /angular-cli-shaka-player/frontend
-------- [origin/HEAD^] Merge branch 'master' of github.com:setrar/players
```


## suppression

### 🔹 Supprimer une branche locale

```bash
git branch -d nom_branche
```

* `-d` = suppression “sûre” (ne supprime pas si la branche contient des commits non fusionnés).
* `-D` = suppression forcée (supprime même si non fusionnée).

Exemple :

```bash
git branch -D feature/test
```

---

### 🔹 Supprimer une branche distante

```bash
git push origin --delete nom_branche
```

Exemple :

```bash
git push origin --delete feature/test
```

---

⚠️ Attention : il faut **se placer sur une autre branche** avant de supprimer celle que vous voulez enlever.
Exemple :

```bash
git checkout main
```

:m: Create a branch from a tag

https://stackoverflow.com/questions/10940981/how-to-create-a-new-branch-from-a-tag

```
$ git checkout -b newbranch v1.0
```

or 

```
$ git branch newbranch v1.0
$ git checkout newbranch
```

