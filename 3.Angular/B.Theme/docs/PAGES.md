# Pages Module


## Create the pages Modules, Routing and Component

* Module plus Routing

```
$ ng generate module pages --routing true
```

* Component (Simplified)

```
$ ng generate component pages --inline-style true --inline-template true --spec false 
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

[Next](APP.md)
