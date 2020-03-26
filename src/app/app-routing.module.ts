import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardChild} from './auth/auth-guard-child.service';
import {AuthGuard} from './auth/auth-guard.service';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GeneralSettingsComponent} from './settings/general-settings/general-settings.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TeamSettingsComponent} from './team/team-settings/team-settings.component';

const appRoutes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuardChild],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {path: 'home', component: HomeComponent},
            {path: 'settings', component: GeneralSettingsComponent},
            {path: 'tasks', component: TaskListComponent},
            {path: 'team', component: TeamSettingsComponent}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignupComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
