import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTNmodifica } from './btn-modifica';

describe('Btnmodifica', () => {
  let component: BTNmodifica;
  let fixture: ComponentFixture<BTNmodifica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTNmodifica],
    }).compileComponents();

    fixture = TestBed.createComponent(BTNmodifica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
