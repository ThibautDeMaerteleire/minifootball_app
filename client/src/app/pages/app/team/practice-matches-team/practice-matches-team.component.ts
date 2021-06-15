import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

interface ICreatePracticeMatch {
  date: any | null;
  error: string;
  loading: boolean;
  loadingTeams: boolean;
  search: string;
  selectedTeam: ISelectedTeam | null;
  success: boolean;
  teams: Array<any>;
}

interface ISelectedTeam {
  id: number | string;
  name: string;
}

@Component({
  selector: 'app-practice-matches-team',
  templateUrl: './practice-matches-team.component.html',
  styleUrls: ['./practice-matches-team.component.scss']
})
export class PracticeMatchesTeamComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  loading = false;
  practiceMatches: any = null;
  id = this.route.snapshot.paramMap.get('id');
  createPracticeMatch: ICreatePracticeMatch = {
    date: null,
    error: '',
    loading: false,
    loadingTeams: false,
    search: '',
    selectedTeam: null,
    success: false,
    teams: [],
  };

  constructor(
    public location: Location,
    public route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthGuardService,
    private i18n: NzI18nService,
  ) { }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.getPracticeMatches();
    return;
  }

  getPracticeMatches(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes['practice-matches'] + this.id,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.route.data = d;
      this.practiceMatches = this.mapper(d);
      console.log(this.practiceMatches);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  mapper(data: any): any {
    return [{
      name: 'Waiting for acceptance',
      matches: data.filter((match: any) => !match.accepted),
    }, {
      name: 'Upcoming matches',
      matches: data.filter((match: any) => (!match.date || new Date(match.date) >= new Date()) && !!match.accepted),
    }, {
      name: 'Played matches',
      matches: data.filter((match: any) => (!!match.date && new Date(match.date) < new Date()) && !!match.accepted),
    }];
  }

  acceptRequest(id: number | string): void {
    this.loading = true;

    const promise = this.http.put(
      API_BASE_URL + apiRoutes['accept-practice-match-request'],
      { id: id },
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.getPracticeMatches();
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  searchOpponents(): void {
    if (this.createPracticeMatch.search.length > 0) {
      this.createPracticeMatch.loadingTeams = true;

      const promise = this.http.post(
        API_BASE_URL + apiRoutes['search-teams'],
        { search: this.createPracticeMatch.search },
        { headers: this.auth.getAuthHeaders() }
      ).toPromise();
  
      promise.then((d: any) => {
        this.createPracticeMatch.teams = d.data.filter((team: any) => this.id != team.id);
        this.createPracticeMatch.loadingTeams = false;
      }).catch((err: HttpErrorResponse) => {
        console.error(err);
        this.createPracticeMatch.error = err.message;
        this.createPracticeMatch.loadingTeams = false;
      });
    } else {
      this.createPracticeMatch.error = 'You need to give in 3 characters at least.';
    }
    return;
  }

  submitCreatePracticeMatch(): void {
    this.createPracticeMatch.error = this.createPracticeMatchValidation();
    
    if (this.createPracticeMatch.error.length > 0) {
      return;
    }

    this.createPracticeMatch.loading = true;

    const body = {
      home_team: this.id,
      away_team: this.createPracticeMatch.selectedTeam?.id,
      date: this.createPracticeMatch.date,
    };

    console.log(body);

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['create-practice-match'],
      body,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.createPracticeMatch.success = true;
      this.createPracticeMatch.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.createPracticeMatch.error = err.message;
      this.createPracticeMatch.loading = false;
    });

    return;
  }

  createPracticeMatchValidation(): string {
    if (!this.createPracticeMatch.date) {
      return 'You didn\'t select a date.';
    }

    if (!this.createPracticeMatch.selectedTeam) {
      return 'You didn\'t select a team.';
    }

    return '';
  }

}
