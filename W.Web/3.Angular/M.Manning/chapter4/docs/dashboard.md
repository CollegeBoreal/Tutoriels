# Dashboard

### Generate the Dashboard component

```
$ ng generate component dashboard
```

### Generate `Metric` and `Node` data

* Generate `Metric` Interface

```
$ ng generate interface data/metric
```

   * Edit the `Metric.ts` file and add the below fields

```typescript
export interface Metric {
  used: number;
  available: number;
}
```
* Generate `Node` Interface

```bash
$ ng generate interface data/node
```

   * Edit the `Node.ts` file and add the below fields

```typescript
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
```

### Evolve Dashboard Component

* Declare a vew local variables

  * import statements to add
  
```typescript
import {Metric} from '../data/metric';
import {Node} from '../data/node';
```

  * variables


```typescript
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;
```

* The component will return a date value (i.e. Output a date to calling components)

   * import statement to add 
   
```typescript
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
```

   * add the output parameter

```typescript
  @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>();
```

* add a static method after the constructor

```typescript
  private static randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
```


### Add a Component life Cycle `OnDestroy` to the `Dashboard` class

   * inherit the classes

```typescript
implements OnInit, OnDestroy {
```

   * implement the required functions `ngOnInit` and `ngOnDestroy`

```typescript
  ngOnInit(): void {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
```

### Add the other `public` and `private` functions

```typescript
  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) { this.cluster1.push(this.randomNode(i)); }
    for (let i = 4; i < 7; i++) { this.cluster2.push(this.randomNode(i)); }
    this.onRefresh.emit(new Date());
  }

  private randomNode(i): Node {
    const node: Node = {
      name: 'node' + i,
      cpu: { available: 16, used: DashboardComponent.randomInteger(0, 16) },
      mem: { available: 48, used: DashboardComponent.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }
```

### Final Result

```typescript
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Metric} from '../data/metric';
import {Node} from '../data/node';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  private static randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

  ngOnInit(): void {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) { this.cluster1.push(this.randomNode(i)); }
    for (let i = 4; i < 7; i++) { this.cluster2.push(this.randomNode(i)); }
    this.onRefresh.emit(new Date());
  }

  private randomNode(i): Node {
    const node: Node = {
      name: 'node' + i,
      cpu: { available: 16, used: DashboardComponent.randomInteger(0, 16) },
      mem: { available: 48, used: DashboardComponent.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

}

```

[:fast_forward: Next ](data.md)
