import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';

@Component({
  selector: 'core-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule, RouterLink],
})
export class HomePageComponent {}
