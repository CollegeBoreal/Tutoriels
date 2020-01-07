# Integration to the `app module`

### Finaly, let's add the `Pages` module to the main `App` module by adding its route

* Add the following code to the file `app-routing.module.ts` at the Constant `routes` 

```Typescript
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
```
* Add the `ExtraOptions` named `config` allowing the use of hash in the URL

```Typescript
const config: ExtraOptions = {
  useHash: true,
};
```

* Add the new `config` constant to the `RouterModule.forRoot` function parameter at the decorator `@NgModule` `imports` value  

```Typescript
  imports: [RouterModule.forRoot(routes, config)],
```

* Final Result 

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

###  Edit the app.component.html

Remove all the source code before and keep only the `router-outlet` tag

```html
<router-outlet></router-outlet>
```

###  Initialize the `@Theme` module in `app.module.ts` 

by importing the `ThemeModule.forRoot()` function

* Final result

```typescript

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


## Testing

http://localhost:4200

You should see a blank page

![alt tag](./BLANK.png)

[Next](MENU.md)
