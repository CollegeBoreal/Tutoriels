# Routing

### Créer le module de `routage` (paragraphe `2.9`)

* créer le fichier `src/app/app-routing.module.ts` avec le contenu suivant

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

* Ajouter le `routage` en modifiant la constante `routes`

```typescript
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];
```

* Résultat final

```typescript
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Lier le nouveau module de routage au module principal de l'application

* Éditer le fichier `app.module.ts`
    
    - Rajouter le nouveau module de routage dans les propriétés `imports:` du @NgModule

```typescript
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
```

* Résultat final

```typescript
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[Next](link.md)

## Notes: (pour ceux qui sont avancés)

Vous pouvez également créer le module de routage avec Angular/CLI

:warning: Assurez vous d'utiliser `git` pour récupérer le fichier `app.module.ts` car il sera écrasé

```
$ ng generate module app --routing --flat --force
```

Pour récuperer le fichier écrasé par le paramètre `--force`

```
$ git checkout src/app/app.module.ts
```
