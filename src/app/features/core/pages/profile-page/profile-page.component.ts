import { Component, OnInit, afterNextRender } from '@angular/core';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'core-profile-page',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  loading = true;
  user: User | null = null;

  constructor(public auth: AuthService) {
    afterNextRender(() => {
      this.getUser();
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.auth.user$.subscribe({
      next: (user) => {
        this.user = user ?? null;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}

