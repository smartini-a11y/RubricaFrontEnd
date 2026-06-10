import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTNSalva } from './btnsalva';

describe('Btnsalva', () => {
  let component: BTNSalva;
  let fixture: ComponentFixture<BTNSalva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTNSalva],
    }).compileComponents();

    fixture = TestBed.createComponent(BTNSalva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
