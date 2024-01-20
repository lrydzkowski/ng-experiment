import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {
    authServiceStub = {
      user$: of({
        name: 'test-name',
        nickname: 'test-nickname',
      }),
    };

    await TestBed.configureTestingModule({
      imports: [ProfilePageComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

