import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  data: any = null;
  loading = false;
  authkey: string = window.localStorage.getItem('Authentication') || '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getUser(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes.player + routeParams.get('id'),
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.data = d;
      this.loading = false;
      console.log(d);
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

}
