import { Component, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';

export interface LoginData {
  email: string;
  password: string;
}

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
  response: any = '';

  constructor(private http: HttpClient) {}

  submit(): string {
    // const headers = new HttpHeaders().set('Authorization', 'auth-token');
    const data: LoginData = {
      email: this.email,
      password: this.password
    };

    this.response = this.http.post(API_BASE_URL + apiRoutes.login, data);
    return '';
  }

  validation(): void {
    if (!this.email.includes('@')) { // Check email
      this.error = 'email is not valid';
    }

    if (this.password.length > 6) { // Check email
      this.error = 'Password requires minimal 6 characters';
    }
  }

}
