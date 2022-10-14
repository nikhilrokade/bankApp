import { TestBed } from '@angular/core/testing';

import { BanklogicService } from './banklogic.service';

describe('BanklogicService', () => {
  let service: BanklogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanklogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
