import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { baseRoutesEnum } from '../../constants/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (window.sessionStorage.getItem('Authentication')) {
      if (next.url[0].path === baseRoutesEnum.app) {
        return true;
      } else {
        this.router.navigateByUrl(baseRoutesEnum.app);
        return false;
      }
    } else {
      if (next.url[0].path === baseRoutesEnum.app) {
        this.router.navigateByUrl(baseRoutesEnum.login);
        return false;
      } else {
        return true;
      }
    }
    
  }
}
