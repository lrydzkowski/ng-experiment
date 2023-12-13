import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketNotificationsPageComponent } from './websocket-notifications-page.component';

describe('WebsocketNotificationsPageComponent', () => {
  let component: WebsocketNotificationsPageComponent;
  let fixture: ComponentFixture<WebsocketNotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WebsocketNotificationsPageComponent],
    });
    fixture = TestBed.createComponent(WebsocketNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
