import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {
  currentDate = new Date();
  table = false;
  players: any = [];
  loading = false;
  authkey: string = window.sessionStorage.getItem('Authentication') || '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBirthdays();
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  getBirthdays(): void {
    this.loading = true;
    const promise = this.http.get(
      API_BASE_URL + apiRoutes.birthdays,
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.players = d;
      this.loading = false;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.loading = false;
    });
  }

  createDate(date: string): Date {
    const newDate = Date.parse(date);
    return new Date(newDate);
  }

  sortBirthdays(): any {
    const players = this.players.sort((a: any, b: any): any => {
      const date1 = this.toDate(a.player.birthday, this.currentDate);
      const date2 = this.toDate(b.player.birthday, this.currentDate);

      if (date1 < date2) {
        return -1;
      } else if(date1 > date2) {
        return 1;
      } else {
        return 0;
      }
    });

    return players;
  }

  toDate(str: string, today: Date) {
    const date = this.createDate(str);
    const day = date.getDate();
    const month = date.getMonth();
    const newDate = new Date(today.getFullYear(), month, +day);
    if (newDate < today) newDate.setFullYear(newDate.getFullYear() + 1);
    return newDate;
  }
}
