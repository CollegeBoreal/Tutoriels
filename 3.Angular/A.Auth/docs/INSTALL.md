# nbAuth Installation


1 - Install the Auth Module

```
$ npm i @nebular/auth
```

2 - Add the HttpClientModule to the AppModule -- `app.module.ts`

```typescript
  imports: [
    HttpClientModule
  ],
})
export class AppModule {
```

3 - Configure a [Strategy](https://akveo.github.io/nebular/docs/auth/configuring-a-strategy#strategy)

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
