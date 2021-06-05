import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-done-create-team',
  templateUrl: './done-create-team.component.html',
  styleUrls: ['./done-create-team.component.scss']
})
export class DoneCreateTeamComponent {

  @Input() teamName = '';
  @Input() teamThumbnail = '';

  @Output() resetValues = new EventEmitter<Event>();

}
