import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { RbfaApiService } from 'src/app/services/rbfa-api/rbfa-api.service';

interface ITeam {
  id: number;
  name: string;
  thumbnail: string;
  rbfa_club_id: string;
  rbfa_team_id: string;
  url: string;
}

@Component({
  selector: 'app-find-club-widget',
  templateUrl: './find-club.component.html',
  styleUrls: ['./find-club.component.scss']
})
export class FindClubComponent implements OnInit {

  assetsPrefix = ASSETS_BASE_URL;
  loading = false;
  selectedItem: string | number = -1;
  search = '';
  teams: ITeam[] | [] = [];
  authkey: string = window.localStorage.getItem('Authentication') || '';
  page = 1;
  totalItems = 1;

  @Input() select = false;

  @Output() selectedTeamId = new EventEmitter<string | number>();

  constructor(private http: HttpClient, private router: Router, private rbfaApi: RbfaApiService) {}

  ngOnInit(): void {
    this.select ? this.getRBFAClubs() : this.getFootyTeams();
    return;
  }

  getFootyTeams(searchValue = this.search): void {
    this.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['search-teams'],
      { search: searchValue, page: this.page },
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: ITeam[] |any) => {
      this.teams = this.footyTeamsMapper(d);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  getRBFAClubs(searchValue = this.search.length > 0 ? this.search : '*'): void {
    this.loading = true;
    const promise = this.http.get(this.rbfaApi.searchClubs(searchValue)).toPromise();

    promise.then((d: any) => {
      this.teams = this.rbfaMapper(d);
      console.log(this.teams);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  rbfaMapper(data: any): ITeam[] {
    return data.data.search.results.map((club: any): ITeam => {
      return {
        id: club.id,
        name: club.clubName,
        thumbnail: club.logo,
        rbfa_club_id: club.id,
        rbfa_team_id: '',
        url: `https://www.rbfa.be/nl/club/${club.id}/info`,
      };
    });
  }

  footyTeamsMapper(data: any): ITeam[] {
    this.totalItems = data.totalItems;
    return data.data.map((team: any): ITeam => {
      return {
        id: team.id,
        name: team.name,
        thumbnail: ASSETS_BASE_URL + team.thumbnail,
        rbfa_club_id: team.rbfa_club_id,
        rbfa_team_id: team.rbfa_team_id,
        url: `https://www.rbfa.be/nl/club/${team.rbfa_club_id}/ploeg/${team.rbfa_team_id}/overzicht`,
      };
    });
  }

  clickItem(id: string | number): void {
    this.selectedItem = id;
    this.selectedTeamId.emit(this.teams.find((e) => e.id == id)?.rbfa_club_id);
    if (!this.select) {
      this.router.navigateByUrl('/app/team/' + id);
      return;
    }
  }

  changePage(e: number): void {
    this.page = e;
    this.getFootyTeams();
    return;
  }
}
