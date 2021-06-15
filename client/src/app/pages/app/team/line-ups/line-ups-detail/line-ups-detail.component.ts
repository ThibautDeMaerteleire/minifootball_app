import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-line-ups-detail',
  templateUrl: './line-ups-detail.component.html',
  styleUrls: ['./line-ups-detail.component.scss']
})
export class LineUpsDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  lineupId = this.route.snapshot.paramMap.get('lineupId');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    return;
  }


}
