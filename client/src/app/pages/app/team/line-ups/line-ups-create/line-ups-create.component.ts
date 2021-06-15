import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formations } from 'src/app/constants/formations.enum';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-line-ups-create',
  templateUrl: './line-ups-create.component.html',
  styleUrls: ['./line-ups-create.component.scss']
})
export class LineUpsCreateComponent implements OnInit {

  formation: formations = formations['1-2-2'];
  formations = formations;

  constructor(
    private http: HttpClient,
    private auth: AuthGuardService,
  ) { }

  ngOnInit(): void {
    return;
  }

}
