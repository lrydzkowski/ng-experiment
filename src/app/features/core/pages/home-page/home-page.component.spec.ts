import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {
      isAuthenticated$: of(false),
    };

    TestBed.configureTestingModule({
      imports: [HomePageComponent, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
