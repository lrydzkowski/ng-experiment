import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { NotificationsConfigurationService } from './notifications-configuration.service';

@Injectable({
  providedIn: 'root',
})
export class SignalrNotificationsService {
  private hubConnection: HubConnection | null = null;
  private methods = {
    ReceiveNewNotifications: 'ReceiveNewNotifications',
  };

  constructor(private configuration: NotificationsConfigurationService) {}

  public async startConnection(accessToken: string): Promise<void> {
    if (this.hubConnection !== null) {
      return;
    }

    try {
      const host = this.configuration.signalrNotificationsHost;
      this.hubConnection = new HubConnectionBuilder()
        .withUrl(`${host}/notifications-hub`, { accessTokenFactory: () => accessToken })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      this.addNewNotificationsListener();
      await this.hubConnection.start();
      console.log('SignalR connected');
    } catch (error) {
      this.hubConnection = null;

      throw error;
    }
  }

  public stopConnection(): void {
    this.removeNewNotificationsListener();
    this.hubConnection?.stop();
    this.hubConnection = null;
  }

  public async getAllNotifications(): Promise<void> {
    if (this.hubConnection === null) {
      return;
    }

    const notifications = await this.hubConnection?.invoke('GetAllNotifications');
    console.log('AllNotifications');
    console.log(notifications);
  }

  private addNewNotificationsListener(): void {
    this.hubConnection?.on(this.methods.ReceiveNewNotifications, (data) => {
      console.log(this.methods.ReceiveNewNotifications);
      console.log(data);
    });
  }

  private removeNewNotificationsListener(): void {
    this.hubConnection?.off(this.methods.ReceiveNewNotifications);
  }
}
