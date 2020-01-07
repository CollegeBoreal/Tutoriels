# Invoice Form

This component allows the editing of invoice component

##### Create the `invoice` Form Component

```
$ ng generate component invoiceForm
```

###### Edit the `app-routing.module.ts` and add the `InvoiceFormComponent` form by adding/replacing the `routes` constant by the below snippet

```typescript
const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
];
```

###### Edit the `invoice` Form Controller `invoice-form.component.ts`


* add the invoice local variables

```typescript 
  invoiceForm: FormGroup;
  invoice: Invoice;
  customer: Customer;
  customers: Customer[];
  total = 0;
```

* change its constructor

```typescript 
  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
  }
``` 

###### Init Function

the `nbOnInit()` function will 

* change its `nbOnInit()` function



```typescript
    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required]],
      date: ['', Validators.required],
      paid: ['']
    });
```


```typescript 
  ngOnInit() {

    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required]],
      date: ['', Validators.required],
      paid: ['']
    });

    this.customersService.query<Array<Customer>>()
      .subscribe(customers => {
        this.customers = customers;
      });

    this.route.params.pipe(
      map((params: Params) => params.invoiceId)
    ).subscribe(invoiceId => {
      if (invoiceId) {
        this.invoicesService.get<Invoice>(invoiceId)
          .subscribe(invoice => {
            this.invoiceForm.setValue(invoice);
            this.invoice = invoice;
          });
      } else {
        this.invoice = new Invoice();
      }
    });

    combineLatest([
        this.invoiceForm.get('rate').valueChanges,
        this.invoiceForm.get('hours').valueChanges
      ]
    ).subscribe(([rate = 0, hours = 0]) => {
      this.total = rate * hours;
    });

  }
```

* add operation CRUD functions like `save()`, `delete()`

```typescript 
  save() {
    if (this.invoice.id) {
      this.invoicesService.update<Invoice>(this.invoice.id, this.invoiceForm.value).subscribe(response => {
        this.viewInvoice(response.id);
      });
    } else {
      this.invoicesService.create<Invoice>(this.invoiceForm.value).subscribe(response => {
        this.viewInvoice(response.id);
      });
    }
  }

  delete() {
/*
    this.dialogService.openConfirm({
      message: 'Are you sure you want to delete this invoice?',
      title: 'Confirm',
      acceptButton: 'Delete'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.loadingService.register('invoice');
        this.invoicesService.delete(this.invoice.id).subscribe(response => {
          this.loadingService.resolve('invoice');
          this.invoice.id = null;
          this.cancel();
        });
      }
    });
*/
  }
```

* add navigation functions like `cancel()`, `viewCustomer()`

```typescript 
  cancel() {
    if (this.invoice.id) {
      this.router.navigate(['/invoices', this.invoice.id]);
    } else {
      this.router.navigateByUrl('/invoices');
    }
  }

  private viewInvoice(id: number) {
    this.router.navigate(['/invoices', id]);
  }
```

* Final Result

```typescript
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CustomersService, InvoicesService, Customer, Invoice} from '../services';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup;
  invoice: Invoice;
  customer: Customer;
  customers: Customer[];
  total = 0;

  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required]],
      date: ['', Validators.required],
      paid: ['']
    });

    this.customersService.query<Array<Customer>>()
      .subscribe(customers => {
        this.customers = customers;
      });

    this.route.params.pipe(
      map((params: Params) => params.invoiceId)
    ).subscribe(invoiceId => {
      if (invoiceId) {
        this.invoicesService.get<Invoice>(invoiceId)
          .subscribe(invoice => {
            this.invoiceForm.setValue(invoice);
            this.invoice = invoice;
          });
      } else {
        this.invoice = new Invoice();
      }
    });

    combineLatest([
        this.invoiceForm.get('rate').valueChanges,
        this.invoiceForm.get('hours').valueChanges
      ]
    ).subscribe(([rate = 0, hours = 0]) => {
      this.total = rate * hours;
    });

  }

  save() {
    if (this.invoice.id) {
      this.invoicesService.update<Invoice>(this.invoice.id, this.invoiceForm.value)
        .subscribe(response => {
          this.viewInvoice(response.id);
        });
    } else {
      this.invoicesService.create<Invoice>(this.invoiceForm.value)
        .subscribe(response => {
          this.viewInvoice(response.id);
        });
    }
  }

  delete() {
    /*
        this.dialogService.openConfirm({
          message: 'Are you sure you want to delete this invoice?',
          title: 'Confirm',
          acceptButton: 'Delete'
        }).afterClosed().subscribe((accept: boolean) => {
          if (accept) {
            this.loadingService.register('invoice');
            this.invoicesService.delete(this.invoice.id).subscribe(response => {
              this.loadingService.resolve('invoice');
              this.invoice.id = null;
              this.cancel();
            });
          }
        });
    */
  }

  cancel() {
    if (this.invoice.id) {
      this.router.navigate(['/invoices', this.invoice.id]);
    } else {
      this.router.navigateByUrl('/invoices');
    }
  }

  private viewInvoice(id: number) {
    this.router.navigate(['/invoices', id]);
  }

}
```

