import { TestBed } from '@angular/core/testing';

import { ContattiAggingiService } from './contatti-aggingi';

describe('ContattiAggingi', () => {
  let service: ContattiAggingiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContattiAggingiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
