import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'core-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
})
export class TopBarComponent {
  isAuthenticated = false;

  constructor(public auth: AuthService) {
    afterNextRender(() => {
      this.auth.isAuthenticated$.subscribe({
        next: (isAuthenticated) => {
          this.isAuthenticated = isAuthenticated;
        },
      });
    });
  }
}
