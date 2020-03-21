import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
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
        AngularFirestore
    ]
})
export class AuthModule {

}
