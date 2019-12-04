
#Navigation

#### App Module

###### Nebular

* Edit `app.module.ts` and add `NBLayouModule`, `NbSidebarModule` and `NbActionsModule` to the existing `NB_MODULES` constant

```typescript
// Nebular Modules
const NB_MODULES = [
  ... Previous Modules,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];
```

* also add `MatIconModule` to the existing `MAT_MODULES` constant

```typescript
// Material Modules
const MAT_MODULES = [
  MatIconModule,
]
```

#### Edit `app.component.html` file

* add the layout header content after `<!-- Insert header here -->` in the `<nb-layout-header>` tag

:warning: Disabling `<nb-sidebar>` since it is preventing mouse events to work

:x: Adding `<mat-icon>` mixed with `nebular` allows the use of `<nb-sidebar>` without mouse issue

```html
  <nb-layout-header fixed>
  <!-- Insert header here -->
    <!--<nb-sidebar >-->
    <mat-icon>attach_money</mat-icon>Invoicing
    <!--</nb-sidebar>-->

    <nb-sidebar end>
      <nb-actions size="medium" fullWidth="false">
        <nb-action class="control-item" >Invoices</nb-action>
        <nb-action class="control-item" >Customers</nb-action>
      </nb-actions>
    </nb-sidebar>

  </nb-layout-header>
```

* replace the content after  <!--The content below is only a placeholder and can be replaced.--> in the `<nb-layout-column>` tag


```html
    <!--The content below is only a placeholder and can be replaced.-->
    <router-outlet></router-outlet>
```


* Final Result

```html
<nb-layout>

  <nb-layout-header fixed>
  <!-- Insert header here -->
    <!--<nb-sidebar >-->
    <mat-icon>attach_money</mat-icon>Invoicing
    <!--</nb-sidebar>-->

    <nb-sidebar end>
      <nb-actions size="medium" fullWidth="false">
        <nb-action class="control-item" >Invoices</nb-action>
        <nb-action class="control-item" >Customers</nb-action>
      </nb-actions>
    </nb-sidebar>

  </nb-layout-header>

  <nb-layout-column>

    <!--The content below is only a placeholder and can be replaced.-->
    <router-outlet></router-outlet>

  </nb-layout-column>

  <nb-layout-footer fixed>
  <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>
```

#### Edit `app.component.scss` file

   * add the below content

```css
.control-item {
  display: block;
}
```

## You should see this

![image](../images/layout.png)

[:fast_forward: Next](backend.md)
