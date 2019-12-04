# Form Validation

##### Create a Phone `Directive`

```
$ ng generate directive validators/phone
```

##### Create a Phone Validator

* Create a `TypeScript` file `src/app/validators/phone.validator.ts` and add the below snippet:

```typescript
import {AbstractControl, ValidatorFn} from '@angular/forms';

const expression = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

export function PhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const valid = expression.test(control.value) && control.value.length < 14;
    return valid ? null : {phone: true};
  };
}
```

##### Add the Phone Validator to the Directive

* Edit the `phone.directive.ts` file and change its selector

```typescript
  selector: '[appPhoneValidation]',
```

* Add the below `providers:` field to the `@Directive` decorator  

```typescript
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
```

* Add the below local variable

```typescript
  private validator = PhoneValidator();
```

* Add the below `Validator` Class implementation to the `PhoneDirective` class

```typescript
   implements Validator
```

* Add the below `Validate` function

```typescript
  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
```

* Final Result

```typescript
import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {PhoneValidator} from './phone.validator';

@Directive({
  selector: '[appPhoneValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  private validator = PhoneValidator();

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }

}
```

##### Add the Phone Validator Directive to the customer form component

* Edit the `customer-form.component.html` file and replace its phone `<input>` field

```html
  <mat-form-field>
    <input name="phone" matInput type="tel" placeholder="Phone" appPhoneValidation
           [(ngModel)]="customer.phone" required  #phone="ngModel">
    <mat-error *ngIf="phone.touched && phone.errors?.required">
      Not a valid phone number
    </mat-error>
  </mat-form-field>
```


##### Edit `customers.component.html`

```html
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```
