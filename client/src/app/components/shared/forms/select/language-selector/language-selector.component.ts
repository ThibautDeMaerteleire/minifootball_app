import { Component, Input, } from '@angular/core';
import { languages } from 'src/app/constants/languages.enum';
import { CountryFlagService } from 'src/app/services/country-flag/country-flag.service';

@Component({
  selector: 'app-shared-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Input() selectedLanguage: languages = languages.nl;

  languageEnum = languages;

  constructor(public countryFlag: CountryFlagService) {}

}
