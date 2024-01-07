import { TestBed } from '@angular/core/testing';

import { ProductsApiClientService } from './products-api-client.service';

describe('ProductsApiClientService', () => {
  let service: ProductsApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
