import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoComponent } from './contatto';

describe('Contatto', () => {
  let component: ContattoComponent;
  let fixture: ComponentFixture<ContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContattoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
