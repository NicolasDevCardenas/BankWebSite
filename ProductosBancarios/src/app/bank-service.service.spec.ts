import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BankServiceService } from './bank-service.service';

describe('BankServiceService', () => {
  let service: BankServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BankServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
