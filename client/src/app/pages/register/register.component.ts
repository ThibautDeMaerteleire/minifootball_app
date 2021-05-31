import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { baseRoutesEnum } from 'src/app/constants/routes.enum';
import { ApiAuth } from 'src/app/interfaces/api';


export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error: string | null = null;
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  passwordVisible = false;

  constructor(private http: HttpClient, private router: Router) {}

  submit(): void {
    this.error = this.validation();

    if (typeof this.error === 'string') {
      return;
    }

    // const headers = new HttpHeaders().set('Authorization', 'auth-token');
    const body: RegisterData = {
      email: this.email,
      username: this.username,
      password: this.password
    };

    const promise = this.http.post(API_BASE_URL + apiRoutes.register, body).toPromise();
    promise.then((data: ApiAuth | any) => {
      window.sessionStorage.setItem('Authentication', `${data.token_type} ${data.access_token}`);
      this.router.navigateByUrl(baseRoutesEnum.app);
    }).catch((err: HttpErrorResponse) => {
      this.error = err.error.message;
    });

    return;
  }

  validation(): string | null {
    if (!this.email.includes('@') || !this.email.includes('.')) { // Check email
      return 'Email is not valid';
    }

    if (this.email.length < 6) { // Check Email
      return 'Email requires minimal 6 characters';
    }

    if (this.email.length > 255) { // Check Email
      return 'Email requires maximal 255 characters';
    }

    if (this.username.length < 6) { // Check username
      return 'Username requires minimal 6 characters';
    }

    if (this.username.length >= 30) { // Check username
      return 'Username requires maximal 30 characters';
    }

    if (this.password.length < 6) { // Check password
      return 'Password requires minimal 6 characters';
    }

    if (this.password !== this.confirmPassword) { // Check password
      return 'Password isn\'t the same as confirm password';
    }

    return null;
  }

}
