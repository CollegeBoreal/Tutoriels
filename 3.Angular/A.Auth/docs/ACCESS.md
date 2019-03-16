# Access


In Pages Component.html

```html
<h3>ADMIN</h3>
<nav>
  <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
</nav>
<router-outlet></router-outlet>
```

In Pages Dashboard 

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

