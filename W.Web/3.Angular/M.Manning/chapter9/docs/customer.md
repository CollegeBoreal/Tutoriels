# Customer

This component displays the customer

##### Detail

* Generate the `Customer` Component

```
$ ng generate component customer
```

##### Change the controller by editing the `customer.component.ts` file 

 1) add the `customer` variable 

```typescript
  customer: Customer;
```

 2) Edit the `constructor` by injecting the `CustomersService` and `ActivatedRoute` that will allow us to retrieve the route parameter

```typescript
  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }
```

3) Add code to the `nbOnInit()` function to retrive the customer data from it's :id:

```typescript
    this.route.params.pipe(
      map((params: Params) => params.customerId),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
```


* Final Result

```typescript
import {Component, OnInit} from '@angular/core';
import {Customer, CustomersService} from '../services';
import {ActivatedRoute, Params} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.customerId),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }
}
```

###### Change the template by editing the `customer.component.html` file 

* It will display the Customer Component

```html
<mat-list *ngIf="customer">
  <h3 mat-subheader>Customer ID: {{customer.id}}</h3>
  <mat-list-item>
    <mat-icon mat-list-icon>perm_identity</mat-icon>
    <h4 mat-line>{{customer.name}}</h4>
    <p mat-line>Customer</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>email</mat-icon>
    <h4 mat-line>{{customer.email}}</h4>
    <p mat-line>Email</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>phone</mat-icon>
    <h4 mat-line>{{customer.phone}}</h4>
    <p mat-line>Phone</p>
  </mat-list-item>
</mat-list>
```


##### Routing

1) Add the routing to `app-routing.module.ts` `routes` constant

```typescript
  { path: 'customers/:customerId', component: CustomerComponent },
```

* Final Result

```typescript
const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];
```

2) Add the Router Link to `customers.component.html` Master file

```html
routerLink="/customers/{{customer.id}}"
```

* Final Result

```html
<mat-list *ngIf="customers">
  <h3 mat-subheader>Customers</h3>
  <mat-list-item *ngFor="let customer of customers" routerLink="/customers/{{customer.id}}">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{customer.name}}</h4>
    <p mat-line> {{customer.email}} </p>
  </mat-list-item>
</mat-list>
```

[:fast_forward: Next ](customer-form.md)
