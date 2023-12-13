import { Component, OnDestroy } from '@angular/core';
import { SignalrNotificationsService } from '../../services/signalr-notifications.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitleBarComponent } from '../../../core/components/title-bar/title-bar.component';

@Component({
  selector: 'app-signalr-notifications-page',
  templateUrl: './signalr-notifications-page.component.html',
  styleUrls: ['./signalr-notifications-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, NgIf],
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
