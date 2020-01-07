# Theme

* Install [ng-bootstrap](https://ng-bootstrap.github.io) and [bootstrap](https://getbootstrap.com) libraries

```
$ npm install --save @ng-bootstrap/ng-bootstrap bootstrap
```

* Edit the `Angular` configuration file `angular.json` add the below snippet (look for styles:)

```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ],
```


* Edit `app.module.ts`

   - Import `NgbModule` to the `imports:` metadeta of the `@NgModule` decorator

```typescript
imports: [
    BrowserModule,
    NgbModule
  ],
```

* Final Result

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[:fast_forward: Next ](navbar.md)
