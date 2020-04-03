import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {

    lang: string;
    youtubeId: string;

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        const tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.lang = this.translate.currentLang.toUpperCase();
        if (this.lang === 'PL') {
            this.youtubeId = 'iwjXGTBNxtc';
        } else {
            this.youtubeId = '6J_kmCadie0';
        }
    }
}
