import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials, FirebaseAuthService} from '../firebase-auth.service';
import {Team} from '../team.model';
import {User} from '../user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    signUpDataForm: FormGroup;
    userDataForm: FormGroup;
    teamDataForm: FormGroup;
    signUpError: string;

    constructor(private formBuilder: FormBuilder, private firebase: FirebaseAuthService) {
    }

    ngOnInit() {
        this.initForms();
    }

    initForms() {
        this.signUpDataForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*\\d)(?=.*[A-Z]).{6,20})')]]
        });
        this.userDataForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required]
        });
        this.teamDataForm = this.formBuilder.group({
            name: ['', Validators.required],
            city: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    beforeTeamData() {
        this.teamDataForm.controls.phone.setValue(this.userDataForm.value.phone);
        this.teamDataForm.controls.email.setValue(this.signUpDataForm.value.email);
        this.teamDataForm.clearValidators();
    }

    save() {
        const credentials = this.signUpDataForm.getRawValue() as Credentials;
        let user: User = this.userDataForm.getRawValue() as User;
        user = {...user, email: credentials.email};
        const team = this.teamDataForm.getRawValue() as Team;

        this.firebase.newUserSignedIn(credentials, user, team);
    }
}
