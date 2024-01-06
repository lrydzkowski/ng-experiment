import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from 'src/app/features/core/components/title-bar/title-bar.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  @Input() productId = '';

  logProductId(): void {
    console.log(this.productId);
  }
}
