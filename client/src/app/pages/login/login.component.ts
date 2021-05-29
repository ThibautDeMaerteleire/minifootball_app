import { Component, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiRoutes, API_BASE_URL } from 'src/app/constants/api.enum';
import { Observable } from 'rxjs';


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
  response: any;

  constructor(private http: HttpClient) {}

  submit(): string | null {
    this.error = this.validation();

    if(typeof this.error === 'string') {
      return null;
    }

    // const headers = new HttpHeaders().set('Authorization', 'auth-token');
    const data: LoginData = {
      email: this.email,
      password: this.password
    };

    // const promise = this.http.post(API_BASE_URL + apiRoutes['sanctum-crsf'], data).toPromise();
    // promise.then((data) => {
    //   console.log(data);
    // }).catch((err) => console.error(err));
    // console.log(this.response);

    const promise = this.http.post(API_BASE_URL + apiRoutes.login, data).toPromise();
    promise.then((data) => {
      console.log(data);
    }).catch((err) => console.error(err));
    console.log(this.response);
    return '';
  }

  validation(): string | null {
    if (!this.email.includes('@') || !this.email.includes('.')) { // Check email
      return 'Email is not valid';
    }

    if (this.email.length <= 4) { // Check password
      return 'Email requires minimal 6 characters';
    }

    if (this.password.length <= 6) { // Check password
      return 'Password requires minimal 6 characters';
    }

    return null;
  }

}
