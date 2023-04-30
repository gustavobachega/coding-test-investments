import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentWithdrawalComponent } from './investment-withdrawal.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('InvestmentWithdrawalComponent', () => {
  let component: InvestmentWithdrawalComponent;
  let fixture: ComponentFixture<InvestmentWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ InvestmentWithdrawalComponent ],
      imports: [MatDialogModule, MatIconModule, MatCardModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    history.pushState({data: {}}, '', '');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
