# Access the Pages Module

:one: Generate a new module `pages`

```bash
$ ng generate module pages --routing
```

:two: Generate the main pages component

```bash
$ ng generate component pages/pages --flat --inline-template --inline-style --skipTests
```

* In `pages.component.ts` replace the inline `template` with:

```typescript
 template: `
    <h3>Pages Module:</h3>
    <nav>
      <a routerLink="./dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
```

:three: Generate the dashboard component

```bash
$ ng generate component pages/pages-dashboard --inline-template --inline-style --skipTests
```

* Replace the `pages-dashboard.component.ts` with the below source code:

```typescript
import {Component, Injector, OnInit} from '@angular/core';
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

  // TODO this Class should go in a model
  Password = {
    result: String
  };

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    console.log('populate data');
    this.getData()
      .subscribe(
        (data: any) => this.Password = data
        , (err: any) => console.error('too bad' + err)
      );
  }

  // TODO this function should go in a service
  getData() {
    return this.httpService.get<string>('/api/badPassword');
  }

  // TODO this function should go in a service along with the above function
  protected get httpService(): HttpClient {
    return this.injector.get(HttpClient);
  }
}
```

:four: Lets advertise the new components by adding a new route to the `pages-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesDashboardComponent} from './pages-dashboard/pages-dashboard.component';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          { path: '', component: PagesDashboardComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

```


:arrow_right: [Next TEST](./TEST.md)
