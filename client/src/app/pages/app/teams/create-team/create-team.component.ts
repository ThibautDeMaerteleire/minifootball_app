import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ICreateTeamBody {
  name: string;
  slogan: string;
  description: string;
  thumbnail: string;
  rbfa_club_id: string;
  rbfa_team_id: string;
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

  body = {
    name: '',
    slogan: '',
    description: '',
    thumbnail: '',
    rbfa_club_id: '',
    rbfa_team_id: '',
  };

  constructor(private router: Router) {}

  getStatus(n: number): string {
    if (n === this.step) return 'progress';
    if (n > this.step) return 'wait';
    return 'finish';
  }

  slide(func: void): void {
    // Validating the data
    this.error = this.slideValidation();
    if (this.error.length > 0) return;
    // Setting new timestamp sliding
    this.lastSlideTime = new Date().getTime();
    func;
    console.log(this.body);
  }

  prev(func: void): void {
    this.slide(func);
    this.step = this.step - 1;
  }

  next(func: void): void {
    this.slide(func);
    this.step = this.step + 1;
  }

  carouselWidth(): number {
    return (this.step)/(this.maxStep)*100;
  }

  slideValidation(): string {
    if (this.step === 0) {
      if (this.body.name.length < 5) return 'Name requires minimal 5 characters.';
      if (this.body.description.length < 5) return 'The description requires minimal 20 characters.';
      if (this.body.thumbnail.length < 5) return 'You forgot to select a thumbnail.';
    }

    if (this.step === 1 && this.body.rbfa_club_id.length < 1) return 'You didn\'t select a club.';
    if (this.step === 2 && this.body.rbfa_team_id.length < 1) return 'You didn\'t select a team.';
    
    // Security for sliding too fast
    if (this.lastSlideTime + 3000 > new Date().getTime()) return 'You want to slide too fast.';
    return '';
  }
}
