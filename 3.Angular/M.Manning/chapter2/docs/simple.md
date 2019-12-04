# Afficher une page simple

   * Modifier le fichier`app.component.ts`

```typescript
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['JMIA']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
```

   * Résultat final

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['JMIA']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
```


* Modifier le fichier`app.component.html`

   - rajouter la `directive` `*ngIf="stocks"` aux paramètres de l'étiquette `<main>` 

```html
 <main class="mdl-layout__content" style="padding: 1.25rem;" *ngIf="stocks">

 </main>
```

   - rajouter le `composant` `<app-summary>` à l'étiquette `<main>` 

```html
  <main ...>
     <app-summary [stock]="stocks[0]"></app-summary>
  </main>
```

* Résultat final

:bookmark:  `Directives` de `Structure de Contrôle` d'Angular

:bookmark: `(1) *ngIf` pour les conditions

:bookmark: `(2) *ngFor` pour les boucles

```html
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Stock Tracker</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" >Dashboard</a>
        <a class="mdl-navigation__link" >Manage</a>
      </nav>
    </div>
  </header>
  <main class="mdl-layout__content" style="padding: 1.25rem;" *ngIf="stocks">
    <app-summary [stock]="stocks[0]"></app-summary>
  </main>
</div>
```

# Affichage dans le navigateur

![image](../images/simple.png)

# Notes

Sauvegardez votre travail :bulb: `git`

[:home:](../../)
