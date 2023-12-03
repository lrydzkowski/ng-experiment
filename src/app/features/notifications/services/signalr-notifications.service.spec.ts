import { TestBed } from '@angular/core/testing';

import { SignalrNotificationsService } from './signalr-notifications.service';

describe('SignalrNotificationsService', () => {
  let service: SignalrNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalrNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

