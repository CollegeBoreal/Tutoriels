# @Nebular/Theme Installation


:one: [Install @Nebular](https://akveo.github.io/nebular/docs/guides/add-into-existing-project#install-nebular) Theme (Via Tooling)

```
$ ng add @nebular/theme
```

* When asked, select default

```
Installed packages for tooling via npm.
? Which Nebular theme do you want to use: 
❯ default 
  cosmic 
  corporate 
```

* When asked, answer Y to `customizable scss` and Y to `browser animations`

```
Installed packages for tooling via npm.
? Which Nebular theme do you want to use: default
? Use customizable scss themes? Yes
? Set up browser animations for Nebular? (Y/n) Y
```

:two: The automated `tooling` install will update the below files :

:o: Note : Nothing needs to be changed, Observation is still required.

```bash
CREATE src/themes.scss (205 bytes)
UPDATE src/app/app.module.ts (1362 bytes)
UPDATE src/styles.scss (199 bytes)
UPDATE src/app/app.component.html (1493 bytes)
```

* By adding a new `themes.scss` file under `src` folder

```scss
@import '~@nebular/theme/styles/theming';
@import '~@nebular/theme/styles/themes/default';

$nb-themes: nb-register-theme((
  // add your variables here like:
  // color-bg: #4ca6ff,
), default, default);
```

* By Configuring [Nebular](https://akveo.github.io/nebular/docs/guides/add-into-existing-project#configure-nebular) in the AppModule -- `app.module.ts`

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

* By replacing the `styles.scss` file with the below content:

```scss
@import 'themes';

@import '~@nebular/theme/styles/globals';

@include nb-install() {
  @include nb-theme-global();
};
/* You can add global styles to this file, and also import other style files */
```

* By replacing the `app.component.html` file with the below content:

```html
<nb-layout>

  <nb-layout-header fixed>
  <!-- Insert header here -->
  </nb-layout-header>

  <nb-layout-column>
  
    <!-- Note: OLD CONTENT HERE -->

    <router-outlet></router-outlet>
    
  </nb-layout-column>

  <nb-layout-footer fixed>
  <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>
```

:three: Remove the `OLD CONTENT` in `app.component.html` (Optional)

:four: add the @Nebular/Auth Theme to `styles.scss` file by replacing with the below snippet:

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

