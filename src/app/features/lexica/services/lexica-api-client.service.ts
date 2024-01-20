import { Injectable } from '@angular/core';
import { WordDefinition } from '../model/word-definition';
import { LexicaConfigurationService } from './lexica-configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LexicaApiClientService {
  constructor(
    private lexicaConfiguration: LexicaConfigurationService,
    private httpClient: HttpClient,
  ) {}

  getWordDefinitions(word: string): Observable<WordDefinition[]> {
    const lexicaApiHost = this.lexicaConfiguration.lexicaApiHost;

    return this.httpClient.get<WordDefinition[]>(`${lexicaApiHost}/words/${word}/definitions`, {
      responseType: 'json',
    });
  }
}

