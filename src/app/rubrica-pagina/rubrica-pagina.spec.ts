import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaPagina } from './rubrica-pagina';

describe('RubricaPagina', () => {
  let component: RubricaPagina;
  let fixture: ComponentFixture<RubricaPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubricaPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(RubricaPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
