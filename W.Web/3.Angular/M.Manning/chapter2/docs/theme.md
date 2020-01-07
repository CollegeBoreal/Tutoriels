# Modifier la page principale

 :bookmark: L'application utilise le thème [Material Design Light](https://getmdl.io/)
 
 * Éditer le fichier `index.html` et rajouter le code ci-dessous à l'étiquette `<head>`
 
 ```html 
 <link href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-orange.min.css" rel="stylesheet">
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 ```
 
 * Éditer le fichier `styles.css` et rajouter le code ci-dessous 
 
 ```css
 body {
    background: #f3f3f3
 }
 ```
 
 * Éditer le fichier `app.component.html` et remplacer avec le code suivant
 
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
  <main class="mdl-layout__content" style="padding: 1.25rem;">
   
  </main>
</div>
``` 

[Next](service.md)

