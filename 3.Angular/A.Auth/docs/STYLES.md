
https://akveo.github.io/nebular/docs/auth/installation#enable-styles

:one: Install @Nebular Theme Manually

```
$ npm install --save @nebular/theme @angular/cdk @angular/animations
```

:two: Mess with `angular.json` by updating the `styles` Table in JSON format

```json
    "styles": [
      "src/styles.scss",
      "node_modules/@nebular/theme/styles/prebuilt/default.css"
    ],
```
