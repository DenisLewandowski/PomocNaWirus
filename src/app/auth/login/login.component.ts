import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {FirebaseAuthService} from '../firebase-auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    failedAuthMessage: boolean;

    constructor(private formBuilder: FormBuilder, private firebaseAuth: FirebaseAuthService, private router: Router) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.form = this.formBuilder.group({
            email: '',
            password: ''
        });
    }

    login() {
        this.firebaseAuth.login(this.form.getRawValue()).then(() => {
            this.failedAuthMessage = false;
            this.router.navigate(['/home']);
        }).catch(() => {
            this.failedAuthMessage = true;
        });
    }
}
