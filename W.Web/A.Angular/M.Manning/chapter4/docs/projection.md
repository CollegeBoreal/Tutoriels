# Display The Result

## :bookmark: Content Projection

* Edit `dashboard.component.html`file 

   - reform the <app-metric> html tag

```html
      <app-metric class="col-sm-6"
                  [used]="cpu.used"
                  [available]="cpu.available" >
                  <metric-title>CPU</metric-title>
                  <metric-description>utilization of CPU cores</metric-description>
      </app-metric>
```

* Final Result

```html
<div class="container mt-2">
  <div class="card card-block">
    <nav class="navbar navbar-dark bg-inverse mb-1">
      <h1 class="navbar-brand mb-0">Overall Metrics</h1>
    </nav>
    <div class="row">
      <app-metric class="col-sm-6"
                  [used]="cpu.used"
                  [available]="cpu.available" >
                  <metric-title>CPU</metric-title>
                  <metric-description>utilization of CPU cores</metric-description>
      </app-metric>
      <app-metric class="col-sm-6"
                  [used]="mem.used"
                  [available]="mem.available">
                  <metric-title>Memory</metric-title>
                  <metric-description>utilization of memory in GB</metric-description>
      </app-metric>
    </div>
  </div>
</div>

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

* Edit `metric.component.ts`file to remove unnecessary code

```typescript
  @Input() title: string = '';
  @Input() description: string = '';
```

### Schema Error

:x: You should now encounter this error

![image](../images/schema-error.png)

* Edit `app.module.ts` to avoid SCHEMA malformation error

```typescript
  ...<previous lines>
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
```

## You should finally see

![image](../images/nodes-row.png)
