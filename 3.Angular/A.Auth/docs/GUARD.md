# Guard


:one: Generate the `Auth Guard`

```bash
$ ng generate guard @auth/auth --skipTests
```

* When asked, pick `CanActivate` by pressing spacebar

```
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ CanActivate
 ◯ CanActivateChild
 ◯ CanLoad
```

* Replace the `auth-guard.ts` source code with the below snippet:

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

:two: Configure the routing with `AuthGuard`

* Replace/Adapt the `app-routing.module.ts` source code with the below snippet:

```typescript
import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent
} from '@nebular/auth';
import {AuthGuard} from './@auth/auth.guard';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule', canActivate: [AuthGuard]},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      }
    ],
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' },
];

// https://angular.io/guide/router#appendix-locationstrategy-and-browser-url-styles
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

:arrow_right: [Next](./ACCESS.md)

## References:

https://angular.io/guide/router#guard-the-admin-feature

https://github.com/akveo/nebular/blob/master/docs/articles/auth-guard.md

