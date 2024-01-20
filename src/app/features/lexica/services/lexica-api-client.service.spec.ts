import { TestBed } from '@angular/core/testing';

import { LexicaApiClientService } from './lexica-api-client.service';

describe('LexicaApiClientService', () => {
  let service: LexicaApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LexicaApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
