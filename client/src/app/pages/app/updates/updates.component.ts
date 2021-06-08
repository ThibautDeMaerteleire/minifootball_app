import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  loading = false;
  updates: any[] = [];
  authkey: string = window.sessionStorage.getItem('Authentication') || '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUpdates();
    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getUpdates(): void {
    this.loading = true;
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.updates,
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.updates = d;
      this.loading = false;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

  JSONFeatures(jsonStr: string): any {
    return JSON.parse(jsonStr);
  }

}
