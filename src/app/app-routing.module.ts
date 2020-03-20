import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GeneralSettingsComponent} from './settings/general-settings/general-settings.component';

const appRoutes = [
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {path: 'home', component: HomeComponent},
            {path: 'settings', component: GeneralSettingsComponent}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
