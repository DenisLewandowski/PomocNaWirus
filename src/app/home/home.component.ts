import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from '../auth/firebase-auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private auth: FirebaseAuthService) {
    }

    ngOnInit() {
    }

    logout() {
        this.auth.signOut();
    }
}
