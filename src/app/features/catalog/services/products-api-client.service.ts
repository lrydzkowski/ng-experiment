import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogConfigurationService } from './catalog-configuration.service';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiClientService {
  constructor(
    private catalogConfiguration: CatalogConfigurationService,
    private httpClient: HttpClient,
  ) {}

  getProducts(): Observable<Product[]> {
    const catalogHost = this.catalogConfiguration.catalogApiHost;

    return this.httpClient.get<Product[]>(`${catalogHost}/products`, {
      responseType: 'json',
    });
  }
}

