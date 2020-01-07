/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumsService } from './forums.service';

describe('Service: Forums', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsService]
    });
  });

  it('should ...', inject([ForumsService], (service: ForumsService) => {
    expect(service).toBeTruthy();
  }));
});
