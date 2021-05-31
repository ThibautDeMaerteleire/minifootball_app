import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  welcomeDisplay = true;
  data: any = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const authkey: string = window.sessionStorage.getItem('Authentication') || '';
    const headers = new HttpHeaders().set('Authorization', authkey);

    const promise = this.http.get(API_BASE_URL + apiRoutes.dashboard, { headers: headers }).toPromise();
    promise.then((d: any) => {
      this.data = d;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  createArray(i: number): Array<any> {
    return new Array(i);
  }

  displayName(): string {
    if(this.data) {
      return 'name' in this.data.player ? this.data.player.name : this.data.username;
    }

    return '';
  }

}
