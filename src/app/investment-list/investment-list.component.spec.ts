import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { InvestmentListComponent } from './investment-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table'
import { RouterTestingModule } from '@angular/router/testing';
import { InvestmentService } from '@services/investment/investment.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('InvestmentListComponent', () => {
  let component: InvestmentListComponent;
  let fixture: ComponentFixture<InvestmentListComponent>;
  let mockPromiseResult: Promise<boolean>
  let investmentService: InvestmentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentListComponent],
      imports: [HttpClientTestingModule, MatTableModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InvestmentListComponent);
    investmentService = TestBed.inject(InvestmentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    mockPromiseResult = mockPromise();

    async function mockPromise(): Promise<boolean> {
      const result = await Promise.resolve(true);
      return result;
    }
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router navigate', () => {
    spyOn(component.router, 'navigate').and.returnValue(mockPromiseResult);
    component.goToDetails({});

    expect(component.router.navigate).toHaveBeenCalled();
  });
});
