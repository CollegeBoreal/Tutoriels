# nbAuth Installation


1 - Install the Auth Module

```
$ npm i @nebular/auth
```

2 - Add the [HttpClientModule](https://akveo.github.io/nebular/docs/auth/installation#httpclientmodule) to the AppModule -- `app.module.ts`

```typescript
// ...

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class AppModule {
```

3 - Configure an Authentication [Strategy](https://akveo.github.io/nebular/docs/auth/configuring-a-strategy#strategy)

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

4 - Changing the Interceptor's Behavior

* Configure the provider to use the [NbAuthSimpleInterceptor](https://github.com/akveo/nebular/blob/master/src/framework/auth/services/interceptors/simple-interceptor.ts)

```typescript
const NB_AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true },
  { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'X-Auth-Token' }
];
```

