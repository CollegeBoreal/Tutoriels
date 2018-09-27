# Pages Module


## Create the pages Modules, Routing and Component

* Module plus Routing

```
$ ng g module pages --routing true
```

* Component (Simplified)

```
$ ng g component pages --inline-style true --inline-template true --spec false 
```

## Add the ThemeModule to the page module file `pages.module.ts`

```Typescript
@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
```

## Add `One Column Layout` to the template of the page module component file `pages.component.ts`

```Typescript
@Component({
  selector: 'app-pages',
  template: `
    <app-layout-one-column>
      <router-outlet></router-outlet>
    </app-layout-one-column>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```

## Add the PagesComponent to the Pages Routing `pages-routing-module.ts`

```Typescript
const routes: Routes = [{
  path: '',
  component: PagesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
```

## Integration to the `app module`

--- Let's add the `Pages Module` to the main `App Module` by adding its route

--- Add the following code to the file `app-routing.module.ts` to the Constant `routes` 

```Typescript
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
```
--- Add the Extra Options allowing the use of hash in the URL

```
const config: ExtraOptions = {
  useHash: true,
};
```

--- Add the new `config` constant to the `RouterModule.forRoot` function parameter 

```
  imports: [RouterModule.forRoot(routes, config)],
```

. Final Result 

```Typescript
import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

--- Replace the app.component.html code to the below

```html
<router-outlet></router-outlet>
```

## Testing

http://localhost:4200

You should see a blank page

![alt tag](./BLANK.png)
