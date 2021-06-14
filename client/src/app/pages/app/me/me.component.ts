import { HttpClient, HttpErrorResponse, HttpHeaderResponse, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  data: any = null;
  loading = false;

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.loading = true;
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.me,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.data = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
  }
}
