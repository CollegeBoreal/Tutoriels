# Invoice

This component displays the invoice

##### Detail

* Generate the `Invoice` Component

```
$ ng generate component invoice
```

##### Change the controller by editing the `invoice.component.ts` file 

 1) add the `invoice` and `customer` variables

```typescript
  invoice: Invoice;
  customer: Customer;
```

 2) Edit the `constructor` by injecting the `InvoicesService`, the `InvoicesService` and `ActivatedRoute` that will allow us to retrieve the route parameter

```typescript
  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }
```

3) Add code to the `nbOnInit()` function to retrive the customer data from it's :id:

```typescript
  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.invoiceId),
      switchMap(invoiceId => this.invoicesService.get<Invoice>(invoiceId)),
      map(invoice => {
        this.invoice = invoice;
        return invoice.customerId;
      }),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }
```


* Final Result (Full Source Code)

```typescript
import {Component, OnInit} from '@angular/core';
import {Customer, CustomersService, Invoice, InvoicesService} from '../services';
import {ActivatedRoute, Params} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  customer: Customer;

  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.invoiceId),
      switchMap(invoiceId => this.invoicesService.get<Invoice>(invoiceId)),
      map(invoice => {
        this.invoice = invoice;
        return invoice.customerId;
      }),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }

}
```

###### Change the template by editing the `invoice.component.html` file 

* It will display the Invoice Component

```html
<mat-list *ngIf="invoice && customer">
  <h3 mat-subheader>Invoice ID: {{invoice.id}}</h3>
  <mat-list-item>
    <mat-icon mat-list-icon *ngIf="invoice.paid">done</mat-icon>
    <mat-icon mat-list-icon *ngIf="!invoice.paid">clear</mat-icon>
    <h4 mat-line *ngIf="invoice.paid">Payment Received</h4>
    <h4 mat-line *ngIf="!invoice.paid">Outstanding</h4>
    <p mat-line>Payment Status</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>done</mat-icon>
    <h4 mat-line>{{invoice.service}}</h4>
    <p mat-line>Service</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>date_range</mat-icon>
    <h4 mat-line>{{invoice.date | date}}</h4>
    <p mat-line>Date</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>schedule</mat-icon>
    <h4 mat-line>{{invoice.hours}} hours at {{invoice.rate | currency:'USD':'symbol-narrow':'.0'}}</h4>
    <p mat-line>Hours and Rate</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>attach_money</mat-icon>
    <h4 mat-line>{{invoice.hours * invoice.rate | currency:'USD':'symbol-narrow':'4.2-2'}}</h4>
    <p mat-line>Total Invoiced</p>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon>perm_identity</mat-icon>
    <h4 mat-line>{{customer.name}}</h4>
    <p mat-line>Customer</p>
  </mat-list-item>
</mat-list>
```


##### Routing

1) Add the routing to `app-routing.module.ts` `routes` constant

```typescript
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
```

* Final Result

```typescript
const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
];
```

2) Add the Router Link to `invoices.component.html` Master file

```html
routerLink="/invoices/{{invoice.id}}"
```

* Final Result

```html
<mat-list>
  <h3 mat-subheader>Recent Invoices</h3>
  <mat-list-item *ngFor="let invoice of invoices" routerLink="/invoices/{{invoice.id}}">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{invoice.service}}</h4>
    <p mat-line> {{invoice.date | date}} </p>
  </mat-list-item>
</mat-list>
```

[:fast_forward: Next ](invoice-form.md)
