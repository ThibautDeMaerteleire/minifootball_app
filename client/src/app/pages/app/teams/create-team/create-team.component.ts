import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { IPlayer } from 'src/app/widgets/add-players/add-players.component';

interface ICreateTeamBody {
  name: string;
  slogan: string;
  description: string;
  thumbnail: string;
  rbfa_club_id: string;
  rbfa_team_id: string;
  players: IPlayer[] | [];
  addMyselfAsAdmin: boolean;
}

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent {

  step = 0;
  maxStep = 4;
  error = '';
  lastSlideTime = 0;
  submittedTeamId: number | null = null;
  loading = false;

  body: ICreateTeamBody = {
    name: '',
    slogan: '',
    description: '',
    thumbnail: '',
    rbfa_club_id: '',
    rbfa_team_id: '',
    players: [],
    addMyselfAsAdmin: true
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthGuardService,
  ) {}

  submit(): void {
    // Validating the data
    this.error = this.slideValidation();
    if (this.error.length > 0) {
      return;
    }

    this.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['create-team'],
      this.body,
      { headers: this.auth.getAuthHeaders() }
    ).toPromise();

    promise.then((d: any) => {
      this.submittedTeamId = d.id;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
      this.error = err.message;
      this.loading = false;
    });

    return;
  }

  addOtherTeam(func: void): void {
    this.body = {
      name: '',
      slogan: '',
      description: '',
      thumbnail: '',
      rbfa_club_id: '',
      rbfa_team_id: '',
      players: [],
      addMyselfAsAdmin: true,
    };

    this.submittedTeamId = null;

    this.slide(func, 0);
    return;
  }

  getStatus(n: number): string {
    if (n === this.step) {
      return 'progress';
    } else if (n > this.step) {
      return 'wait';
    } else {
      return 'finish';
    }
  }

  slide(func: void, newStep: number): void {
    // Validating the data
    this.error = this.slideValidation();
    if (newStep >= this.step && this.error.length > 0) {
      return;
    }

    // Setting new timestamp sliding
    this.lastSlideTime = new Date().getTime();

    func;

    this.step = newStep;
  }

  carouselWidth(): number {
    return (this.step) / (this.maxStep) * 100;
  }

  slideValidation(): string {
    if (this.step === 0) {
      if (this.body.name.length < 5) {
        return 'Name requires minimal 5 characters.';
      }

      if (this.body.description.length < 5) {
        return 'The description requires minimal 20 characters.';
      }
      if (this.body.thumbnail.length < 5) {
        return 'You forgot to select a thumbnail.';
      }
    }

    if (this.step === 1 && this.body.rbfa_club_id.length < 1) {
      return 'You didn\'t select a club.';
    }
    if (this.step === 2 && this.body.rbfa_team_id.length < 1) {
      return 'You didn\'t select a team.';
    }

    const checkPlayers: IPlayer | undefined = this.body.players?.find((e: IPlayer) => !e.function);
    if (this.step === 3 && checkPlayers) {
      return `You didn't select a function for ${checkPlayers.name} ${checkPlayers.surname}.`;
    }

    // Security for sliding too fast
    if (this.lastSlideTime + 1000 > new Date().getTime()) {
      return 'You want to slide too fast.';
    }

    return '';
  }
}
