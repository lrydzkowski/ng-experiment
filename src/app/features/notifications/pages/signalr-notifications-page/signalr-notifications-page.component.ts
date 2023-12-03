import { Component, OnDestroy } from '@angular/core';
import { SignalrNotificationsService } from '../../services/signalr-notifications.service';

@Component({
  selector: 'app-signalr-notifications-page',
  templateUrl: './signalr-notifications-page.component.html',
  styleUrls: ['./signalr-notifications-page.component.css'],
})
export class SignalrNotificationsPageComponent implements OnDestroy {
  errorMessage = '';
  token = '';

  constructor(private notificationsService: SignalrNotificationsService) {}

  ngOnDestroy(): void {
    this.notificationsService.stopConnection();
  }

  async initiateConnection(): Promise<void> {
    this.errorMessage = '';
    if (this.token.length === 0) {
      this.errorMessage = 'Access token cannot be empty.';

      return;
    }

    await this.notificationsService.startConnection(this.token);
    await this.notificationsService.getAllNotifications();
  }
}

