# Créer le composant `summary`

```
$ ng generate component components/summary
```

## Éditer le fichier `summary.component.ts`

:bookmark: `@Input()`

- Ajouter une parametre d'entrée de composant `@Input` appellé `stock`

```typescript
  @Input() stock: any;
```

- Ajouter les fonctions `isNegative()` et `isPositive()` au code de la classe `SummaryComponent`

```typescript
  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
```
* Résultat Final

```typescript
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() stock: any;

  constructor() { }

  ngOnInit() {
  }

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }

}
```

* Mettre à jour son `template`avec le code ci-dessous, (i.e. fichier `summary.component.html`)

:bookmark: `binding`

:bookmark: `(1) interpolation {{ }}` 

:bookmark: `(2) property [ ]` 

:bookmark: `(3) event ( )` 


```html
<div class="mdl-card stock-card mdl-shadow--2dp" 
     [ngClass]="{increase: isPositive(), decrease: isNegative()}" style="width: 100%;">
  <span>
    <div class="mdl-card__title">
      <h4 style="color: #fff; margin: 0">
        {{stock?.symbol?.toUpperCase()}}<br />
        {{stock?.lastTradePriceOnly | currency:'USD':'symbol':'.2'}}<br />
        {{stock?.change | currency:'USD':'symbol':'.2'}} ({{stock?.changeInPercent | percent:'.2'}})
      </h4>
    </div>
  </span>
</div>
```

* Éditer le style du composant en ouvrant le fichier `summary.component.css`

```css
:host .stock-card {
  background: #333333;
}
:host .stock-card.increase {
  background: #558B2F;
  color: #fff;
}
:host .stock-card.decrease {
  background: #C62828;
  color: #fff;
}
```
[Next](simple.md)
