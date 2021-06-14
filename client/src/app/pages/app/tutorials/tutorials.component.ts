import { HttpClient, HttpErrorResponse, HttpHeaderResponse, } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

interface ITutorial {
  title: string;
  youtube_url: string;
}

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  tutorials: ITutorial[] | [] = [];
  openedVideo = '';
  search = '';
  loading = false;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private auth: AuthGuardService,
  ) { }

  getUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.loadTutorials();
  }

  loadTutorials(): void {
    this.loading = true;
    const promise = this.http.post(
      API_BASE_URL + apiRoutes['search-tutorials'],
      { search: this.search },
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.tutorials = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
  }
}
