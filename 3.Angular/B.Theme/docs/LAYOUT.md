# Creating the Application's Layout

## Add the Nebular Layout and SideBar Modules to the Theme Module

-- Add @Nebular ([Layout](https://akveo.github.io/nebular/docs/components/layout), [Sidebar](https://akveo.github.io/nebular/docs/components/sidebar)) Modules to the `theme.module.ts`

```Typescript
const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule
];
```

-- Instantiate the `(@Nebular) Module` through the provider's block to the `theme.module.ts` by adding:

  `...NbSidebarModule.forRoot().providers,`

. final result

```Typescript
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers,
  ...NbSidebarModule.forRoot().providers,
];
```

# Create the Layout

## Generate a layout with one Column

```
$ ng generate component @theme/layout/LayoutOneColumn --inline-template true --spec false 
```

--- Add the following layout example (i.e. from AKVEO/Nebular) to the LayoutOneColumn Component Template

```Typescript
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
```


. Final Result

```Typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

## Advertize the newly created Layout

--- Add the new created Layout to the theme.module.ts 

```Typescript
const COMPONENTS = [
  LayoutOneColumnComponent
];
```

--- Export the new created components `...COMPONENTS` from `@NgModule`

```
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
```

. Final Result

```TypeScript
import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbThemeModule} from '@nebular/theme';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule,
];

const COMPONENTS = [
  LayoutOneColumnComponent
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers,
  ...NbSidebarModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
  declarations: [LayoutOneColumnComponent]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
```

[Next ](PAGES.md)
