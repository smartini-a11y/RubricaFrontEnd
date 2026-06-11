import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContatto } from './btn-contatto';

describe('BtnContatto', () => {
  let component: BtnContatto;
  let fixture: ComponentFixture<BtnContatto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnContatto],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnContatto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
