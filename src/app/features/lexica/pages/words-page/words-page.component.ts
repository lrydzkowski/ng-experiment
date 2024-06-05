import { Component } from '@angular/core';
import { LexicaApiClientService } from '../../services/lexica-api-client.service';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from 'src/app/features/core/components/title-bar/title-bar.component';
import { Subject, Subscription, debounceTime, finalize } from 'rxjs';
import { LexicaApiModule, WordsService } from 'src/_generated/lexica-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-words-page',
  standalone: true,
  imports: [TitleBarComponent, MatButtonModule, LexicaApiModule],
  templateUrl: './words-page.component.html',
  styleUrl: './words-page.component.css',
})
export class WordsPageComponent {
  isLoading = false;
  private loading = new Subject<boolean>();
  private getWordDefinitionsSubscription: Subscription | null = null;

  constructor(
    private lexicaApiClient: LexicaApiClientService,
    private wordsService: WordsService,
  ) {
    this.loading.pipe(debounceTime(100)).subscribe((isLoading) => {
      console.log('subscribe');
      this.isLoading = isLoading;
    });
  }

  getWordDefinitions(): void {
    this.getWordDefinitionsSubscription?.unsubscribe();
    this.loading.next(true);
    this.getWordDefinitionsSubscription = this.wordsService
      .wordsWordDefinitionsGet('incentive')
      .pipe(
        finalize(() => {
          this.loading.next(false);
        }),
      )
      .subscribe({
        next: (definitions) => {
          console.log(definitions);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}

