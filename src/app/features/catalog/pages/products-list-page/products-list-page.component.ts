import { Component, OnInit } from '@angular/core';
import { SpyDirective } from '../../directives/spy.directive';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from '../../../core/components/title-bar/title-bar.component';
import { Product } from '../../model/product';
import { ProductsApiClientService } from '../../services/products-api-client.service';

@Component({
  selector: 'catalog-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule, NgFor, SpyDirective],
})
export class ProductsListPageComponent implements OnInit {
  products: Product[] = [];
  nextAvailableIndex = 1;

  constructor(private productsApiClient: ProductsApiClientService) {}

  ngOnInit(): void {
    this.productsApiClient.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.nextAvailableIndex = this.products.length + 1;
      },
      error: (error) => console.error(error),
    });
  }

  addProduct(): void {
    this.products.push({
      id: this.nextAvailableIndex,
      name: `product name ${this.nextAvailableIndex}`,
      description: `product description ${this.nextAvailableIndex}`,
      price: 99.99,
    });
    this.nextAvailableIndex++;
  }

  removeLastProduct(): void {
    if (this.products.length === 0) {
      return;
    }

    this.products.pop();
  }
}
