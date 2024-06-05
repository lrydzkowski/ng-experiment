export * from './app.service';
import { AppService } from './app.service';
export * from './recordings.service';
import { RecordingsService } from './recordings.service';
export * from './sets.service';
import { SetsService } from './sets.service';
export * from './words.service';
import { WordsService } from './words.service';
export const APIS = [AppService, RecordingsService, SetsService, WordsService];
