# Branch



## :m: List Branches in Git

https://www.jquery-az.com/list-branches-git/


```
$ git branch
* master
```


```
$ git branch --all
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2
  remotes/origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2
  remotes/origin/master
```


```
$ git branch --remote
  origin/HEAD -> origin/master
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/fstream-1.0.12
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/handlebars-4.5.3
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/js-yaml-3.13.1
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash-4.17.15
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/lodash.mergewith-4.6.2
  origin/dependabot/npm_and_yarn/angular-cli-shaka-player/frontend/mixin-deep-1.3.2
  origin/master
```


```
$ git show-branch    
[master] Update README.md
```

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

