import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from '../auth/firebase-auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    currentUserEmail: string;

    constructor(private auth: FirebaseAuthService) {
    }

    ngOnInit() {
    }

    logout() {
        this.auth.signOut();
    }
}
