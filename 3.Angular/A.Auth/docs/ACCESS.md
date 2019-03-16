# Access the Pages Module

:one: Generate a new module `pages`

```bash
$ ng generate module pages --routing
```

:two: Generate the main pages component

```bash
$ ng generate component pages/pages --flat --inline-template --inline-style --skipTests
```

* In `pages.component.html` template add:

```html
    <h3>Pages Module:</h3>
    <nav>
      <a routerLink="./dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
```

:three: Generate the dashboard component

```bash
$ ng generate component pages/pages-dashboard --inline-template --inline-style --skipTests
```

* Replace the `pages.component.ts` with the below source code:

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

:arrow_right: [Next TEST](./TEST.md)
