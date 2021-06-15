import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-line-ups-overview',
  templateUrl: './line-ups-overview.component.html',
  styleUrls: ['./line-ups-overview.component.scss']
})
export class LineUpsOverviewComponent implements OnInit {

  assetsUrl = ASSETS_BASE_URL;
  lineups: any = null;
  loading = false;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getLineups();
    return;
  }

  getLineups(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes['get-lineups'] + this.id,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.route.data = d;
      this.lineups = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

}
