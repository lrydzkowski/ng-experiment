import { TestBed } from '@angular/core/testing';

import { NotificationsConfigurationService } from './notifications-configuration.service';

describe('NotificationsConfigurationService', () => {
  let service: NotificationsConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
