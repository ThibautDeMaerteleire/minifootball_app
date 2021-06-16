import { Component, HostListener, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth: number | string = '';

  constructor(
    public auth: AuthGuardService,
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
