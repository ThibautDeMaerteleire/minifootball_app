import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { IPlayer } from 'src/app/widgets/add-players/add-players.component';

@Component({
  selector: 'app-add-players-team',
  templateUrl: './add-players-team.component.html',
  styleUrls: ['./add-players-team.component.scss']
})
export class AddPlayersTeamComponent {

  players: IPlayer[] = [];

  constructor(private http: HttpClient) { }

  submit(): void {
    const checkPlayers: IPlayer | undefined = this.players?.find((e: IPlayer) => !e.function);

    if (checkPlayers) {
      return;
    }

    // Add http request

    return;
  }

}
