import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RbfaApiService } from 'src/app/services/rbfa-api/rbfa-api.service';

export interface ITeamClubItem {
  id: string | number;
  name: string | number;
}

@Component({
  selector: 'app-select-team-widget',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss']
})
export class SelectTeamComponent {

  options: ITeamClubItem[] | [] = [];
  loading = false;
  selectedId: string | number = -1;

  @Input() clubId: string | number = '';
  @Output() submitSelected = new EventEmitter<string | number>();

  constructor(private http: HttpClient, private rbfaApi: RbfaApiService) { }

  ngOnChanges(): void {
    if (this.clubId.toString().length > 0) this.getClubTeams();
    return;
  }

  getClubTeams(): void {
    this.loading = true; 
    const promise = this.http.get(this.rbfaApi.searchClubTeams(this.clubId)).toPromise();

    promise.then((d: any) => {
      this.options = this.mapper(d);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
    
    return;
  }

  mapper(data: any): ITeamClubItem[] {
    return data.data.clubTeams.map((team: any): ITeamClubItem => {
      return {
        id: team.id,
        name: team.name,
      };
    });
  }

  setSelected(id: number | string): void {
    this.selectedId = id;
    this.submitSelected.emit(this.selectedId);
  }
}
