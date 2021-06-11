import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-team',
  templateUrl: './overview-team.component.html',
  styleUrls: ['./overview-team.component.scss']
})
export class OverviewTeamComponent implements OnInit {
  
  data: any = null;
  loading = false;
  id = this.route.snapshot.paramMap.get('id');
  authkey: string = window.localStorage.getItem('Authentication') || '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const state = this.location.getState();

    if (state) {
      console.log(state);
    }

    return;
  }

}
