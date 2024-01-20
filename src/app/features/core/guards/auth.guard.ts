import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { of, tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  if (!authService?.isAuthenticated$) {
    return of(false);
  }

  return authService.isAuthenticated$.pipe(
    tap((isLogged: boolean) => {
      if (!isLogged) {
        router.navigate(['/login']);
      }
    }),
  );
};

