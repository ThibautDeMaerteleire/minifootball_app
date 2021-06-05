import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-find-club-widget',
  templateUrl: './find-club.component.html',
  styleUrls: ['./find-club.component.scss']
})
export class FindClubComponent {

  selectedItem: number | null = null;
  search = '';
  
  @Input() teams: any = null;
  @Input() select = false;
  
  @Output() selectedTeamId = new EventEmitter<string>();

  log(event: any): void {
    console.log(event);
  }

  mapper(): void {
    
  }
}
