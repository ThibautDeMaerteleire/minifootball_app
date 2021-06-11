import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { CountryFlagService } from 'src/app/services/country-flag/country-flag.service';


@Component({
  selector: 'app-players-team',
  templateUrl: './players-team.component.html',
  styleUrls: ['./players-team.component.scss']
})
export class PlayersTeamComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  id = this.route.snapshot.paramMap.get('id');
  loading = false;
  players: Array<any> = [];
  authkey: string = window.localStorage.getItem('Authentication') || '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public countryFlag: CountryFlagService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getPlayers(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes.teammembers + this.id,
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.loading = false;
      this.players = d;
      console.log(d);
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
    return;
  }

}
