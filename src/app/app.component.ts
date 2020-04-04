import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('pl');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang === 'pl' ? browserLang : 'en');

    this.addSvgIcons();
  }

  addSvgIcons() {
    this.matIconRegistry.addSvgIcon(
        'leader',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/leader.svg')
    );
    this.matIconRegistry.addSvgIcon(
        'person',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/person.svg')
    );
  }
}
