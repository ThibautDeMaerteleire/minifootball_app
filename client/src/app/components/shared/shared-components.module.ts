import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from '../antd-components.module';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from './forms/select/language-selector/language-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './forms/input/custom-input/custom-input.component';

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    AntdComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LanguageSelectorComponent,
    CustomInputComponent,
  ]
})
export class SharedComponentsModule { }
