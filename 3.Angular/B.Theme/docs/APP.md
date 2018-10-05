# Integration to the `app module`

* Finaly, let's add the `Pages Module` to the main `App Module` by adding its route

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

*  Replace the app.component.html code to the below

```html
<router-outlet></router-outlet>
```

*  Initializing the theme module from `app.module.ts` 

by importing the `ThemeModule.forRoot()`

Final result

```

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
