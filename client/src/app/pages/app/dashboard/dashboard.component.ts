import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { en_US, NzI18nService, } from 'ng-zorro-antd/i18n';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';


export interface IPlayerData {
  name: string;
  surname: string;
  thumbnail: string;
  birthday: Date | number | null;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  welcomeDisplay = true;
  data: any = false;
  firstname = '';
  surname = '';
  thumbnailUrl = '';
  birthday = null;
  playerErrMsg = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private i18n: NzI18nService,
    private auth: AuthGuardService
  ) {}

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.getDashboardData();
  }

  getDashboardData(): void {
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.dashboard,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.data = d;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });
  }


  createArray(i: number): Array<any> {
    return new Array(i);
  }

  addPlayerData(): void {
    this.playerErrMsg = this.addPlayerValidation();
    if (this.playerErrMsg.length > 0) {
      return;
    }

    const body: IPlayerData = {
      name: this.firstname,
      surname: this.surname,
      thumbnail: this.thumbnailUrl,
      birthday: this.birthday,
    };

    const promise = this.http.post(
      API_BASE_URL + apiRoutes.dashboard,
      body,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.getDashboardData();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }

  addPlayerValidation(): string {
    if (this.firstname.length < 2) {
      return 'Firstname is to short';
    }

    if (this.surname.length < 2) {
      return 'Surname is to short';
    }

    if (this.thumbnailUrl.length < 5) {
      return 'No thumbnail selected';
    }

    if (this.birthday === null) {
      return 'No birthday was given';
    }

    return '';
  }
}
