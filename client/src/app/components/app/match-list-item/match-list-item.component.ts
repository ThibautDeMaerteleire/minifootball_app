import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.scss']
})
export class MatchListItemComponent {
  @Input() date = '';
  @Input() homeName = 'home';
  @Input() homeImg = '';
  @Input() awayName = 'away';
  @Input() awayImg = '';

  public createDate(): Date {
    return new Date(this.date);
  }
}
