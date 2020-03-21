import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FirebaseAuthService} from './firebase-auth.service';
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
        MatButtonModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        HttpClientModule,
        MatIconModule
    ],
    providers: [
        AngularFirestore,
        AngularFireDatabase
    ]
})
export class AuthModule {

}
