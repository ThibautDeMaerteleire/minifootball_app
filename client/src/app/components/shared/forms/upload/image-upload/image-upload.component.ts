import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { apiRoutes, API_BASE_URL, ASSETS_BASE_URL, } from 'src/app/constants/api.enum';
import { baseRoutesEnum } from 'src/app/constants/routes.enum';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  loading = false;
  avatarUrl?: string;
  uploadUrl = `${API_BASE_URL}${apiRoutes['upload-image']}`;
  imgBaseUrl = ASSETS_BASE_URL;

  @Input() placeholder = 'upload';
  @Input() className = '';

  @Output() responseEvent = new EventEmitter<string>();

  constructor(private msg: NzMessageService, private router: Router) {}

  beforeUpload = (file: NzUploadFile) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }

      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }

      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
    case 'uploading':
      this.loading = true;
      break;
    case 'done':
      this.responseEvent.emit(info.file.response[0]);
      // Get this url from response in real world.
      this.getBase64(info.file!.originFileObj!, (img: string) => {
        this.loading = false;
        this.avatarUrl = img;
      });
      break;
    case 'error':
      this.msg.error('Network error');
      this.loading = false;
      break;
    }
  }

  headers(): HttpHeaders | any {
    const authKey = window.sessionStorage.getItem('Authentication');

    if (authKey) {
      return { Authorization: authKey };
    }

    this.router.navigateByUrl(baseRoutesEnum.login);
    return {};
  }

}
