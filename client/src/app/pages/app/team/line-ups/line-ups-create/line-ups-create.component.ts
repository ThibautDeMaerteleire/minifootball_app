import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL } from 'src/app/constants/api.enum';
import { formations } from 'src/app/constants/formations.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-line-ups-create',
  templateUrl: './line-ups-create.component.html',
  styleUrls: ['./line-ups-create.component.scss']
})
export class LineUpsCreateComponent implements OnInit {

  name = '';
  assetsUrl = ASSETS_BASE_URL;
  loading = false;
  formation: formations = formations['1-2-2'];
  formations = formations;
  id = this.route.snapshot.paramMap.get('id');
  selectedPosition: number | null = null;
  selectedPlayer: number | null = null;
  players: any = null;
  defaultArray =  Array(8).fill(0).map((x,i) => i);
  customName = '';

  selection = [{
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  }, {
    id: null,
    name: null,
  },];

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPlayers();
    return;
  }

  getPlayers(): void {
    this.loading = true;

    const promise = this.http.get(
      API_BASE_URL + apiRoutes.teammembers + this.id,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.loading = false;
      this.players = d;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });
    return;
  }

  getDefenders(): number {
    return Number(this.formation.split('-')[1]);
  }

  getPosition(i: number): string {
    if (i == 0) {
      return 'GK';
    }

    if (i > 4) {
      return 'BE';
    }

    if (i == 1 || (i > 0 && this.getDefenders() >= i)) {
      return 'DF';
    } else {
      return 'AT';
    }
  }

  getColor(i: number): string {
    if (i == 0) {
      return 'bg-orange';
    }

    if (i > 4) {
      return 'bg-blue';
    }

    if (i == 1 || (i > 0 && this.getDefenders() >= i)) {
      return 'bg-green';
    } else {
      return 'bg-red';
    }
  }

  addPlayer(): void {
    if (this.selectedPlayer) {
      this.selection = this.selection.map((s: any, i: number) => {
        if (i == this.selectedPosition) {
          const player = this.players.find((e: any) => e.player_id == this.selectedPlayer);
          console.log(player);
          return {
            id: player.player_id,
            name: player.player.name + ' ' + player.player.surname,
          };
        }
        return s;
      });

    } else if (this.customName.length > 0) {
      this.selection = this.selection.map((s: any, i: number) => {
        if (i == this.selectedPosition) {
          return {
            id: null,
            name: this.customName,
          };
        }
        return s;
      });
    }

    this.selectedPlayer = null;
    return;
  }

  unusedPlayers(): Array<any> {
    return this.players.filter((player: any) => !this.selection.find((sel: any) => sel.id == player.player_id));
  }

  selectPlayer(id: number): void {
    if (this.selectedPlayer == id) {
      this.selectedPlayer = null;
    } else {
      this.selectedPlayer = id;
    }
    return;
  }

  submit(): void {
    this.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes.lineup,
      {
        name: this.name,
        team_id: this.id,
        formation: this.formation,
        selection: this.selection,
      },
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.loading = false;
      this.players = d;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.loading = false;
    });

    return;
  }
}
