import { Component } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';

@Component({
  selector: 'catalog-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
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
