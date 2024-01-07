import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormPageComponent } from './simple-form-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SimpleFormPageComponent', () => {
  let component: SimpleFormPageComponent;
  let fixture: ComponentFixture<SimpleFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormPageComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
