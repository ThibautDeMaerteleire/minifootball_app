import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { RbfaApiService } from 'src/app/services/rbfa-api/rbfa-api.service';

@Component({
  selector: 'app-ranking-team',
  templateUrl: './ranking-team.component.html',
  styleUrls: ['./ranking-team.component.scss']
})
export class RankingTeamComponent implements OnInit {

  teamData: any = null;
  rankings: any = null;
  loading = true;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private rbfaApi: RbfaApiService,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getTeam();
    return;
  }

  getTeam(): void {
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.team + this.id,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.route.data = d.team;
      this.teamData = d.team;
      this.getRBFARanking();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }

  getRBFARanking(teamId: string | number = this.teamData.rbfa_team_id): void {
    const promise = this.http.get(this.rbfaApi.teamRanking(teamId)).toPromise();

    promise.then((d: any) => {
      this.rankings = d.data.teamSeriesAndRankings.rankings;
      console.log(d);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }


}
