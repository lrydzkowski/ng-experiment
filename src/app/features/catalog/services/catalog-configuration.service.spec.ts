import { TestBed } from '@angular/core/testing';

import { CatalogConfigurationService } from './catalog-configuration.service';

describe('CatalogConfigurationService', () => {
  let service: CatalogConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
