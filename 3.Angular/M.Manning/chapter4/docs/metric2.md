# Metric Component

### Generate the component

```
$ ng generate component metric
```

### Edit the component `metric.component.ts`

* Declare its variables

```typescript
  @Input('used') value = 0;
  @Input('available') max = 100;
```

#### Add a Component life Cycle `OnChanges` to the `MetricComponent` class

   * inherit the classes

```typescript
implements OnInit, OnChanges {
```

   * implement the required function `OnChanges`

```typescript
  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) { this.value = 0; }
    if (changes.max && isNaN(changes.max.currentValue)) { this.max = 0; }
  }
```

#### Add the other `public` function

```typescript
  isDanger() {
    return this.value / this.max > 0.7;
  }
```

#### Final Result

```typescript
@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit, OnChanges {

  @Input('used') value = 0;
  @Input('available') max = 100;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) { this.value = 0; }
    if (changes.max && isNaN(changes.max.currentValue)) { this.max = 0; }
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
```

### Edit its template `metric.component.html`

* Replace the template content by the below

```html
<div class="card card-block">
  <div class="card-body">
    <nav class="navbar navbar-dark bg-primary mb-1" 
         [ngClass]="{'bg-danger': isDanger(), 'bg-success': !isDanger()}">
      <h1 class="navbar-brand mb-0">
      <ng-content select="metric-title"></ng-content></h1>
    </nav>
    <h4 class="card-title">{{value}}/{{max}} ({{value / max | percent:'1.0-2'}})</h4>
    <p class="card-text">
      <ng-content select="metric-description"></ng-content>
    </p>
    <ngb-progressbar [value]="value" 
                     [max]="max" 
                     [type]="isDanger() ? 'danger' : 'success'">
    </ngb-progressbar>
  </div>
</div>
```

## Using the Metric Component

* Edit the `dashboard.component.html` file

```html
<div class="container mt-2">
  <div class="row">
    <app-metric class="col-sm-6" [used]="cpu.used" [available]="cpu.available">
      <metric-title>CPU</metric-title>
      <metric-description>utilization of CPU cores</metric-description>
    </app-metric>
    <app-metric class="col-sm-6" [used]="mem.used" [available]="mem.available">
      <metric-title>Memory</metric-title>
      <metric-description>utilization of memory in GB</metric-description>
    </app-metric>
  </div>
</div>
```
