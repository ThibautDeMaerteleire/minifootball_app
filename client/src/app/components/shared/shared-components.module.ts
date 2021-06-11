import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from '../antd-components.module';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from './forms/select/language-selector/language-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './forms/input/custom-input/custom-input.component';
import { ImageUploadComponent } from './forms/upload/image-upload/image-upload.component';
import { LoaderComponent } from './loader/loader.component';
import { CarouselPaginationComponent } from './carousel-pagination/carousel-pagination.component';
import { SmallCustomInputComponent } from './forms/input/small-custom-input/small-custom-input.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LanguageSelectorComponent,
    CustomInputComponent,
    ImageUploadComponent,
    LoaderComponent,
    CarouselPaginationComponent,
    SmallCustomInputComponent,
  ],
  imports: [
    CommonModule,
    AntdComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LanguageSelectorComponent,
    CustomInputComponent,
    ImageUploadComponent,
    LoaderComponent,
    CarouselPaginationComponent,
    SmallCustomInputComponent,
  ]
})
export class SharedComponentsModule { }
