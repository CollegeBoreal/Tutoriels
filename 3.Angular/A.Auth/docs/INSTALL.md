# nbAuth Installation


:one: - Install the Auth Module

```
$ npm i @nebular/auth
```

:two: - Add the [HttpClientModule](https://akveo.github.io/nebular/docs/auth/installation#httpclientmodule) to the AppModule -- `app.module.ts`

```typescript
// ...

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class AppModule {
```

:three: - Configure an Authentication [Strategy](https://akveo.github.io/nebular/docs/auth/configuring-a-strategy#strategy)

* Declare a constant `NB_AUTH_MODULE` to improve readability 

* Configure the [token extraction](https://akveo.github.io/nebular/docs/auth/getting-user-token#configure-token-extraction)

```typescript
const NB_AUTH_MODULE = [
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
          key: 'token'
        }
      }),
    ],
    forms: {},
  }),
];
```

 * Add the NB_AUTH_MODULE constant to the AppModule -- `app.module.ts`

```typescript
@NgModule({
  imports: [
    ...
    NB_AUTH_MODULE
    ...
  ],
})
export class AppModule {
```

:four: - Changing the HTTP Interceptor's Behavior to use a different [Authorization Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)

* Configure the provider to use the [NbAuthSimpleInterceptor](https://github.com/akveo/nebular/blob/master/src/framework/auth/services/interceptors/simple-interceptor.ts)

* Configure it's header to use [X-Auth-Token](https://stackoverflow.com/questions/39017297/what-is-difference-between-x-auth-token-vs-authorisation-headers-which-is-prefer) as Authorization Header

```typescript
const NB_AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true },
  { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'X-Auth-Token' }
];
```

:A: Final Result should look like this

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  NB_AUTH_INTERCEPTOR_HEADER,
  NbAuthJWTToken,
  NbAuthModule, NbAuthSimpleInterceptor,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbThemeModule } from '@nebular/theme';

const NB_AUTH_MODULE = [
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
          key: 'token'
        }
      }),
    ],
    forms: {},
  }),
];

const NB_AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true },
  { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'X-Auth-Token' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NB_AUTH_MODULE
  ],
  providers: [
    NB_AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
