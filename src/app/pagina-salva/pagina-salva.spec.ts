import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSalvaComponent } from './pagina-salva';

describe('PaginaSalva', () => {
  let component: PaginaSalvaComponent;
  let fixture: ComponentFixture<PaginaSalvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSalvaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaSalvaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
