import { TestBed } from '@angular/core/testing';

import { Servizilogin } from './servizilogin';

describe('Servizilogin', () => {
  let service: Servizilogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servizilogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
