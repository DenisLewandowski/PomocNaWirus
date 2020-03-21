import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';


@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
        TranslateModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        AngularFirestore
    ]
})
export class AuthModule {
}
