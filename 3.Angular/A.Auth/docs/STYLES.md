# Nebular Theme


:one: Install @Nebular Theme Manually

```
$ npm install --save @nebular/theme @angular/cdk @angular/animations
```

:two: Mess with `angular.json` file by updating the `styles` Table in JSON format

```json
    "styles": [
      "src/styles.scss",
      "node_modules/@nebular/theme/styles/prebuilt/default.css" // = add this line
    ],
```

:three: Add a new `themes.scss` file under `src` folder

```scss
// import Nebular Theme System and the default theme
@import '~@nebular/theme/styles/theming';
@import '~@nebular/theme/styles/themes/default';

// and change the variables you need,
// or simply leave the map empty to use the default values
// let's make it blue-ish instead of the default white color
$nb-themes: nb-register-theme((
  color-bg: #4ca6ff,
  shadow: 0 1px 2px 0 #3780c0,
  layout-bg: #ffffff,
  color-fg: #222222
), default, default); // let's leave it as default
```

:four: Replace/Adjust the `styles.scss` file with the below:

```scss
// this is your created themes.scss file, make sure the path to the file is correct
@import 'themes';

// framework component styles which will use your new theme
@import '~@nebular/theme/styles/prebuilt/default';
@import '~@nebular/theme/styles/globals';

@import '~@nebular/auth/styles/all'; // or @import '~@nebular/auth/styles/{theme-name}';

// install the framework
@include nb-install() {
  @include nb-theme-global();
  @include nb-auth-global(); // append the install mixin inside of the nb-install
};
```


---

References:

https://akveo.github.io/nebular/docs/auth/installation#enable-styles

