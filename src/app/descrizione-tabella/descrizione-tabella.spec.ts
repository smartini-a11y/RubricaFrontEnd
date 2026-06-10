import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneTabella } from './descrizione-tabella';

describe('DescrizioneTabella', () => {
  let component: DescrizioneTabella;
  let fixture: ComponentFixture<DescrizioneTabella>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescrizioneTabella],
    }).compileComponents();

    fixture = TestBed.createComponent(DescrizioneTabella);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
