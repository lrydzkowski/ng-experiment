import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {
      isAuthenticated$: of(false),
    };

    TestBed.configureTestingModule({
      imports: [TopBarComponent, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
