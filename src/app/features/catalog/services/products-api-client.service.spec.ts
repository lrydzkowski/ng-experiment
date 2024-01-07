import { TestBed } from '@angular/core/testing';

import { ProductsApiClientService } from './products-api-client.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsApiClientService', () => {
  let service: ProductsApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ProductsApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

