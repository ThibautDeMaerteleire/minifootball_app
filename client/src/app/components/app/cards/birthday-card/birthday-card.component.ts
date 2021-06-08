import { Component, Input, } from '@angular/core';
import { ASSETS_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrls: ['./birthday-card.component.scss']
})
export class BirthdayCardComponent {

  assetsUrl = ASSETS_BASE_URL;
  @Input() birthday: any = new Date();
  @Input() thumbnail = '';
  @Input() name = '';
  @Input() surname = '';
  @Input() username = '';
  @Input() playerId = '';

  getAge(): number {
    const now = new Date();
    return now.getFullYear() - this.birthday.getFullYear();
  }
}
