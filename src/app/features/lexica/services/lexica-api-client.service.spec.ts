import { TestBed } from '@angular/core/testing';

import { LexicaApiClientService } from './lexica-api-client.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LexicaApiClientService', () => {
  let service: LexicaApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi())] });
    service = TestBed.inject(LexicaApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

