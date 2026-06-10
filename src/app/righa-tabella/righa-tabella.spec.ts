import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigaTabella } from './righa-tabella';

describe('RighaTabella', () => {
  let component: RigaTabella;
  let fixture: ComponentFixture<RigaTabella>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigaTabella],
    }).compileComponents();

    fixture = TestBed.createComponent(RigaTabella);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
