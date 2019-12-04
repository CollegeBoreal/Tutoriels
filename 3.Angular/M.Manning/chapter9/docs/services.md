# Services 

Services are used to access data from the backend

```html
<P>...This is a bit long so pay attention to details...</P>
```

### State Management

##### Create class needed to manage Customers

* Generate the Customer `Class`

```
$ ng generate class services/Customer --skipTests
```

* Add the Customer `Fields` to the `customer.ts` file


```typescript
export class Customer {
  email: string;
  id: number;
  name: string;
  phone: string;
}
```

##### Create class needed to manage Invoices

* Generate the Invoice `Class`

```
$ ng generate class services/Invoice --skipTests
```

* Add the Invoice `Fields` to the `invoice.ts` file


```typescript
export class Invoice {
  customerId: number;
  date: string;
  hours: number;
  id: number;
  paid: boolean = false;
  rate: number;
  service: string;
}
```

##### Create Interface needed to manage a Generic State through a Query 

* Generate the Query `Interface`

```
$ ng generate interface services/Query
```

* Add the Query `Fields` to the `query.ts` file

```typescript
export interface Query {
  limit?: number;
  order?: string;
  sort?: string;
  embed?: string;
  expand?: string;
}
```

### State Access Management

##### Base State Access Management

* Generate the Rest `Service` which is a generic source code for both Invoices and Customers

```
$  ng generate service services/Rest
```

* Replace Rest Service Code by opening `rest.service.ts` and changing all its content with:

`^a` select all its content

`^v` paste

:bookmark: `@Injectable` Decorator allowing service injection

```typescript
import {Inject, Injectable} from '@angular/core';
import {Query} from './query';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  base: string = 'http://localhost:3000';
  resource: string = '/';
  type: any;

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  get url() {
    return this.base + this.resource;
  }

  query<T>(query?: Query) {
    let url = this.url;
    if (query) {
      url += `?${this.toQueryString(query)}`;
    }

    return this.http.get<T>(url);
  }

  get<T>(id: number) {
    return this.http.get<T>(this.url + '/' + id);
  }

  create<T>(body: any) {
    return this.http.post<T>(this.url, body);
  }

  update<T>(id: number, body: any) {
    return this.http.put<T>(this.url + '/' + id, body);
  }

  delete<T>(id: number) {
    return this.http.delete<T>(this.url + '/' + id);
  }

  private toQueryString(paramsObject) {
    return Object
      .keys(paramsObject)
      .map(key => `_${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
      .join('&');
  }
}
```

##### Inherited State Access Management

* Generate the `Customers` Service


```
$ ng generate service services/customers 
```

* Edit the inherited source code by changing  the `customers.service.ts` file


```typescript
@Injectable({
  providedIn: 'root'
})
export class CustomersService extends RestService {
  resource: string = '/customers';
}
```

* Generate the `Invoices` Service

```
$ ng generate service services/invoices
```

* Edit the inherited source code by changing  the `invoices.service.ts` file

```typescript
@Injectable({
  providedIn: 'root'
})
export class InvoicesService extends RestService {
  resource: string = '/invoices';
}
```

### Advertise the newly created services, data classes and connect to App Module


* Using [Barrel](https://medium.com/@adrianfaciu/barrel-files-to-use-or-not-to-use-75521cd18e65) files

* Generate the `Index` file

```
$ ng generate interface services/index
```

* Edit the file `index.ts` by replace its content with the below

```typescript
export * from './customer';
export * from './customers.service';
export * from './invoice';
export * from './invoices.service';
```

* Add the `HttpClientModule` allowing access to the outside world to the App Module file

- Edit the `app.module.ts` file and add the `HttpClientModule` to the `imports:` metadata, see final result

```typescript
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...NB_MODULES,
    ...MAT_MODULES
  ],
```

[:fast_forward: Next ](customers.md)
