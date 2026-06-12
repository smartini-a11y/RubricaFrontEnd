import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTNaggiungiFam } from './btnaggiungi-fam';

describe('BTNaggiungiFam', () => {
  let component: BTNaggiungiFam;
  let fixture: ComponentFixture<BTNaggiungiFam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTNaggiungiFam],
    }).compileComponents();

    fixture = TestBed.createComponent(BTNaggiungiFam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
