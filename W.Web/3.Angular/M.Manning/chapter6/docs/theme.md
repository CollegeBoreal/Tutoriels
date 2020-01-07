# Theme

* Install [Clarity](https://clarity.design) libraries

```
$ npm install @clr/icons @clr/angular @clr/ui @webcomponents/custom-elements@1.0.0 --save
```

* Edit the `Angular` configuration file `angular.json` add the below snippet (look for styles:)

```json
   "styles": [
      "node_modules/@clr/icons/clr-icons.min.css",
      "node_modules/@clr/ui/clr-ui.min.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/@webcomponents/custom-elements/custom-elements.min.js",
     "node_modules/@clr/icons/clr-icons.min.js"
   ],
```


* Edit `app.module.ts`

   - Import `ClarityModule` to the `imports:` metadeta of the `@NgModule` decorator

   - Import `BrowserAnimationsModule` to the `imports:` metadeta of the `@NgModule` decorator


```typescript
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
```

* Final Result

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

[:fast_forward: Next ](navbar.md)
