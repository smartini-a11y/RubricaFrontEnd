import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnElimina } from './btn-elimina';

describe('BtnElimina', () => {
  let component: BtnElimina;
  let fixture: ComponentFixture<BtnElimina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnElimina],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnElimina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
