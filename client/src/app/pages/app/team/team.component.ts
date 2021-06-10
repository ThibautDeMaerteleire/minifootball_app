import { Location } from '@angular/common';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { detailTeamRoutesEnum } from 'src/app/constants/routes.enum';

interface INavItem {
  url: string;
  text: string;
  function: number;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  data: any = null;
  loading = false;
  id = this.route.snapshot.paramMap.get('id');
  authkey: string = window.sessionStorage.getItem('Authentication') || '';

  navItems: INavItem[] = [{
    url: detailTeamRoutesEnum.overview,
    text: 'Overview',
    function: 0
  }, {
    url: detailTeamRoutesEnum.ranking,
    text: 'Ranking',
    function: 0,
  }, {
    url: detailTeamRoutesEnum.matches,
    text: 'Matches',
    function: 0,
  }, {
    url: detailTeamRoutesEnum.practice_matches,
    text: 'Practice Matches',
    function: 2,
  }, {
    url: detailTeamRoutesEnum.players,
    text: 'Players',
    function: 0,
  }, {
    url: detailTeamRoutesEnum.add_players,
    text: 'Add Players',
    function: 4,
  }, {
    url: detailTeamRoutesEnum['line-ups'],
    text: 'Line Ups',
    function: 4,
  }, {
    url: detailTeamRoutesEnum.settings,
    text: 'Settings',
    function: 10
  }];

  constructor(
    public location: Location,
    public route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getTeam();
    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getTeam(): void {
    this.loading = true;
    
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.team + this.id,
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.route.data = d;
      this.data = d;
      this.loading = false;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

  checkFunction(func_id: number): boolean {
    if (this.data && 'function_id' in this.data) {
      return this.data.function_id >= func_id;
    }
    return func_id < 2;
  }

}