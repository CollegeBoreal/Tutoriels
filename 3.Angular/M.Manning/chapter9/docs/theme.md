# Theme

#### Install [Nebular](https://akveo.github.io/nebular/) and [Material Design](https://material.angular.io) libraries

* Install [Nebular](https://akveo.github.io/nebular/) Theme

```
$ ng add @nebular/theme
```
   * When asked:

```
? Which Nebular theme do you want to use: default
? Use customizable scss themes? Yes
? Set up browser animations for Nebular? No
```

* Add [Material Design](https://material.angular.io) library

```
$ npm install @angular/material material-icons --save
```

#### Install styles

* Edit the `styles.scss` file and add the below at the end

```json
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import '~material-icons/iconfont/material-icons.css';
```

#### Install modules

* Edit `app.module.ts`

   - Import each `Nebular` Modules to the `imports:` metadata of the `@NgModule` decorator
   
   
 1) create a constant called `NB_MODULES` where to put all the `Nebular` Modules

```typescript
const NB_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbEvaIconsModule,
  NbIconModule,
]
```

 2) add NB_MODULES to the `@NgModule`'s `imports:` metadata
 
 :warning: the 3 dots are required `...NB_MODULES`

```typescript
  imports: [
     --- previous lines ---
     ...NB_MODULES,
  ]
```

   - Import each `Material` Module to the `imports:` metadata of the `@NgModule` decorator

 1) create a constant called `MAT_MODULES` where to put all the `Material Design` Modules

```typescript
const MAT_MODULES = [
]
```

 2) add MAT_MODULES to the imports metadata

```typescript
  imports: [
     --- previous lines ---
     ...MAT_MODULES,
  ]
```

* Final Result

```typescript
// Nebular Modules
const NB_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbEvaIconsModule,
  NbIconModule
];

// Material Modules
const MAT_MODULES = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ...NB_MODULES,
    ...MAT_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[:fast_forward: Next ](navbar.md)
