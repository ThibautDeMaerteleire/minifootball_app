import { HttpClient, HttpErrorResponse, HttpHeaderResponse, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  loading = false;
  updates: any[] = [];

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getUpdates();
    return;
  }

  getUpdates(): void {
    this.loading = true;
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.updates,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.updates = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

  JSONFeatures(jsonStr: string): any {
    return JSON.parse(jsonStr);
  }

}
