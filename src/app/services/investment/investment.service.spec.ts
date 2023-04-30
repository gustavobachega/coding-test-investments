import { TestBed } from '@angular/core/testing';

import { InvestmentService } from './investment.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('InvestmentService', () => {
  let service: InvestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [InvestmentService]
    });
    service = TestBed.inject(InvestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
