# Créer le service d'accès au données

## Interface

:bookmark: `Structure de Données`

* Ajouter une structure de données `StockInterface`

``` 
$ ng generate interface services/stockInterface
``` 

* Éditer le fichier `stock-interface.ts`

   * Remplacer le code avec celui ci 
 
```typescrit
 export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
``` 

## Service

:bookmark: `Service` sert a récupérer les donnees servies par un fournisseur

* Rajouter le `service` appellé `Stocks` avec la commande suivante

 ``` 
 $ ng generate service services/stocks
 ```
* Éditer le fichier `stocks.service.ts`

- Ajouter des variables locales avant le décorateur `@Injectable`

```typescript
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';
```

- Modifier son constructeur

```typescript
   constructor(private http: HttpClient) {}
``` 

- Ajouter des fonctions

```typescript
  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

``` 
* Resultat final

```typescript
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {}

  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}
```

## Fournir le Service

:bookmark: `Provider` sert a fournir les donnees

* Éditer le fichier `app.module.ts`

- Importer le module HttpClientModule dans la métadonnée `imports:`
- Enregistrer le fourniseur de service `StocksService` auprès de la métadonnée `providers:`

* Resultat final

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[Next](summary.md)
