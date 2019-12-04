# Preparing for Forms


##### Enabling `Template Driven` Forms Functionnality

* Edit `app.module.ts` and add `FORMS_MODULE` constant

```typescript
// Form Modules
const FORM_MODULES = [
  FormsModule
];
```

* Edit `app.module.ts` and add `FORMS_MODULE` constant

```typescript
// Material Modules
const MAT_MODULES = [
     <previous modules>
  MatFormFieldModule,
  MatInputModule

];
```

* add `FORMS_MODULE` constant to the `imports:` metadata field of `@NgModule` decorator

```typescript
  imports: [
     <previous modules>
     ...MAT_MODULES,
    ...FORM_MODULES
  ],
```

* Full Script Final Result

```typescript 
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {
  NbThemeModule
  , NbLayoutModule
  , NbActionsModule
  , NbSidebarModule
  , NbIconModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule
  , MatCardModule
  , MatFormFieldModule
  , MatIconModule
  , MatListModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';

// Nebular Modules
const NB_MODULES = [
  NbThemeModule.forRoot({name: 'default'}),
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];

// Material Modules
const MAT_MODULES = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule
];

// Form Modules
const FORM_MODULES = [
  FormsModule
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...NB_MODULES,
    ...MAT_MODULES,
    ...FORM_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

[:fast_forward: Next ](customer-form.md)
