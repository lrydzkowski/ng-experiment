import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';

@Directive({
  selector: '[appSpy]',
  standalone: true,
})
export class SpyDirective implements OnInit, OnDestroy {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('on init');
  }

  ngOnDestroy(): void {
    this.logger.log('on destroy');
  }
}
