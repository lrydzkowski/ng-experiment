import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogConfigurationService {
  get catalogHost(): string {
    return environment.CATALOG_HOST;
  }
}

