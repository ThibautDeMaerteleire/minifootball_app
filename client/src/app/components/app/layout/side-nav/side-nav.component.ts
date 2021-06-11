import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseRoutesEnum } from 'src/app/constants/routes.enum';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth: number | string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public logout(): void {
    window.localStorage.removeItem('Authentication');
    this.router.navigate([baseRoutesEnum.login]);
  }

}
