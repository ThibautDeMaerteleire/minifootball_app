import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';


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
  players: IPlayer[] | [] = [];
  functions: IFunction[] | [] = [];
  selectedPlayers: IPlayer[] | [] = [];
  error = '';
  page = 1;
  totalItems = 1;

  @Input() search = '';
  @Input() teamId: string | number = '';

  @Output() submitPlayers = new EventEmitter<IPlayer[] | []>();
  @Output() submitFunctions = new EventEmitter<IFunction[] | []>();

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    this.getFunctions();
    this.getPlayers();
    return;
  }

  clickPlayer(id: string | number): void {
    this.checkSelected(id) ? this.removePlayer(id) : this.addPlayer(id);
    this.submit();
    return;
  }

  addPlayer(id: string | number): void {
    const newPlayer = this.players.find((e) => e.id.toString() === id.toString());
    if (newPlayer) {
      this.selectedPlayers = [
        ...this.selectedPlayers,
        newPlayer
      ];
    }

    return;
  }

  removePlayer(id: string | number): void {
    this.selectedPlayers = this.selectedPlayers.filter((e: IPlayer) => e.id.toString() !== id.toString());
    return;
  }

  checkSelected(id: string | number): boolean {
    return !!this.selectedPlayers.find((a: IPlayer) => a.id.toString() === id.toString());
  }

  getPlayers(): void {
    this.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['search-players'],
      { search: this.search, page: this.page, teamId: this.teamId },
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: IPlayer[] |any) => {
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
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: IFunction[] | any) => {
      this.functions = d;
      this.loading = false;
      this.submitFunctions.emit(d);
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }

  mapper(data: any): IPlayer[] {
    this.totalItems = data.totalItems;
    return data.data.map((e: any) => {
      return {
        ...e,
        thumbnail: ASSETS_BASE_URL + e.thumbnail,
      };
    });
  }

  validation(): string {
    const playerWithoutFunction = this.selectedPlayers.find((e: IPlayer) => e.function === undefined);
    if (playerWithoutFunction) {
      return `You didn't select a function for ${playerWithoutFunction.name} ${playerWithoutFunction.surname}.`;
    }

    return '';
  }

  submit(): void {
    this.error = this.validation();
    if (this.error.length > 0) {
      return;
    }
    this.submitPlayers.emit(this.selectedPlayers);
    return;
  }

  onChangeSelectData(ev: Event): void {
    this.submit();
    return;
  }

  changePage(e: number): void {
    this.page = e;
    this.getPlayers();
    return;
  }
}
