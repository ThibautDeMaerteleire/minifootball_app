import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-create-team',
  templateUrl: './info-create-team.component.html',
  styleUrls: ['./info-create-team.component.scss']
})
export class InfoCreateTeamComponent {

  @Input() startData = {
    name: '',
    slogan: '',
    description: '',
    thumbnail: '',
  };

  @Output() thumbnailEvent = new EventEmitter<string>();
  @Output() nameEvent = new EventEmitter<string>();
  @Output() sloganEvent = new EventEmitter<string>();
  @Output() descriptionEvent = new EventEmitter<string>();

}
