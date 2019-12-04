# Node

## Create Node master/details

### Master

```
$ ng generate component nodes
```

###### Edit `nodes.component.ts`

:bookmark: `[app-nodes]`  Attribute Selector

To be treated as an `Attribute` the `selector` in the `@Component` decorator needs `brackets`

```typescript
  selector: '[app-nodes]',
```

* Final result

```typescript
@Component({
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

###### Edit `nodes.component.html`

:bookmark: `<ng-content>`

```html
<thead>
  <tr>
    <th>Node</th>
    <th [colSpan]="2">CPU</th>
    <th [colSpan]="2">Memory</th>
    <th>Details</th>
  </tr>
</thead>
<ng-content></ng-content>
```

### Details

```
$ ng generate component nodes-row
```



## Edit `nodes-row.component.html`

   * Replace its content with the below

```html
<th scope="row">{{node.name}}</th>
<td [class.table-danger]="isDanger('cpu')">     
  {{node.cpu.used}}/{{node.cpu.available}}
</td>
<td [class.table-danger]="isDanger('cpu')">
  ({{node.cpu.used / node.cpu.available | percent}})     
</td>
<td [class.table-danger]="isDanger('mem')">
  {{node.mem.used}}/{{node.mem.available}}
</td>
<td [class.table-danger]="isDanger('mem')">
  ({{node.mem.used / node.mem.available | percent}})
</td>
<td><button class="btn btn-secondary">View</button></td>
```

## Edit `nodes-row.component.ts`

:bookmark: `@Input()`

   * like `nodes` add the Attribute Selector

```typescript
  selector: '[app-nodes-row]',
```

   * add the `@Input()` decorator

```typescript
 @Input() node: any;
```

   * add the `isDanger` function

```typescript
  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
```

  * Final Result

```typescript
@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent implements OnInit {

  @Input() node: any;

  constructor() { }

  ngOnInit() {
  }

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
```

## Calling the Nodes

   * Edit the `dashboard.component.html`

```html
<div class="container mt-2">
  <div class="card card-block">
    <div class="card-body">
      <nav class="navbar navbar-dark bg-inverse mb-1">
        <h1 class="navbar-brand mb-0">Cluster 1</h1>
      </nav>
      <table app-nodes class="table table-hover">     
         <tr app-nodes-row *ngFor="let node of cluster1" [node]="node"></tr>
      </table>
      <nav class="navbar navbar-dark bg-inverse mb-1">
        <h1 class="navbar-brand mb-0">Cluster 2</h1>
      </nav>
      <table app-nodes class="table table-hover">
         <tr app-nodes-row *ngFor="let node of cluster2" [node]="node"></tr>
      </table>
    </div>
  </div>
</div>
```

   * Observe the `app-nodes` and `app-nodes-row` components used as HTML `attributes` on the `table` tag

```html
      <table app-nodes class="table table-hover">     
         <tr app-nodes-row *ngFor="let node of cluster1" [node]="node"></tr>
```

[:fast_forward: Next ](projection.md)

