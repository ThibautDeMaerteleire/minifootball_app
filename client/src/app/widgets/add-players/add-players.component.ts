import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-players-widget',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent implements OnInit {

  @Input() teamId: string | number = '';

  constructor() { }

  ngOnInit(): void {
  }

  getPlayers(): void {
    
  }

}
