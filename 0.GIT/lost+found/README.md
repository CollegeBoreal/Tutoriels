# Log et lost+found


## :m: Log pour rechercher des fichiers perdus


https://git-scm.com/docs/pretty-formats

:pushpin: Log simple

```
$ git log --pretty=oneline | grep 012d8
```

:pushpin: Log formatté

```
$ git log --pretty=format:"Qui? %an -> Tag %h, Quand? %ar -m \"%s\"" 300112017
```

:pushpin: log d'un répertoire 'deleté' `--`

```
$  git log --pretty=format:"Qui? %an -> Tag %h, Quand? %ar -m \"%s\"" -- .Q.Query 
Qui? setrar -> Tag fc5f8ad, Quand? 2 days ago -m "."
Qui? Jacques -> Tag 9cde467, Quand? 9 days ago -m "Jazz"
```

https://stackoverflow.com/questions/30875205/restore-a-deleted-folder-in-a-git-repo

:pushpin: Reperer le tag d'un repertoire perdu

```
$ git log --pretty=oneline -- b300106918-tab-ng  
```

## :m: Lost and found

:pushpin:  Recupere les fichiers a un endroit precis

```
$ git reset --hard  f49cefab42bbc60f6c29d6251d1f8ebf0eebfc14
```


:pushpin: https://ohshitgit.com/
