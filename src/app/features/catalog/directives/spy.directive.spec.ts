import { LoggerService } from 'src/app/shared/services/logger.service';
import { SpyDirective } from './spy.directive';

describe('SpyDirective', () => {
  it('should create an instance', () => {
    const directive = new SpyDirective(new LoggerService());
    expect(directive).toBeTruthy();
  });
});
