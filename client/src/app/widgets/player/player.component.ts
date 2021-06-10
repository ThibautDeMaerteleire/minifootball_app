import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ASSETS_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-player-widget',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  assetsUrl = ASSETS_BASE_URL;

  @Input() loading = true;
  @Input() data: any;

  constructor(public location: Location) {}

}
