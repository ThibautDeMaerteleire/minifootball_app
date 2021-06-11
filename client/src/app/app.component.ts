import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isConnected = true;  
  loading = false;
  displayStatic = true;

  constructor(
    private router: Router,
    private connectionService: ConnectionService
  ) {
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

    // Check for internet connection
    this.connectionService.monitor().subscribe(isConnected => {  
      this.isConnected = isConnected;
    });
  }

  checkDisplayStatic(url: string): void {
    if (url.includes('/app')) {
      this.displayStatic = false;
    } else {
      this.displayStatic = true;
    }
  }
  
}
