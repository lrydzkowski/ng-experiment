import { Component } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';

@Component({
  selector: 'catalog-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css'],
})
export class ProductsListPageComponent {
  products: string[] = [];

  constructor(private logger: LoggerService) {}

  addProduct(): void {
    this.products.push(crypto.randomUUID());
  }

  removeLastProduct(): void {
    if (this.products.length === 0) {
      return;
    }

    this.products.pop();
  }
}
