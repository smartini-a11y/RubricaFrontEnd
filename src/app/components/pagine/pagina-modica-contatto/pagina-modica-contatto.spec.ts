import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModificaComponent } from './pagina-modica-contatto';

describe('PaginaModicaContatto', () => {
  let component: PaginaModificaComponent;
  let fixture: ComponentFixture<PaginaModificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaModificaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaModificaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
