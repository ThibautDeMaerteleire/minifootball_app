import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

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
  authkey: string = window.sessionStorage.getItem('Authentication') || '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTutorials();
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  loadTutorials(): void {
    const promise = this.http.post(
      API_BASE_URL + apiRoutes['search-tutorials'],
      { search: this.search },
      { headers: this.headers() }
    ).toPromise();
    promise.then((d: any) => {
      this.tutorials = d;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
    });
  }
}
