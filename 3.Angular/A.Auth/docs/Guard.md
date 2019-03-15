# Guard


https://github.com/akveo/nebular/blob/master/docs/articles/auth-guard.md


```bash
$ ng generate module pages --routing
```

```bash
$ ng generate component pages/pages --flat --inline-template --inline-style --skipTests
```


```html
<h3>ADMIN</h3>
<nav>
  <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
</nav>
<router-outlet></router-outlet>
```

```bash
$ ng generate component pages/pages-dashboard
```

```bash
ng generate guard auth/auth
```

```
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ CanActivate
 ◯ CanActivateChild
 ◯ CanLoad
```


```typescript
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }
}
```

$ ng generate component pages/pages-dashboard --inline-template --inline-style --skipTests

```typescript
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pages-dashboard',
  template: `
    <p>
      pages-dashboard works! {{Password.result}}
    </p>
  `,
  styles: []
})
export class PagesDashboardComponent implements OnInit {

  Password = {
    result: String
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('populate data');
    this.getData()
      .subscribe(
        (data: Password) => {
          this.Password = data;
        },
        (err: any) => console.error('too bad' + err));
  }

  getData() {
    return this.http.get<string>('/api/badPassword');
  }
}
```

## References:

https://angular.io/guide/router#guard-the-admin-feature
