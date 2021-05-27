import { Component, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string | null = null;
  email = '';
  password = '';
  passwordVisible = false;
  
  constructor(private http: HttpClient) {}

  submit(): string {

    return '';
  }

  validation(): void {
    if(!this.email.includes('@')) { // Check email
      this.error = 'email is not valid';
    }

    if(this.password.length > 6) { // Check email
      this.error = 'Password requires minimal 6 characters';
    }
  }

}
