# Guard


:one: Generate the `Auth Guard`

```bash
$ ng generate guard @auth/auth --skipTests
```

* pick CanActivate by pressing spacebar

```
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ CanActivate
 ◯ CanActivateChild
 ◯ CanLoad
```


```typescript
import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {NbAuthService} from '@nebular/auth';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          } else {
            return true;
          }
        }),
      );
  }}

```


## References:

https://angular.io/guide/router#guard-the-admin-feature

https://github.com/akveo/nebular/blob/master/docs/articles/auth-guard.md

