# Nebular Theme


:one: [Install @Nebular](https://akveo.github.io/nebular/docs/guides/add-into-existing-project#install-nebular) Theme

```
$ ng add @nebular/theme
```

```
Installed packages for tooling via npm.
? Which Nebular theme do you want to use: 
❯ default 
  cosmic 
  corporate 
```

```
Installed packages for tooling via npm.
? Which Nebular theme do you want to use: default
? Use customizable scss themes? Yes
? Set up browser animations for Nebular? (Y/n) Y
```
  

:two: - Configure [Nebular](https://akveo.github.io/nebular/docs/guides/add-into-existing-project#configure-nebular) in the AppModule -- `app.module.ts`

```typescript
// ...

@NgModule({
  imports: [
    ...
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
  ],
})
export class AppModule {
```

:three: Change the `angular.json` file by updating the `styles` Table JSON format

```json
    "styles": [
      "src/styles.scss",
      "node_modules/@nebular/theme/styles/prebuilt/default.css" 
    ],
```

:four: Add a new `themes.scss` file under `src` folder

```scss
@import '~@nebular/theme/styles/theming';
@import '~@nebular/theme/styles/themes/default';

$nb-themes: nb-register-theme((
  // add your variables here like:
  // color-bg: #4ca6ff,
), default, default);
```

:five: Replace/Adjust the `styles.scss` file with the below:

```scss
@import 'themes';

@import '~@nebular/theme/styles/globals';

@include nb-install() {
  @include nb-theme-global();
};
/* You can add global styles to this file, and also import other style files */
```

:six: add the 

```scss
@import 'themes';

@import '~@nebular/theme/styles/globals';

// framework component styles which will use your new theme
@import '~@nebular/theme/styles/prebuilt/default';
@import '~@nebular/auth/styles/all'; // *** or @import '~@nebular/auth/styles/{theme-name}'; ***

@include nb-install() {
  @include nb-theme-global();
  @include nb-auth-global(); // *** append the install mixin inside of the nb-install ***
};
/* You can add global styles to this file, and also import other style files */
```

:arrow_right: [Next GUARD](./GUARD.md)

---

References:

https://akveo.github.io/nebular/docs/auth/installation#enable-styles

