import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  data: any = null;
  loading = false;
  authkey: string = window.localStorage.getItem('Authentication') || '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getUser(): void {
    this.loading = true;
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.me,
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.data = d;
      this.loading = false;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
  }
}
