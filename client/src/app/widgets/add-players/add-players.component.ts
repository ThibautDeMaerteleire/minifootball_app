import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';


export interface IPlayer {
  id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  thumbnail: string;
  birthday: Date;
  function?: number;
}

export interface IFunction {
  id: number | string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-add-players-widget',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent implements OnInit {

  loading = false;
  authkey: string = window.sessionStorage.getItem('Authentication') || '';
  players: IPlayer[] | [] = [];
  functions: IFunction[] | [] = [];
  selectedPlayers: Array<string | number> | [] = [];
  error = '';
  
  @Input() search = '';
  @Input() teamId: string | number = '';

  @Output() submitPlayers = new EventEmitter<IPlayer[] | []>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFunctions();
    this.getPlayers();
    return;
  }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  clickPlayer(id: string | number): void {
    this.checkSelected(id) ? this.removePlayer(id) : this.addPlayer(id);
    this.submit();
    return;
  }

  addPlayer(id: string | number): void {
    this.selectedPlayers = [...this.selectedPlayers, id];
    return;
  }

  removePlayer(id: string | number): void {
    this.selectedPlayers = this.selectedPlayers.filter((e: string | number) => e != id);
    return;
  }

  checkSelected(id: string | number): boolean {
    return !!this.selectedPlayers.find((a: string | number) => a == id);
  }

  getPlayers(): void {
    this.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['search-players'],
      { search: this.search },
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: IPlayer[] |any) => {
      console.log(d);
      this.players = this.mapper(d);
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  getFunctions(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes['all-functions'],
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: IFunction[] | any) => {
      this.functions = d;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  mapper(data: any): IPlayer[] {
    return data.map((e: any) => {
      return {
        ...e,
        thumbnail: ASSETS_BASE_URL + e.thumbnail,
      };
    });
  }

  getSelectedPlayers(): IPlayer[] | [] {
    return this.players.filter((player: IPlayer) => 
      !!this.selectedPlayers.find((id: string | number) => id == player.id));
  }

  validation(): string {
    const playerWithoutFunction = this.getSelectedPlayers().find((e: IPlayer) => e.function === undefined);
    if (playerWithoutFunction) {
      return `You didn't select a function for ${playerWithoutFunction.name} ${playerWithoutFunction.surname}.`;
    }

    return '';
  }

  submit(): void {
    this.error = this.validation();
    if (this.error.length > 0) return;
    this.submitPlayers.emit(this.getSelectedPlayers());
    return;
  }

  onChangeSelectData(ev: Event): void {
    this.submit();
    return;
  }
}
