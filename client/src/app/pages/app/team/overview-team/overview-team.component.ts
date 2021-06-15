import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { RbfaApiService } from 'src/app/services/rbfa-api/rbfa-api.service';

@Component({
  selector: 'app-overview-team',
  templateUrl: './overview-team.component.html',
  styleUrls: ['./overview-team.component.scss']
})
export class OverviewTeamComponent implements OnInit {

  loading = true;
  assetsUrl = ASSETS_BASE_URL;
  teamData: any = null;
  rbfaClubInfo: any = null;
  rbfaCalendar: any = null;
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
      this.getRBFAClubInfo();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }

  getRBFAClubInfo(clubId: string | number = this.teamData.rbfa_club_id): void {
    const promise = this.http.get(this.rbfaApi.clubInfo(clubId)).toPromise();

    promise.then((d: any) => {
      this.rbfaClubInfo = d.data.clubInfo;
      this.getRBFACalendar();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.getRBFACalendar();
    });

    return;
  }

  getRBFACalendar(teamId: string | number = this.teamData.rbfa_team_id): void {
    const promise = this.http.get(this.rbfaApi.teamCalendar(teamId)).toPromise();

    promise.then((d: any) => {
      this.rbfaCalendar = d.data.teamCalendar;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }
}
