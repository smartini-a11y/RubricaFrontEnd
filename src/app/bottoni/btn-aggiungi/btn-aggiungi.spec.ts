import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTNaggiungi } from './btn-aggiungi';

describe('BTNaggiungi', () => {
  let component: BTNaggiungi;
  let fixture: ComponentFixture<BTNaggiungi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTNaggiungi],
    }).compileComponents();

    fixture = TestBed.createComponent(BTNaggiungi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
