import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'core-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule, RouterLink],
})
export class HomePageComponent {
  constructor(public auth: AuthService) {}
}
