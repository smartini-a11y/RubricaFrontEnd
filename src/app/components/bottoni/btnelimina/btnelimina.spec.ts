import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btnelimina } from './btnelimina';

describe('Btnelimina', () => {
  let component: Btnelimina;
  let fixture: ComponentFixture<Btnelimina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btnelimina],
    }).compileComponents();

    fixture = TestBed.createComponent(Btnelimina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
