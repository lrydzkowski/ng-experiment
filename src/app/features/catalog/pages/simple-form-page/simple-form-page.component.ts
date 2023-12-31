import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleBarComponent } from 'src/app/features/core/components/title-bar/title-bar.component';

@Component({
  selector: 'app-simple-form-page',
  standalone: true,
  imports: [TitleBarComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './simple-form-page.component.html',
  styleUrl: './simple-form-page.component.css',
})
export class SimpleFormPageComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });

  constructor(private fb: FormBuilder) {}

  get firstName() {
    return this.profileForm.get('firstName');
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }
}
