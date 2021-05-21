import { Component, } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  name = 'Thibaut';
  welcomeDisplay = true;

  createArray(i: number): Array<any> {
    return new Array(i);
  }

}
