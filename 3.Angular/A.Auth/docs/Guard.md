# Guard

https://angular.io/guide/router#milestone-5-route-guards


```bash
$ ng generate module pages --routing
```

```bash
$ ng generate component pages/pages
```


```html
<h3>ADMIN</h3>
<nav>
  <a routerLink="./" routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
  <a routerLink="./crises" routerLinkActive="active">Manage Crises</a>
  <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
</nav>
<router-outlet></router-outlet>
```

```bash
$ ng generate component pages/pages-dashboard
```

```bash
ng generate guard auth/auth
```
