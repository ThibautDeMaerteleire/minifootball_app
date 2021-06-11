import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { IFunction, IPlayer } from 'src/app/widgets/add-players/add-players.component';

@Component({
  selector: 'app-add-players-team',
  templateUrl: './add-players-team.component.html',
  styleUrls: ['./add-players-team.component.scss']
})
export class AddPlayersTeamComponent {

  players: IPlayer[] = [];
  functions: IFunction[] = [];
  authkey: string = window.localStorage.getItem('Authentication') || '';
  id = this.route.snapshot.paramMap.get('id');
  submit = {
    error: '',
    loading: false,
    success: false,
  };

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
  ) { }

  headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.authkey);
  }

  postPlayers(): void {
    const checkPlayers: IPlayer | undefined = this.players?.find((e: IPlayer) => !e.function);

    if (checkPlayers) {
      this.submit.error = `Player ${checkPlayers.name} ${checkPlayers.surname} has no function yet.`;
      return;
    }

    this.submit.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['add-teammembers'],
      {
        players: this.players,
        teamId: this.id,
        addMyselfAsAdmin: false,
      },
      { headers: this.headers() }
    ).toPromise();

    promise.then((d: any) => {
      this.submit.loading = false;
      this.submit.success = true;
    }).catch((err: HttpHeaderResponse) => {
      console.error(err);
      this.submit.loading = false;
    });

    return;
  }

  findFunction(id: number | undefined): string {
    return this.functions.find((f: IFunction) => f.id == id)?.name || '';
  }

  refresh(): void {
    window.location.reload();
    return;
  }
}
