import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  data: any = null;
  loading = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    return;
  }

  getUser(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes.player + routeParams.get('id'),
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
