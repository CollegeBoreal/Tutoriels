# Core


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
