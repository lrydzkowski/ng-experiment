import { TestBed } from '@angular/core/testing';

import { ProductsApiClientService } from './products-api-client.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductsApiClientService', () => {
  let service: ProductsApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi())] });
    service = TestBed.inject(ProductsApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

