import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  deleteAccount(): void {
    const promise = this.http.delete(
      API_BASE_URL + apiRoutes.user,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.auth.logout();
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });

    return;
  }
}
