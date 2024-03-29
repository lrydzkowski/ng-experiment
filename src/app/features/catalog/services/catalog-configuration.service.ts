import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogConfigurationService {
  get catalogApiHost(): string {
    return environment.CATALOG_API_HOST;
  }
}

