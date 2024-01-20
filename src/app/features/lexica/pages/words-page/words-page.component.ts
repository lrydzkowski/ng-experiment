import { Component } from '@angular/core';
import { LexicaApiClientService } from '../../services/lexica-api-client.service';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from 'src/app/features/core/components/title-bar/title-bar.component';

@Component({
  selector: 'app-words-page',
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule],
  templateUrl: './words-page.component.html',
  styleUrl: './words-page.component.css',
})
export class WordsPageComponent {
  constructor(private lexicaApiClient: LexicaApiClientService) {}

  getWordDefinitions(): void {
    this.lexicaApiClient.getWordDefinitions('autonomous').subscribe({
      next: (definitions) => {
        console.log(definitions);
      },
    });
  }
}

