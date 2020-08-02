import { TestBed } from '@angular/core/testing';

import { ItlRestService } from './itl-rest.service';

describe('ItlRestService', () => {
  let service: ItlRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItlRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
