# Module Construction

Create the Theme Module

```bash
$ ng generate module @theme/Theme --flat
```

# Add the base modules

Edit `themes.modules.ts` file

add a new variable `BASE_MODULES` before the `@NgModule` Decorator 

```Typescript
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
```

* Import and Export the base modules through `@NgModule` Decorator
(by replacing the existing `imports:` field)

```Typescript
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES],
```

* add the forRoot method to the `class ThemeModule`

```Typescript
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
    };
  }

```

. Final Result should look like this

```Typescript
import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES],
  declarations: []
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
    };
  }
}
```

# Module Usage (just for your imformation - nothing to edit)

To use the newly created `Theme` Module in other modules, you will need to:

* Import [instantiate] the module through `@NgModule` of `app.module.ts` file

```Typescript
    ThemeModule.forRoot(),
```

* import the module through `@NgModule` of any subsequent modules for usage (without the need to use `forRoot()` method)

```Typescript
    ThemeModule,
```

Further examples will be provided later on.

[Next](NB.md)
