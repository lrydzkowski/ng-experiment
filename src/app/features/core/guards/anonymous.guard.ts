import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, of, tap } from 'rxjs';

export const anonymousGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  if (!authService?.isAuthenticated$) {
    return of(true);
  }

  return authService.isAuthenticated$.pipe(
    tap((isLogged: boolean) => {
      if (isLogged) {
        router.navigate(['/home']);
      }
    }),
    map((isLogged) => !isLogged),
  );
};

