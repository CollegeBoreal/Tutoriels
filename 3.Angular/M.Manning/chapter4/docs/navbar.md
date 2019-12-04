# NavBar

```
ng generate component navbar
```

* Edit the `navbar.component.ts`
 
   * add an output EventEmitter `onRefresh`

```typescript
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
```

   * add a method `refresh`

```typescript
  refresh() {
    this.onRefresh.emit();
  }
```

* Edit the `navbar.component.css`

   * add a style to the `btn` class

```css
.btn {
  background-color: #999999;
}
```

* Edit the `navbar.component.html`

   * replace its content with

```html
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand mr-auto" href="#">My Data Center</a>
  <form class="form-inline">
    <button class="btn btn-success" type="button" style="background-color: #8616f6" (click)="refresh()">Reload</button>
  </form>
</nav>
```

## Display the firt page

#### Edit the main app component 

  * open the `app.component.html` and replace its content with
  
```html
<app-navbar></app-navbar>
```

## Empty Screen

![image](../images/empty.png)

[:fast_forward: Next ](dashboard.md)
