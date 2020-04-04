import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {
    MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatRippleModule, MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment.prod';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {SettingsModule} from './settings/settings.module';
import {MainComponent} from './main/main.component';
import {OrderModule} from './tasks/order.module';
import {TeamModule} from './team/team.module';
import {VideoModule} from './video/video.module';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        MatToolbarModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatButtonModule,
        MatSidenavModule,
        MatRippleModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        AppRoutingModule,
        SettingsModule,
        AuthModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatExpansionModule,
        TeamModule,
        MatCardModule,
        OrderModule,
        VideoModule,
        CommonModule
    ],
    providers: [
        AngularFirestore
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/main/', '.json');
}
