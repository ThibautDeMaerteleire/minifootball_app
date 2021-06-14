import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { IFunction, IPlayer } from 'src/app/widgets/add-players/add-players.component';

@Component({
  selector: 'app-add-players-team',
  templateUrl: './add-players-team.component.html',
  styleUrls: ['./add-players-team.component.scss']
})
export class AddPlayersTeamComponent {

  players: IPlayer[] = [];
  functions: IFunction[] = [];
  id = this.route.snapshot.paramMap.get('id');
  submit = {
    error: '',
    loading: false,
    success: false,
  };

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private auth: AuthGuardService,
  ) { }

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
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.submit.loading = false;
      this.submit.success = true;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.submit.loading = false;
    });

    return;
  }

  findFunction(id: number | undefined): string {
    return this.functions.find((f: IFunction) => f.id.toString() === id?.toString())?.name || '';
  }

  refresh(): void {
    window.location.reload();
    return;
  }
}
