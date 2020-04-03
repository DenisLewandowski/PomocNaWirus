import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    videoSrc: string;

    constructor(private translate: TranslateService) {
        const lang = translate.currentLang;
        if (lang.toUpperCase() === 'PL') {
            this.videoSrc = 'iwjXGTBNxtc';
        } else {
            this.videoSrc = 'iwjXGTBNxtc';
        }
    }

    ngOnInit() {
    }
}
