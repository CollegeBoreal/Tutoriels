# nbAuth Installation


1 - Install the Auth Module

```
$ npm i @nebular/auth
```

2 - Add the HttpClientModule to the AppModule -- `app.module.ts`

```typescript
// ...

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class AppModule {
```

3 - Configure a [Strategy](https://akveo.github.io/nebular/docs/auth/configuring-a-strategy#strategy)

* Declare a constant `NB_AUTH_MODULE` for improve readability 

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
