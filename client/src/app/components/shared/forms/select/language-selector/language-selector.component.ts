import { Component, Input, } from '@angular/core';
import { languages } from 'src/app/constants/languages.enum';

@Component({
  selector: 'app-shared-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Input() selectedLanguage = 'GB-UKM';

  languages = languages;

  changeLanguage(value: any): void {
    // console.log(value);
    console.log('test');
  }

}
