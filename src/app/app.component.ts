import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd, GuardsCheckStart, NavigationCancel, Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './features/core/components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TopBarComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'ng-experiment';
  loading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof GuardsCheckStart) {
        this.loading = true;
      }
      if (event instanceof GuardsCheckEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
