import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { detailTeamRoutesEnum } from 'src/app/constants/routes.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

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
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getTeam();
    return;
  }

  getTeam(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes.team + this.id,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.route.data = d;
      this.data = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
    return;
  }

  checkFunction(functionId: number): boolean {
    if (this.data && 'function_id' in this.data) {
      return this.data.function_id >= functionId;
    }
    return functionId < 2;
  }

}