##### Dealing with `InvoiceForm` Component

###### Install hammer JS [Gesture Support](https://material.angular.io/guide/getting-started#step-5-gesture-support) needed for (mat-slide-toggle, mat-slider, matTooltip)

* Install the library

```
$ npm install hammerjs --save
```

* import the library by editing  `main.ts` file and adding the below import:

```typescript
import 'hammerjs';
```


###### ADD `Material Design` Modules used by the template

* Edit `app.module.ts` and add `MatDatepickerModule`, `MatSelectModule` and `MatSlideToggleModule` to the existing `MAT_MODULES` constant

```typescript
// Material Modules
const MAT_MODULES = [
  --- previous modules ---
  MatDatepickerModule,
  MatSelectModule,
  MatSlideToggleModule,
];
```

###### Reactive Form Scheme

* In the `invoice-form.component.ts` Controller the `invoiceForm` variable is initialized in the `ngOnInit` function 

```typescript
  invoiceForm: FormGroup;

  ngOnInit() {
    this.invoiceForm = this.formBuilder.group({

      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required]],
      date: ['', Validators.required],
      paid: ['']
    });
    
    ... more code ...
  }
```

* In the `invoice-form.component.html` template the below scheme is used to allow form binding

Registering the [control](https://angular.io/guide/reactive-forms#step-3-registering-the-control-in-the-template) in the template 

[Associating the formgroup model and view](https://angular.io/guide/reactive-forms#step-2-associating-the-formgroup-model-and-view)


:bookmark: `formGroup` matches the `invoiceForm: FormGroup` declared in the controller

:bookmark: `formControlName`s match the `formBuilder.group` fields declared in the controller

* Edit the `invoice-form.component.html` template file


```html
<form *ngIf="invoice" [formGroup]="invoiceForm">     
  <mat-card>
    <mat-card-header>Edit Invoice</mat-card-header>
    <mat-card-content>
      <mat-form-field>
        <input name="service" matInput type="text" placeholder="Service" formControlName="service">     
      </mat-form-field>
      <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date" formControlName="date">     
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      </mat-form-field>
      <mat-datepicker #picker></mat-datepicker>
      <mat-form-field>
        <input name="hours" matInput type="number" placeholder="Hours" formControlName="hours">
      </mat-form-field>
      <mat-form-field>
        <input name="rate" matInput type="number" placeholder="Rate" formControlName="rate">
      </mat-form-field>
      <div>
        <mat-select name="customerId" placeholder="Customer" formControlName="customerId">
          <mat-option [value]="customer.id" *ngFor="let customer of customers">
            {{customer?.name}}
          </mat-option>
        </mat-select>
      </div>
      <div class="toggler">
        <mat-slide-toggle formControlName="paid">Paid</mat-slide-toggle>     
      </div>
      <div class="total">
        Total: {{total | currency:'USD':'symbol-narrow':'4.2-2'}}
      </div>
    </mat-card-content>
    <mat-card-actions>
      <button type="button" mat-button>Delete</button>
      <button type="button" mat-button>Cancel</button>
      <button type="submit" mat-raised-button color="primary">Save</button>
    </mat-card-actions>
  </mat-card>
</form>
```

* Edit the `invoice-form.component.scss` stylesheet file

:warning: Strange mouse behavior when setting the `mat-form-field`'s width to 100%


```css
:host {
  padding: 1.25rem;
}
/*
Setting the mat-form-filed width to 100%
prevents some mouse events to occur
For example, the date picker can't be activated
 */
input, mat-form-field, mat-select {
  width: 80%;
}

mat-card-actions {
  margin-top: 1.25rem;
  display: block;
}

.toggler {
  padding-top: 1.25rem;
}

.total {
  padding-top: 1.25rem;
  text-align: right;
}
```

[:fast_forward: Next ](invoice-form-validation.md)

