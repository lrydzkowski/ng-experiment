import { Component } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SpyDirective } from '../../directives/spy.directive';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from '../../../core/components/title-bar/title-bar.component';

@Component({
  selector: 'catalog-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css'],
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule, NgFor, SpyDirective],
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
