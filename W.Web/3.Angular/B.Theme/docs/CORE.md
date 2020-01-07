# Core Module Construction

Create the `@Core` Module

```bash
$ ng generate module @core/Core --flat
```

# Add the core modules

Edit core.modules.ts

add a new variable BASE_MODULES and SERVICES before the `@NgModule` Decorator 

```Typescript
const BASE_MODULES = [ CommonModule, HttpClientModule ];
const SERVICES = [PokeListService];
```

* Import and Provider to the base modules through `@NgModule` Decorator
(by replacing the existing `imports:` field and `providers:`)

```Typescript
  imports: [...BASE_MODULES],
  providers: [
    ...SERVICES,
  ]})
```

* add the forRoot method to the `class CoreModule`

```Typescript
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }

```

. Final Result should look like this

```Typescript
import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokeListService} from './services/poke-list.service';
import {HttpClientModule} from '@angular/common/http';

const BASE_MODULES = [ CommonModule, HttpClientModule ];
const SERVICES = [PokeListService];

@NgModule({
  imports: [...BASE_MODULES],
  providers: [
    ...SERVICES,
  ]})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
```

# Module Usage

* Import [instantiate] the module through `@NgModule` of app.module.ts

```Typescript
    CoreModule.forRoot(),
```

* import the module through `@NgModule` of any subsequent modules for usage

```Typescript
    CoreModule,
```

[Next](NB.md)


* Create a Pokemon Class (Interface)

```
$ ng g interface @core/models/Pokemon
```

Créer un service pour récupérer les données

```
$ ng generate service @core/services/PokeList
```

```
export interface Pokemon {
  name: String;
  url: URL;
}
```


https://pokeapi.co/api/v2/pokemon?limit=15

Representation des donnees en JSON
https://www.w3schools.com/js/js_json_intro.asp

Utilisation de la platefrome reactive
http://reactivex.io/


```
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
 
```

Utiliser ngfor

```
  <div *ngFor="let pokemon of pokemons; let i = index">
    <span>{{i}}</span>
    <span> {{pokemon.name}}</span>
    <img src="../../assets/pokemon/{{i+1}}.png" alt="{{pokemon.name}}">
  </div>
```
