import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

export interface IPlayerData {
  name: string;
  surname: string;
  thumbnail_path: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  welcomeDisplay = true;
  data: any = false;
  firstname = '';
  surname = '';
  thumbnailUrl = '';
  authkey: string = window.sessionStorage.getItem('Authentication') || '';
  playerErrMsg = '';
  
  constructor(private http: HttpClient, private router: Router) {}

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }
  
  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(): void {
    const promise = this.http.get(API_BASE_URL + apiRoutes.dashboard, { headers: this.headers() }).toPromise();
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

  addPlayerData(): void {
    this.playerErrMsg = this.addPlayerValidation();
    if (this.playerErrMsg.length > 0) return;

    const body: IPlayerData = {
      name: this.firstname,
      surname: this.surname,
      thumbnail_path: this.thumbnailUrl,
    };

    console.log(body);

    const promise = this.http.post(API_BASE_URL + apiRoutes.dashboard, body, { headers: this.headers() }).toPromise();
    promise.then((d: any) => {
      console.log(d);
      this.getDashboardData();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }

  addPlayerValidation(): string {
    if (this.firstname.length < 2) return 'Firstname is to short';
    if (this.surname.length < 2) return 'Surname is to short';
    if (this.thumbnailUrl.length < 5) return 'No thumbnail selected';
    return '';
  }

  checkForPlayerData(): boolean {
    return this.data ? 'name' in this.data.player : false;
  }

}
