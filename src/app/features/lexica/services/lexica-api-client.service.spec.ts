import { TestBed } from '@angular/core/testing';

import { LexicaApiClientService } from './lexica-api-client.service';
import { HttpClientModule } from '@angular/common/http';

describe('LexicaApiClientService', () => {
  let service: LexicaApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(LexicaApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

