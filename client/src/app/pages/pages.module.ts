import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppPagesModule } from './app/app.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AntdComponentsModule } from '../components/antd-components.module';
import { HttpClientModule, } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ComponentsModule,
    AppPagesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AntdComponentsModule,
    HttpClientModule,
  ],
  declarations: [
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class PagesModule { }

