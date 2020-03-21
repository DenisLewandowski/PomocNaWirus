import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    signUpDataForm: FormGroup;
    userDataForm: FormGroup;
    teamDataForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.initForms();
    }

    initForms() {
        this.signUpDataForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
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
}
