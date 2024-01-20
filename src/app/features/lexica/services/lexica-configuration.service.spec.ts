import { TestBed } from '@angular/core/testing';

import { LexicaConfigurationService } from './lexica-configuration.service';

describe('LexicaConfigurationService', () => {
  let service: LexicaConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LexicaConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
