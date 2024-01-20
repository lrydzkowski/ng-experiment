import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LexicaConfigurationService {
  get lexicaApiHost(): string {
    return environment.LEXICA_API_HOST;
  }
}

