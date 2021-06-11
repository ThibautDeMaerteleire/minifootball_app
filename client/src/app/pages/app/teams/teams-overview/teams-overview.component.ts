import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.scss']
})
export class TeamsOverviewComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  teams: Array<any> = [];
  authkey: string = window.localStorage.getItem('Authentication') || '';
  loading = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  loadTeams(): void {
    this.loading = true;

    const promise = this.http.get(API_BASE_URL + apiRoutes.teams, { headers: this.headers() }).toPromise();

    promise.then((d: any) => {
      this.teams = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

}
