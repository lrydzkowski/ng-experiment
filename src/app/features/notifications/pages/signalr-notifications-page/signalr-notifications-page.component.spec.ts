import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalrNotificationsPageComponent } from './signalr-notifications-page.component';

describe('SignalrNotificationsPageComponent', () => {
  let component: SignalrNotificationsPageComponent;
  let fixture: ComponentFixture<SignalrNotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalrNotificationsPageComponent]
    });
    fixture = TestBed.createComponent(SignalrNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
