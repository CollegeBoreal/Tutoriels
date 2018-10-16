# Core Module Construction

Create the `@Core` Module

```bash
$ ng generate module @core/Core --flat
```

# Add the core modules

Edit themes.modules.ts

add a new variable BASE_MODULES before the `@NgModule` Decorator 

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

# Module Usage

* Import [instantiate] the module through `@NgModule` of app.module.ts

```Typescript
    ThemeModule.forRoot(),
```

* import the module through `@NgModule` of any subsequent modules for usage

```Typescript
    ThemeModule,
```

[Next](NB.md)



Créer un service pour récupérer les données

```
$ ng generate service services/pokemon
```

https://pokeapi.co/api/v2/pokemon?limit=15

Representation des donnees en JSON
https://www.w3schools.com/js/js_json_intro.asp

Utilisation de la platefrome reactive
http://reactivex.io/

import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
  constructor(private http: HttpClient) {

  }
  pokemonInit(){
    let pokemons: Array<any> = [];

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .map( tout => tout.json() )
    .flatMap( tableau => tableau.results )
    .subscribe(
      donnee => {
        pokemons.push(donnee)
      },
      erreur => {
        console.error(erreur)
      }
    );

    return pokemons;
  }
Utiliser ngfor

  <div *ngFor="let pokemon of pokemons; let i = index">
    <span>{{i}}</span>
    <span> {{pokemon.name}}</span>
    <img src="../../assets/pokemon/{{i+1}}.png" alt="{{pokemon.name}}">
  </div>
