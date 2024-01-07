import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketNotificationsPageComponent } from './websocket-notifications-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WebsocketNotificationsPageComponent', () => {
  let component: WebsocketNotificationsPageComponent;
  let fixture: ComponentFixture<WebsocketNotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WebsocketNotificationsPageComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(WebsocketNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
