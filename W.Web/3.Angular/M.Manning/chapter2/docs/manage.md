# Manage

* Créer le composant `Gestion` (paragraphe `2.8`)

```
$ ng generate component components/manage
```

#### Préparer la venue du composant

* Éditer le composant principal de l'application `app.component.html`

  - rajouter l'étiquette `<app-manage>`
  
  - retirer l'étiquette `<app-dashboard>`
  
  - resultat final

```html
  <main class="mdl-layout__content" style="padding: 1.25rem;" >
    <app-manage></app-manage>
  </main>
```

* Éditer le module principal de l'application `app.module.ts`

  - Importer le module `FormsModule` permettant la gestion des formulaires

```typescript
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
```

#### Faire évoluer le composant

* Éditer le composant de Gestion `manage.component.ts`

   - Déclarer les variables locales `stock` (au singulier) et `symbols`

```typescript
  stock: string;
  symbols: Array<string>;
```
   - Injecter le Service `StocksService` au constructeur

```typescript
  constructor(private service: StocksService) { }
```
   - Initialiser les variables locales par la fonction `ngOnInit`

```typescript
  ngOnInit() {
    this.symbols = this.service.get();
  }
```

  - Rajouter les fontions `add` et `remove` afin de gérer la liste de stocks
  
```
  add() {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
```


* Résultat Final de `manage.component.ts`

```typescript
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.symbols = this.service.get();
  }

  add() {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

}
```

* Remplacer le contenu du `template` du composant de Gestion `manage.component.html`

```html
<div class="demo-grid-1 mdl-grid">
  <div class="mdl-cell mdl-cell--4-col"></div>
  <div class="mdl-cell mdl-cell--4-col">
    <form style="margin-bottom: 5px;" (submit)="add()">
      <input name="stock" [(ngModel)]="stock" 
             class="mdl-textfield__input" 
             type="text" placeholder="Add Stock" />
    </form>
    <table class="mdl-data-table mdl-data-table--selectable mdl-shadow--2dp" style="width: 100%;">
      <tbody>
        <tr *ngFor="let symbol of symbols">
          <td class="mdl-data-table__cell--non-numeric">{{symbol}}</td>
          <td style="padding-top: 6px;">
            <button class="mdl-button" (click)="remove(symbol)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mdl-cell mdl-cell--4-col"></div>
</div>
```

# Affichage attendu

![image](../images/manage.png)

# Notes

Sauvegardez votre travail :bulb: `git`

[:fast_forward: Next ](routing.md)
