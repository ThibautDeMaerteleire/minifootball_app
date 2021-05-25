import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  loading = false;
  displayStaticNav = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.loading = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.checkDisplayStatic(event.urlAfterRedirects);
        this.loading = false;
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        this.loading = false;
        this.checkDisplayStatic(event.url);
        // Present error to user
        console.log(event.error);
      }
    });
  }

  checkDisplayStatic(url: string): void {
    if (url.includes('/app')) {
      this.displayStaticNav = false;
    } else {
      this.displayStaticNav = true;
    }
  }
}
