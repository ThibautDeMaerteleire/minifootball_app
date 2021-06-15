import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { RbfaApiService } from 'src/app/services/rbfa-api/rbfa-api.service';

@Component({
  selector: 'app-matches-team',
  templateUrl: './matches-team.component.html',
  styleUrls: ['./matches-team.component.scss']
})
export class MatchesTeamComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  teamData: any = null;
  rbfaClubInfo: any = null;
  rbfaCalendar: any = null;
  loading = false;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthGuardService,
    private rbfaApi: RbfaApiService,
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
      this.route.data = d.team;
      this.teamData = d.team;
      this.getRBFACalendar();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }

  getRBFACalendar(teamId: string | number = this.teamData.rbfa_team_id): void {
    const promise = this.http.get(this.rbfaApi.teamCalendar(teamId)).toPromise();

    promise.then((d: any) => {
      this.rbfaCalendar = d.data.teamCalendar;
      this.loading = false;
      console.log(this.rbfaCalendar);
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

}
