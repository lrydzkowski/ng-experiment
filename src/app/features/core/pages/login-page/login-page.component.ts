import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'core-login-page',
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(public auth: AuthService) {}
}

