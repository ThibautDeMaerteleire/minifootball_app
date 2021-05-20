import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])onResize(ev: any): void {
    this.innerWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
