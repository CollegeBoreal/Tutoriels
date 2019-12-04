# Form Validation

##### Create a Phone Validator

* Create a `TypeScript` file `src/app/validators/phone.validator.ts` and add the below snippet:

```typescript
  import { AbstractControl, ValidatorFn } from '@angular/forms';

  export function HoursValidator(control: AbstractControl) : { [key: string]: any } {     
    return (Number.isInteger(control.value * 4)) ? null : { hours: true };     
  }
```

the `HoursValidator` function will be added to the Validators Array qualifying `hours:` field in the `invoiceForm` `FormGroup`

```typescript
      hours: ['', [Validators.required, HoursValidator]],
```

* Edit `invoice-form.component.ts` and add the new Validator to the the `invoiceForm` `FormGroup` class variable


```typescript
    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required, HoursValidator]],
      date: ['', Validators.required],
      paid: ['']
    });
```

* Edit `invoice-form.component.html` template and the validation messages enclosed by the `<mat-error>` tag

```html 
<form *ngIf="invoice" [formGroup]="invoiceForm" (ngSubmit)="save()">
  <mat-card>
    <mat-card-header>Edit Invoice</mat-card-header>
    <mat-card-content>
      <mat-form-field>
        <input name="service" matInput type="text" placeholder="Service" formControlName="service">
        <mat-error *ngIf="invoiceForm.get('service').touched && invoiceForm.get('service').invalid">
          Service is required
        </mat-error>
      </mat-form-field>
      <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date" formControlName="date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-error *ngIf="invoiceForm.get('date').touched && invoiceForm.get('date').invalid">
          Date is required
        </mat-error>
      </mat-form-field>
      <mat-datepicker #picker></mat-datepicker>
      <mat-form-field>
        <input name="hours" matInput type="number" placeholder="Hours" formControlName="hours">
        <mat-error *ngIf="invoiceForm.get('hours').touched && invoiceForm.get('hours').invalid">
          Hours must be in quarter hour increments
        </mat-error>
      </mat-form-field>
      <mat-form-field>
        <input name="rate" matInput type="number" placeholder="Rate" formControlName="rate">
        <mat-error *ngIf="invoiceForm.get('rate').touched && invoiceForm.get('rate').invalid">
          Hourly rate is required
        </mat-error>
      </mat-form-field>
      <div>
        <mat-select name="customerId" placeholder="Customer" formControlName="customerId">
          <mat-option [value]="customer.id" *ngFor="let customer of customers">{{customer?.name}}</mat-option>
        </mat-select>
      </div>
      <div class="toggler">
        <mat-slide-toggle formControlName="paid">Paid</mat-slide-toggle>
      </div>
      <div class="total">
        Total: {{total | currency:'USD':true:'.2'}}
      </div>
    </mat-card-content>
    <mat-card-actions>
      <button type="button" mat-button (click)="delete()" *ngIf="invoice.id">Delete</button>
      <button type="button" mat-button (click)="cancel()">Cancel</button>
      <button type="submit" mat-raised-button color="primary" [disabled]="invoiceForm.invalid">Save</button>
    </mat-card-actions>
  </mat-card>
</form>
```
