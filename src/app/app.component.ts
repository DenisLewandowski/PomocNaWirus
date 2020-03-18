import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('pl');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang === 'pl' ? browserLang : 'en');
  }

  selectLangPl() {
      this.translateService.use('pl');
  }

  selectLangEn() {
    this.translateService.use('en');
  }

}
