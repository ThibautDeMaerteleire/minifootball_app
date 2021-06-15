import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-line-ups-team',
  templateUrl: './line-ups-team.component.html',
  styleUrls: ['./line-ups-team.component.scss']
})
export class LineUpsTeamComponent implements OnInit {

  ngOnInit(): void {
    return;
  }

}
