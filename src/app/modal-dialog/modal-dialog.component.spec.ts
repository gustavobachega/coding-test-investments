import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogComponent } from './modal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let fixture: ComponentFixture<ModalDialogComponent>;
  const mock = [
    {
      "id": "1",
      "nome": "Banco do Brasil (BBAS3)",
      "percentual": 28.1,
      "saldoAcumulado": 11049.282490000001,
      "withdrawValue": 1111.11,
      "hasError": false
    }
  ]
  let mockPromiseResult: Promise<boolean>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDialogComponent],
      imports: [MatDialogModule, RouterTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalDialogComponent);
    component = fixture.componentInstance;
    component.data = mock;
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

  it('should filter the data', () => {
    expect(component.data).toBe(mock);
  });

  it('should call router navigate', () => {
    spyOn(component.router, 'navigate').and.returnValue(mockPromiseResult);
    component.goHome();

    expect(component.router.navigate).toHaveBeenCalled();
  });
});
