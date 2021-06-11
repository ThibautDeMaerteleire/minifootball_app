import { Component, } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { ApiAuth } from 'src/app/interfaces/api';
import { Router } from '@angular/router';
import { baseRoutesEnum } from 'src/app/constants/routes.enum';


export interface ILoginData {
  email: string;
  password: string;
}

export interface IForgotPassword {
  loading: boolean;
  email: string;
  error: string;
  success: boolean;
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
  loading = false;
  forgotPassword: IForgotPassword = {
    loading: false,
    email: '',
    error: '',
    success: false,
  };

  constructor(private http: HttpClient, private router: Router) {}

  submit(): void {
    this.error = this.validation();

    if (typeof this.error === 'string') {
      return;
    }

    this.loading = true;

    const body: ILoginData = {
      email: this.email,
      password: this.password
    };

    const promise = this.http.post(API_BASE_URL + apiRoutes.login, body).toPromise();

    promise.then((data: ApiAuth | any) => {
      window.localStorage.setItem('Authentication', `${data.token_type} ${data.access_token}`);
      this.loading = false;
      this.router.navigateByUrl(baseRoutesEnum.app);
    }).catch((err: HttpErrorResponse) => {
      this.loading = false;
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

    if (this.password.length < 6) { // Check password
      return 'Password requires minimal 6 characters';
    }

    return null;
  }

  submitForgotPassword(): void {
    if (this.forgotPassword.email.length < 6) { // Check Email
      this.forgotPassword.error = 'Email requires minimal 6 characters';
      return;
    }

    this.forgotPassword.loading = true;

    const promise = this.http.post(
      API_BASE_URL + apiRoutes['forgot-password'],
      { email: this.forgotPassword.email }
    ).toPromise();

    promise.then((d: any) => {
      this.forgotPassword.loading = false;
      this.forgotPassword.success = true;
    }).catch((err: HttpErrorResponse) => {
      this.forgotPassword.loading = false;
      this.forgotPassword.error = err.error.message;
    });

    return;
  }

}
