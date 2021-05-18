import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])onResize(ev: any): void {
    this.innerWidth = window.innerWidth;
  }

  setIconTrigger(): string {
    if (innerWidth > 768) {
      return this.isCollapsed ? 'menu-unfold' : 'menu-fold';
    } else {
      return 'menu';
    }
  }
}
