import { Component, OnDestroy } from '@angular/core';
import { NotificationsConfigurationService } from '../../services/notifications-configuration.service';
import { NgIf, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitleBarComponent } from '../../../core/components/title-bar/title-bar.component';

@Component({
  selector: 'app-websocket-notifications-page',
  templateUrl: './websocket-notifications-page.component.html',
  styleUrls: ['./websocket-notifications-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, NgIf, NgFor],
})
export class WebsocketNotificationsPageComponent implements OnDestroy {
  errorMessage = '';
  token = '';
  messages: string[] = [];
  private socket: WebSocket | null = null;

  constructor(private configuration: NotificationsConfigurationService) {}

  initiateConnection(): void {
    this.errorMessage = '';
    if (this.token.length === 0) {
      this.errorMessage = 'Access token cannot be empty.';

      return;
    }

    const host = this.configuration.websocketNotificationsHost;
    this.socket = new WebSocket(`${host}/notifications`, ['websocket', this.token]);

    this.socket.onopen = (event) => {
      console.log('WebSocket connection established.');
      this.messages.push('WebSocket connection established.');
    };

    this.socket.onmessage = (event) => {
      this.messages.push(event.data);
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        this.messages.push(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.log(event);
        this.messages.push('WebSocket connection died');
      }
    };
  }

  ngOnDestroy(): void {
    this.socket?.close();
  }
}
