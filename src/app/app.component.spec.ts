import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

describe('AppComponent', () => {
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {
      isAuthenticated$: of(false),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
      ],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-experiment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-experiment');
  });
});
