import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent {
  @Input({ required: true }) title!: string;
}

