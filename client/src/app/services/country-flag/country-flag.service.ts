import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

  getClassName(code: string) {
    return `flag-icon flag-icon-${code}`;
  }
  
}
