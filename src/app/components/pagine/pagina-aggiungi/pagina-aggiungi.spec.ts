import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAggiungiComponent } from './pagina-aggiungi';

describe('PaginaAggiungi', () => {
  let component: PaginaAggiungiComponent;
  let fixture: ComponentFixture<PaginaAggiungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAggiungiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaAggiungiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
