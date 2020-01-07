

# Enabling the Theme System to Angular Project

https://akveo.github.io/nebular/docs/guides/enable-theme-system#enable-theme-system

## Adding the Theme

* Edit the `angular.json` file and add the theme(s)

```json
"styles": [
        "src/styles.scss",
        "node_modules/@nebular/theme/styles/prebuilt/default.css"
      ],
```

* Create a `app/@theme/styles/themes.scss` file with a Nebular theme declaration with the below content.

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

* Edit the styles.scss file by adding the below content

```scss
// this is your created themes.scss file, make sure the path to the file is correct
@import './app/@theme/styles/themes';   // Note: This should match your newly created themes.scss

// framework component styles which will use your new theme
@import '~@nebular/theme/styles/globals';

// install the framework
@include nb-install() {
  @include nb-theme-global();
};
```

[Next Layout](LAYOUT.md)
