import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationsConfigurationService {
  get websocketNotificationsHost(): string {
    return environment.WEBSOCKET_NOTIFICATIONS_HOST;
  }

  get signalrNotificationsHost(): string {
    return environment.SIGNALR_NOTIFICATIONS_HOST;
  }
}

