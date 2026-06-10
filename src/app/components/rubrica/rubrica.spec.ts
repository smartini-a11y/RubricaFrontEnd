import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaComponent } from './rubrica';

describe('Rubrica', () => {
  let component: RubricaComponent;
  let fixture: ComponentFixture<RubricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubricaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RubricaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
