import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModificaContatto } from './pagina-modifica-contatto';

describe('PaginaModicaContatto', () => {
  let component: PaginaModificaContatto;
  let fixture: ComponentFixture<PaginaModificaContatto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaModificaContatto],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaModificaContatto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
