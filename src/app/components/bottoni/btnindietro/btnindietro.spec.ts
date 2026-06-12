import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btnindietro } from './btnindietro';

describe('Btnindietro', () => {
  let component: Btnindietro;
  let fixture: ComponentFixture<Btnindietro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btnindietro],
    }).compileComponents();

    fixture = TestBed.createComponent(Btnindietro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
