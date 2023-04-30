import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentWithdrawalComponent } from './investment-withdrawal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';

describe('InvestmentWithdrawalComponent', () => {
  let component: InvestmentWithdrawalComponent;
  let fixture: ComponentFixture<InvestmentWithdrawalComponent>;
  let mockPromiseResult: Promise<boolean>

  const mock = {
    nome: "Nome teste",
    objetivo: "Obj teste",
    saldoTotal: 39321.29,
    indicadorCarencia: "N",
    acoes: [
      {
        id: "1",
        nome: "Banco do Brasil (BBAS3)",
        percentual: 28.1,
        saldoAcumulado: 11049.282490000001
      }
    ]
  }

  const stockMock = {
    id: "1",
    nome: "Banco do Brasil (BBAS3)",
    percentual: 28.1,
    saldoAcumulado: 2,
    withdrawValue: 0.01,
    hasError: false
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentWithdrawalComponent],
      imports: [MatDialogModule, MatIconModule, MatCardModule, MatTableModule, RouterTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InvestmentWithdrawalComponent);
    component = fixture.componentInstance;
    component.detailsData = mock;
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

  it('should call calculateTotal', () => {
    component.calculateTotal(1, stockMock)
    expect(stockMock.hasError).toBe(false)
  });

  it('should return has error', () => {
    component.calculateTotal(3, stockMock)
    expect(stockMock.hasError).toBe(true)
  });

  it('should call hasError function', () => {
    component.hasError(stockMock)
    expect(stockMock.hasError).toBeDefined()
  });

  it('should call router navigate', () => {
    spyOn(component.router, 'navigate').and.returnValue(mockPromiseResult);
    component.goBack();

    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should call openModal function', () => {
    component.openModal()
    expect(component.dialog).toBeDefined()
  });
});
