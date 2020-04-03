import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AuthModule} from '../auth/auth.module';
import {FirebaseAuthService} from '../auth/firebase-auth.service';
import {NotificationService} from '../notification.service';
import {TeamSettingsComponent} from './team-settings/team-settings.component';
import {TeamComponent} from './team.component';
import {TeamInviteComponent} from './team-invite/team-invite.component';



@NgModule({
    declarations: [TeamComponent, TeamSettingsComponent, TeamInviteComponent],
    imports: [
        CommonModule,
        MatCardModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        AuthModule,
        MatToolbarModule
    ],
    providers: [
        FirebaseAuthService,
        AngularFirestore,
        AngularFireDatabase,
        NotificationService
    ]
})
export class TeamModule {
}

function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/main/', '.json');
}
